import { Stack } from "expo-router/stack";
import CurrentUserContext from "./context/UserContext";
import { useState } from "react";

export default function RootLayout() {
  const [currentUser, setCurrentUser] = useState({
    username: "freezypop",
    user_id: 1,
    bio: "I like to sit in the fridge making sick burns about the maternal figure in your life.",
    avatar_img_url:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
  });
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CurrentUserContext.Provider>
  );
}
