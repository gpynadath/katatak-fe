import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import FilterToggleButton from "./FilterToggleButton";
import { FontAwesome5 } from "@expo/vector-icons";
import Filter from "./Filter";
import catImage from "../assets/catImage.png";

type HeaderProps = {
  topicsValue: string;
  setTopicsValue: React.Dispatch<React.SetStateAction<string>>;
  orderValue: string;
  setOrderValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({
  topicsValue,
  setTopicsValue,
  orderValue,
  setOrderValue,
}: HeaderProps) {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Katatak</Text>
        <Image source={catImage} style={styles.catImage} />
        <FilterToggleButton isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      </View>
      {isEnabled && (
        <Filter
          topicsValue={topicsValue}
          setTopicsValue={setTopicsValue}
          orderValue={orderValue}
          setOrderValue={setOrderValue}
        />
      )}
    </View>
  );
}

const marginTop = "15%";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: marginTop,
    backgroundColor: "#35B7EB",
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: 25,
    fontWeight: "400",
  },
  catImage: { height: 70, width: 50 },
});
