import "./global.css"
import { Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  // Temporary fix for development - remove in production
  const [refreshKey, setRefreshKey] = useState(0);
  
  useEffect(() => {
    if (__DEV__) {
      const interval = setInterval(() => {
        setRefreshKey(prev => prev + 1);
      }, 1000); // Refresh every second in dev mode
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <View key={refreshKey} className="flex-1 items-center justify-center bg-white">
      <Text  className="text-lg font-bold  text-red-800">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}