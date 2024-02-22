import { View, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import CurrentUserContext from "app/context/UserContext";

export default function User() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <View>
      <Text>Name: {currentUser.username}</Text>
    </View>
  );
}
