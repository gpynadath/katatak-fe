import React, { useContext } from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Text, Card } from "@rneui/themed";
import { ActiveKataContext } from "app/context/ActiveKata";
import { router } from "expo-router";

export default function KataCard({ kataData }) {
  const { activeKata, setActiveKata } = useContext(ActiveKataContext);
  const onPressFunction = (id: number) => {
    setActiveKata(id);
  };
  return (
    <ScrollView>
      {kataData.map((kata: object) => {
        return (
          <Card key={kata.kata_id}>
            <View style={styles.user}>
              <Text style={styles.name}>{kata.kata_name}</Text>
              <Text style={styles.name}>{kata.description}</Text>
              <Text style={styles.name}>{kata.difficulty}</Text>
              <Pressable
                onPress={() => {
                  router.push("/CurrentKata");
                  onPressFunction(kata.kata_id);
                }}
              >
                <Text>Solve this!</Text>
              </Pressable>
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
