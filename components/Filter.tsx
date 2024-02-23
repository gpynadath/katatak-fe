import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { getTopics } from "app/api";

const orderByData = [
  { label: "Easy", value: "easiest" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hardest" },
];

export default function Filter({
  topicsValue,
  setTopicsValue,
  orderValue,
  setOrderValue,
}) {
  const [topicsData, setTopicsData] = useState([]);

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
        data={orderByData}
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
