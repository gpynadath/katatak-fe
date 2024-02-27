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
    alignItems: "center",
  },
  testContainer: {
    minHeight: 60,
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
    width: 300,
  },
  testContainerSmall: {
    alignItems: "center",
  },
  testContainerLarge: {
    alignItems: "flex-start",
  },
  tick_cross: {
    width: 40,
    height: 40,
  },
  testDescription: {
    height: "auto",
    fontSize: 16,
    paddingLeft: 10,
    maxWidth: 250,
  },
  logsContainer: {
    width: 300,
    paddingVertical: 10,
    backgroundColor: "grey",
    marginBottom: 10,
  },
  logText: {
    paddingLeft: 50,
    paddingVertical: 10,
    maxWidth: 200,
  },
  keyWordButtons: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
