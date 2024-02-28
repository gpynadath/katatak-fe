import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function Error() {
  const [fontsLoaded, fontError] = useFonts({
    Pixellari: require("../assets/fonts/Pixellari.ttf"),
    dogica: require("../assets/fonts/dogica.ttf"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.loading}>Error</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    marginTop:400,
    fontFamily: "dogica",
  },
});
