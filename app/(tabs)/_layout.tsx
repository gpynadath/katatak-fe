import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { useContext, useState, useEffect } from "react";
import { ActiveKataContext } from "../context/ActiveKata";
import { CurrentUserContext } from "../context/UserContext";

export default function TabsLayout() {
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
          title: "void_cat",
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

function useFetchUser(user_id) {
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUser = async () => {
    setLoading(true);
    try {
      const loadedUser: User = await getUser(user_id);
      setUser(loadedUser);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, [user_id]);

  return { user, isLoading, error };
}