import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
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
  isLoading: boolean;
  error: any;
}

interface individualTestObj {
  pass: boolean;
  description: string;
  logs: Array<string>;
}

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

  if (isLoading && input === "Default")
    return (
      <Text style={styles.baseText}>
        Submit your function to pass the tests!
      </Text>
    );
  if (isLoading && input !== "Default")
    return (
      <Text style={styles.baseText}>
        Testing your code (this might take a moment)...
      </Text>
    );
  if (error) return <Text>Error...Solution </Text>; // Add indepth error handling...
  if (!output) return <Text>No Output</Text>;
  console.log(output.logs, "<<< output.logs");
  return (
    <View style={styles.outputContainer}>
      <Text style={styles.baseText}>{output.success ? "SUCCESS" : "FAIL"}</Text>
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
    </View>
  );
}

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

  return { output, isLoading, error };
}
