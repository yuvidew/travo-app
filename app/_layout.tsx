import { QueryClientProviderComp } from "../components/providers/query-client-provider";
import "./global.css"
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <QueryClientProviderComp>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(root)" options={{ headerShown: false }} /> */}
      </Stack>
    </QueryClientProviderComp>
  );
}
