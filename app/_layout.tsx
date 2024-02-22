import { Stack } from "expo-router/stack";
import { ActiveKataProvider } from "./context/ActiveKata";

export default function RootLayout() {
  return (
    <ActiveKataProvider>
      <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ActiveKataProvider>
  );
}
