import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { getTopics } from "app/api";

// const topicsData = [
//   { label: "Arrays", value: "1" },
//   { label: "Strings", value: "2" },
// ];
const orderByData = [
  { label: "Easy", value: "1" },
  { label: "Medium", value: "2" },
  { label: "Hard", value: "2" },
];

export default function Filter() {
  const [topicsData, setTopicsData] = useState([]);
  const [topicsValue, setTopicsValue] = useState("null");
  const [orderValue, setOrderValue] = useState("null");

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getTopics();
      setTopicsData(data);
    };
    fetchTopics();
  }, []);
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        data={topicsData}
        search
        maxHeight={300}
        labelField="topic_name"
        valueField="topic_name"
        placeholder={"Topics"}
        searchPlaceholder="Search..."
        value={topicsValue}
        onChange={(item) => {
          setTopicsValue(item.topic_name);
        }}
      />
      <Dropdown
        style={styles.dropdown}
        data={topicsData}
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
