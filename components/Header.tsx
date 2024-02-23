import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import FilterToggleButton from "./FilterToggleButton";
import { FontAwesome5 } from "@expo/vector-icons";
import Filter from "./Filter";

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
        <Text>
          Katatak <FontAwesome5 name="cat" size={24} color="black" />
        </Text>
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
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
