import { View, Text, Button } from "react-native";
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

type individualTestObj = {
  pass: boolean;
  description: string;
  logs: Array<string>;
};

export default function Output({
  kata_id,
  input,
}: {
  kata_id: number;
  input: string;
}) {
  //console.log(input + "<< input" + input.trim() + "<<input.trim()");
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

  return (
    <>
      <Text style={styles.baseText}>
        {output.success ? "SUCCESS" : "FAIL"}
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
        {output.logs
          ? "\nLogs (remember, any console.logs will log for each test..):\n" +
            output.logs
          : null}
      </Text>
    </>
  );
}

function useSendInput(kata_id: number, input: string) {
  const [output, setOutput] = useState<Output>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(input, "<--- Helen's");

  const sendInput = async () => {
    setLoading(true);
    try {
      const response: Output = await postKata(kata_id, input);

      // const individualResults = createIndResObj(response);

      // response.individualResults = individualResults;
      console.log(Array.isArray(response.test_results), "<--- is Array");
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

// const createIndResObj = (response: Output) => {
//   const testsRegex: RegExp = /(✓|✕).*(ms\))|/g;
//   const charBeforeTick: RegExp = /(?=✓|✕)/g;

//   const functionName: string = response.test_results.split(/\r?\n/)[0];
//   const splitResults = response.test_results.match(testsRegex);

//   const tests = response.test_results.split(charBeforeTick);

//   tests.shift();

//   const testObjArr: individualTestObj[] = tests.map((result: string) => {
//     const pass: boolean = result.includes("✓");
//     let description: string = "";
//     if (pass) {
//       description += result.split("✓").join("");
//     } else {
//       description += result.split("✕").join("");
//     }
//     const testObj: individualTestObj = {
//       pass: pass,
//       description: description,
//     };
//     return testObj;
//   });

//   const individualResults: IndividualResults = {
//     functionName: functionName,
//     individualTests: testObjArr,
//   };
//   return individualResults;
// };
