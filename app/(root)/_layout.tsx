import React, { useEffect } from "react";
import { Slot, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppLayout() {
    useEffect(() => {
        (async () => {
            const accessToken = await AsyncStorage.getItem("accessToken");
            const travelStyles = await AsyncStorage.getItem("travel_styles");
            if (!accessToken) {
                console.log("the access token" , accessToken);
                router.push("/(auth)/welcome");
            }else if (accessToken && !travelStyles){
                router.replace("/(root)/Select_Travel_Style/select_travel_style")
            }else {
                router.replace("/(root)/(tabs)")
            }
        })();
    }, []);

    return <Slot />;
}
