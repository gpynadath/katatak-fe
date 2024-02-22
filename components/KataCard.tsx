import React from "react";
import { View, StyleSheet, Image, ScrollView, Button } from "react-native";
import { Text, Card, Icon } from "@rneui/themed";

export default function KataCard({ kataData }) {
  return (
    <ScrollView>
      {kataData.map((kata: object) => {
        return (
          <Card>
            <View style={styles.user}>
              <Text style={styles.name}>{kata.kata_name}</Text>
              <Text style={styles.name}>{kata.description}</Text>
              <Text style={styles.name}>{kata.difficulty}</Text>
              <Button title="Go to Kata" />
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
  button: {
    height: 5,
  },
  user: {
    marginBottom: 6,
  },
  name: {
    fontSize: 10,
    marginTop: 5,
  },
});
