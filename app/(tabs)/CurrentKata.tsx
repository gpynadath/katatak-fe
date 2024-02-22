import { View, Text } from "react-native";
import React from "react";
import KataPage from "app/KataPage/KataPage";
import { useContext } from "react";
import CurrentUserContext from "app/context/UserContext";

export default function currentKata() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <KataPage />
    </>
  );
}
