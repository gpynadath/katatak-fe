import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="CurrentKata"
        options={{
          title: "Current Katas",
          tabBarIcon: () => (
            <AntDesign name="codesquareo" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: "User",
          tabBarIcon: () => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
