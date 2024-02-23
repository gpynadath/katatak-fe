import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { postKata } from "../api";
import { styles } from "./KataPageStyleSheet";

interface Output {
  success: boolean;
  stderr: string;
  stdout: string;
  test_results: string;
  logs: Array<string>;
  posted_solution: boolean;
}

interface SendInput {
  output: Output | undefined;
  isLoading: boolean;
  error: any;
}

export default function Output({
  kata_id,
  input,
}: {
  kata_id: number;
  input: string;
}) {
  const { output, isLoading, error }: SendInput = useSendInput(kata_id, input);

  if (isLoading && input === "Default")
    return (
      <Text style={styles.baseText}>
        Submit your function to pass the tests!
      </Text>
    );
  if (isLoading && input !== "Default") return <Text>Loading...</Text>;
  if (error) return <Text>Error...Solution </Text>; // Add indepth error handling...
  if (!output) return <Text>No Output</Text>;

  return (
    <>
      <Text>
        {output.success
          ? "SUCCESS\n" + output.test_results
          : "FAIL\n" + output.test_results}
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
