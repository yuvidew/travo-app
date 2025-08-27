import React, { useEffect } from "react";
import { Slot, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppLayout() {
    useEffect(() => {
        (async () => {
            const accessToken = await AsyncStorage.getItem("accessToken");
            if (!accessToken) {
                router.replace("/(auth)/welcome");
            }
        })();
    }, []);

    return <Slot />;
}
