import { StyleSheet, View, Text, Button } from "react-native";

export const styles = StyleSheet.create({
  baseText: {
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  submitButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  codeEditor: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  outputContainer: {
    padding: 20,
  },
  testContainer: {
    minHeight: 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  tick_cross: {
    width: 48,
    height: 48,
  },
  testDescription: {
    height: "auto",
    fontSize: 16,
    paddingLeft: 10,
  },
  logsContainer: {
    paddingLeft: 50,
  },
  logText: {
    paddingLeft: 20,
    paddingVertical: 10,
  },
});
