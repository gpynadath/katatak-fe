import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import CurrentUserContext from "app/context/UserContext";
import UserCard from "../User-page/UserCard";
import UserKatas from "components/UserKatas";

export default function User() {
  const currentUser = useContext(CurrentUserContext);

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
