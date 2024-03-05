import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "app/context/UserContext";
import UserCard from "../User-page/UserCard";

export default function User() {
  return (
    <View style={styles.container}>
      <UserCard />
    </View>
  );
}

const marginTop = "11%";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: marginTop,
  },
});
