import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import KataCard from "./KataCard";
import axios from "axios";

export default function KataList() {
  const [kataData, setKataData] = useState([]);

  useEffect(() => {
    axios.get("https://katatak.onrender.com/api/katas").then((data) => {
      setKataData(data.data.katas);
    }, []);
  });
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
