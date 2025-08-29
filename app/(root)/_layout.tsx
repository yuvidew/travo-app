import React, { useEffect } from "react";
import { Slot, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppLayout() {
    useEffect(() => {
        (async () => {
            const accessToken = await AsyncStorage.getItem("accessToken");
            const travelStyles = await AsyncStorage.getItem("travel_styles");
            if (!accessToken) {
                router.replace("/(auth)/welcome");
            }else if (accessToken && !travelStyles){
                router.replace("/(root)/Select_Travel_Style/select_travel_style")
            }
        })();
    }, []);

    return <Slot />;
}
