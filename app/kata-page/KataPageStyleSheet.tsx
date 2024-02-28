import { StyleSheet, View, Text, Button } from "react-native";

export const styles = StyleSheet.create({
  baseText: {
    padding: 10,
    fontFamily: "Pixellari",
    fontSize: 20,
  },
  titleText: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    marginTop: "3%",
    fontFamily: "dogica",
    color: "#FF3918",
  },
  submitButton: {
    fontFamily: "Pixellari",
    fontSize: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    marginTop: "5%",
    borderWidth: 2,
    backgroundColor: "#FFCD6B",
  },
  codeEditor: {
    flex: 1,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  testContainer: {
    minHeight: 60,
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
    width: 330,
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
    maxWidth: 270,
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
    flexDirection: "row",
    width: 360,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  keywordButtonStyles: {
    fontFamily: "Annoymous",
    fontSize: 15,
    borderWidth: 2,
    padding: 4,
    margin: 0,
    backgroundColor: "#D8AC5B",
  },
  outputContainer: {
    flex: 1,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  kataPageScrollContainer: {
    alignItems: "center",
  },
  homePageScrollContainer: {
    marginTop: "8%",
  },
});
