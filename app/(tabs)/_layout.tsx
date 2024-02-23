import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";
import { useContext } from "react";
import CurrentUserContext from "app/context/UserContext";

export default function TabsLayout() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="CurrentKata"
        options={{
          title: "Current Kata",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="codesquareo" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: currentUser.username,
          headerShown: false,
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
