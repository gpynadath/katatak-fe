import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import KataCard from "./KataCard";

import { getAllKatas } from "app/api";

export default function KataList({ topicsValue, orderValue }) {
  const [kataData, setKataData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllKatas(topicsValue, orderValue);
      setKataData(data.data.katas);
    };
    fetchData();
  }, [topicsValue, orderValue]);

  return (
    <View style={styles.container}>
      <KataCard kataData={kataData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 5,
    margin: 5,
  },
});
