import { StyleSheet, Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F2F2D0",
    height: ScreenHeight,
  },
  statsContainer: {
    backgroundColor: "#F2F2D0",
    textAlign: "left",
  },
  usernameHeader: {
    fontFamily: "Pixellari",
    fontSize: 25,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 10,
  },
  img: {
    padding: 50,
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: "10%",
    marginBottom: 15,
  },
  bio: {
    margin: 20,
    fontFamily: "Pixellari",
    fontSize: 15,
    marginBottom: 30,
  },
  topicText: {
    fontFamily: "dogica",
    fontSize: 9,
    marginBottom: 15,

    padding: 5,
  },
  content: {
    marginLeft: 10,
  },
  footer: {
    alignItems: "center",
  },
});
