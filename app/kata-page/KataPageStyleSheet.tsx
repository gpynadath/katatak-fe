import { StyleSheet, View, Text, Button } from "react-native";

export const styles = StyleSheet.create({
  
  baseText: {
    padding: 10,
    fontFamily:"Pixellari",
    fontSize:20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontFamily:"dogica"
  },
  submitButton: {
    fontFamily: "Pixellari",
    fontSize: 25,
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center",
    padding: 10,
    borderWidth:2,
  },
  codeEditor: {
    flex: 1,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    width: "100%",
    justifyContent: "center",
  },
  keywordButtonStyles:{
    fontFamily:"Annoymous",
    fontSize:15,
    borderWidth:2,
    padding:4,
    margin:3,
  },
  outputContainer: {
    flex: 1,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  kataPageScrollContainer: {
    alignItems: "center",
  },
  homePageScrollContainer: {
    marginTop: "8%",
  },
});
