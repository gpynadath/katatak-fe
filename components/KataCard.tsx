import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Card, Icon } from "@rneui/themed";

export default function KataCard({ kataData }) {
  return (
    <ScrollView>
      {kataData.map((kata:object) => {
        return (
          <Card>
            <View style={styles.user}>
              <Text style={styles.name}>{kata.kata_name}</Text>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
