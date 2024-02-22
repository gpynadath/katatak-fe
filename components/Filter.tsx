import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const topicsData = [
  { label: "Arrays", value: "1" },
  { label: "Strings", value: "2" },
];
const orderByData = [
  { label: "Easy", value: "1" },
  { label: "Medium", value: "2" },
  { label: "Hard", value: "2" },
];

export default function Filter() {
  const [topicsValue, setTopicsValue] = useState("null");
  const [orderValue, setOrderValue] = useState("null");

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        data={topicsData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Topics"}
        searchPlaceholder="Search..."
        value={topicsValue}
        onChange={(item) => {
          setTopicsValue(item.value);
        }}
      />
      <Dropdown
        style={styles.dropdown}
        data={orderByData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Order By"}
        searchPlaceholder="Search..."
        value={orderValue}
        onChange={(item) => {
          setOrderValue(item.value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
});
