import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { useContext } from "react";
import CurrentUserContext from "app/context/UserContext";

export default function TabsLayout() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <Tabs sceneContainerStyle={{ backgroundColor: "#F2F2D0" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          tabBarInactiveBackgroundColor: "#D8AC5B",
          tabBarActiveBackgroundColor: "#FFCD6B",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tabs.Screen
        name="CurrentKata"
        options={{
          title: "Kata",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="codesquareo" size={24} color="black" />
          ),
          tabBarInactiveBackgroundColor: "#D8AC5B",
          tabBarActiveBackgroundColor: "#FFCD6B",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: currentUser.username,
          headerShown: false,
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          tabBarInactiveBackgroundColor: "#D8AC5B",
          tabBarActiveBackgroundColor: "#FFCD6B",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#FFCD6B",
  },
});
