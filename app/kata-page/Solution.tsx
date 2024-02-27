import CodeInputEditor from "./CodeInputEditor";
import Output from "./Output";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface Solution {
  kata_id: number;
  setComplete: Dispatch<SetStateAction<boolean>>;
}

export default function Solution({ kata_id, setComplete }: Solution) {
  const [input, setInput] = useState("Default");

  return (
    <>
      <CodeInputEditor setInput={setInput} />
      <Output kata_id={kata_id} input={input} style={styles.outputContainer} />
    </>
  );
}

const styles = StyleSheet.create({
  outputContainer: {
    padding: 20,
  },
});
