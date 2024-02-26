import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import KataCard from "./KataCard";

import { getAllKatas } from "app/api";

type KataListProps = {
  topicsValue: string;
  orderValue: string;
};
type kataObj = {
  kata_id: number;
  kata_name: string;
  description: string;
  difficulty: string;
};

export default function KataList({ topicsValue, orderValue }: KataListProps) {
  const [kataData, setKataData] = useState<kataObj[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      if (topicsValue === "All Topics...") {
        const data = await getAllKatas("", orderValue);
        setKataData(data.data.katas);
        setLoading(false);
      } else {
        const data = await getAllKatas(topicsValue, orderValue);
        setKataData(data.data.katas);
        setLoading(false);
      }
    };
    fetchData();
  }, [topicsValue, orderValue]);

  if (isLoading) return <Text>Loading...</Text>;
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
