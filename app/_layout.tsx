import { Stack } from "expo-router/stack";
import { ActiveKataProvider } from "./context/ActiveKata";
import { CurrentUserProvider } from "./context/UserContext";
import { SolvedThisSessionProvider } from "./context/SolvedKatas";
import { useState } from "react";

export default function RootLayout() {
  return (
    <SolvedThisSessionProvider>
      <CurrentUserProvider>
        <ActiveKataProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ActiveKataProvider>
      </CurrentUserProvider>
    </SolvedThisSessionProvider>
  );
}
