import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homePageScrollContainer: {
    marginTop: "8%",
  },
  headerContainer: {
    display: "flex",
    marginTop: "0%",
    backgroundColor: "#F2F2D0",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: 25,
    fontWeight: "400",
  },
  katatakLogo: { height: 30 * 1.5, width: 179 * 1.5 },
  bar: {
    width: 228 * 1.5,
    height: 26 * 1.5,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 0,
  },
  filterContainer: {
    backgroundColor: "#F2F2D0",
  },
  filter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  dropdown: {
    display: "flex",
    width: "40%",
    marginLeft: 12,
    height: 50,
    borderBottomWidth: 0,
    fontFamily: "Pixellari",
    fontSize: 16,
  },
  katasContainer: {
    backgroundColor: "#F2F2D0",
  },
  hideCard: {
    elevation: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  card: {
    width: 213 * 1.5,
    height: 97 * 1.5,
    alignSelf: "center",
    justifyContent: "space-between",
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  kataHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5,
  },
  titleText: {
    fontFamily: "Pixellari",
    fontSize: 16,
    marginLeft: 10,
  },
  difficultyText: {
    fontFamily: "dogica",
    fontSize: 8,
    marginRight: 10,
    marginTop: 6,
  },
  topicText: {
    fontFamily: "dogica",
    fontSize: 8,
    marginBottom: 15,
  },
  content: {
    marginLeft: 10,
  },
  footer: {
    alignItems: "center",
  },
  fightButton: {
    flex: 3,
    alignSelf: "center",
  },
  fightButtonText: {
    fontFamily: "Pixellari",
    fontSize: 16,
    marginBottom: 8,
    color: "black",
  },
  pressedFightButtonText: {
    fontFamily: "Pixellari",
    fontSize: 16,
    marginBottom: 8,
    color: "gray",
  },
});
