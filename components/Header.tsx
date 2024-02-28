import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import catImage from "../assets/katatak_logo.png";

export default function Header() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={catImage} style={styles.catImage} />
      </View>
    </View>
  );
}

const marginTop = "0%";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: marginTop,
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
  catImage: { height: 30 * 1.5, width: 179 * 1.5 },
});
