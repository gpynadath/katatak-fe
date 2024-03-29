import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { getTopics } from "app/api";
import { useFonts } from "expo-font";
import { styles } from "../../app/index-page/indexPageStylesheet";

const orderByData = [
  { label: "Easiest", value: "easiest" },
  { label: "Hardest", value: "hardest" },
];

type HeaderProps = {
  topicsValue: string;
  setTopicsValue: React.Dispatch<React.SetStateAction<string>>;
  orderValue: string;
  setOrderValue: React.Dispatch<React.SetStateAction<string>>;
};

type itemObj = {
  topic_name: string;
};

export default function Filter({
  topicsValue,
  setTopicsValue,
  orderValue,
  setOrderValue,
}: HeaderProps) {
  const { topicsData, isLoading, error } = useFetchTopics();

  const [fontsLoaded, fontError] = useFonts({
    Pixellari: require("../../assets/fonts/Pixellari.ttf"),
    dogica: require("../../assets/fonts/dogica.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (isLoading) return <View style={[styles.filter, styles.filterLoading]}><Text>Loading...</Text></View>;
  if (error) return <Text>Error...Filter </Text>; // Add indepth error handling...
  if (!topicsData) return <Text>Topics not found</Text>;

  return (
    <View style={styles.filter}>
      <Dropdown
        style={styles.dropdown}
        fontFamily="Pixellari"
        data={topicsData}
        search
        maxHeight={300}
        labelField="topic_name"
        valueField="topic_name"
        placeholder={"Topics"}
        searchPlaceholder="Search..."
        value={topicsValue}
        onChange={(item: itemObj) => {
          setTopicsValue(item.topic_name);
        }}
      />
      <Dropdown
        style={styles.dropdown}
        fontFamily="Pixellari"
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

function useFetchTopics() {
  const [topicsData, setTopicsData] = useState<itemObj[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTopics = async () => {
    try {
      const data = await getTopics();
      data.unshift({ topic_name: "All Topics..." });
      setTopicsData(data);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return { topicsData, isLoading, error };
}
