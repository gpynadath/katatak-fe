import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
import { styles } from "./KataPageStyleSheet";

export default function KataData({
  kata_name,
  description,
}: {
  kata_name: string;
  description: string;
}) {
  return (
    <View>
      <Text style={styles.titleText}>{kata_name}</Text>
      {description.split("\n").map((sentence: string, index) => {
        const trimmed = sentence.trim();
        return trimmed !== "" ? (
          <Text key={index} style={styles.baseText}>
            {trimmed}
          </Text>
        ) : null;
      })}
    </View>
  );
}
