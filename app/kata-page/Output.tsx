import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { postKata } from "../api";
import { styles } from "./KataPageStyleSheet";
import TestResult from "./TestResult";

interface Output {
  success: boolean;
  test_results: individualTestObj[];
  logs: Array<string>;
  posted_solution: boolean;
}

interface SendInput {
  output: Output | undefined;
  setOutput: Dispatch<SetStateAction<Output | undefined>>;
  isLoading: boolean;
  error: any;
}

interface individualTestObj {
  pass: boolean;
  description: string;
  logs: Array<string>;
}

const outputImg = {
  top: require("../../assets/output_top_new.png"),
  center: require("../../assets/output_center_new.png"),
  bottom: require("../../assets/output_bottom_new.png"),
};

const boxWidth = 345;
const boxHeight = 39;

export default function Output({
  kata_id,
  input,
}: {
  kata_id: number;
  input: string;
}) {
  const formattedStr: string = input.replaceAll('"', "'");
  const { output, isLoading, error }: SendInput = useSendInput(
    kata_id,
    formattedStr.trim()
  );

  //console.log(output.logs, "<<< output.logs");

  const getConsoleOutput = (
    output: Output | undefined,
    isLoading: boolean,
    error: any
  ) => {
    if (isLoading && input === "Default")
      return (
        <Text style={styles.outcomeText}>
          Click submit to check your solution!
        </Text>
      );
    if (isLoading && input !== "Default")
      return (
        <Text style={styles.outcomeText}>
          Testing your code (this might take a moment)...
        </Text>
      );
    if (error) return <Text style={styles.outcomeText}>Error...Solution </Text>; // Add indepth error handling...
    if (!output) return <Text style={styles.outcomeText}>No Output</Text>;

    return (
      <>
        <Text style={styles.outcomeText}>
          {output.success ? "SUCCESS" : "FAIL"}
        </Text>
        {output.test_results.map((result: individualTestObj) => {
          return (
            <TestResult
              key={result.description}
              description={result.description}
              pass={result.pass}
              logs={result.logs}
            />
          );
        })}
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={outputBox.box}>
      <ImageBackground
        source={outputImg.top}
        style={outputBox.top}
        resizeMode="cover"
      >
        <Text style={styles.consoleText}>Console</Text>
      </ImageBackground>
      <ImageBackground
        source={outputImg.center}
        style={centerStyle(output)}
        resizeMode="stretch"
      >
        {getConsoleOutput(output, isLoading, error)}
      </ImageBackground>
      <ImageBackground
        source={outputImg.bottom}
        style={outputBox.bottom}
        resizeMode="cover"
      />
    </ScrollView>
  );
}

const centerStyle = (output: Output | undefined) => {
  // test_results[x].logs[]
  let sum: number = 0;

  if (output !== undefined && output.test_results !== undefined) {
    for (let i = 0; i < output?.test_results.length; i++) {
      if (output?.test_results[i].logs !== undefined) {
        sum += output?.test_results[i].logs.length;
      }
    }
  }

  return {
    width: boxWidth,
    height:
      120 *
        (output?.test_results === undefined ? 1 : output.test_results.length) +
      50 * sum,
  };
};

const outputBox = StyleSheet.create({
  box: {
    paddingBottom: 50,
    alignItems: "center",
  },
  top: {
    width: boxWidth,
    height: boxHeight,
  },
  center: {
    width: boxWidth,
  },
  bottom: {
    width: boxWidth,
    height: boxHeight,
  },
});

function useSendInput(kata_id: number, input: string) {
  const [output, setOutput] = useState<Output>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendInput = async () => {
    setLoading(true);
    try {
      const response: Output = await postKata(kata_id, input);
      setOutput(response);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (input !== "Default") {
      sendInput();
    }
  }, [input]);

  return { output, setOutput, isLoading, error };
}
