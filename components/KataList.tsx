import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import KataCard from "./KataCard";

import { getAllKatas } from "app/api";

export default function KataList() {
  const [kataData, setKataData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllKatas();
      setKataData(data.data.katas);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>KataList</Text>
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
