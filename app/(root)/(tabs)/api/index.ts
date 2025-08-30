import { api_end_points } from "../../../../constants/api-endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { isAxiosError } from "axios";
import Toast from "react-native-toast-message";

const api = axios.create();

api.interceptors.request.use(async (config) => {

    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Content-Type"] = "application/json";
    }
    return config;
});

export const getTripsByTravelStyle = async () => {
    const travelStyles = JSON.parse((await AsyncStorage.getItem("travel_styles")) || "[]");


    try {
        const { data, status } = await api.get(`${api_end_points.get_trips_by_travel_style}${travelStyles?.join(",")}`);

        if (status === 200) {
            return data.trips
        }

    } catch (error) {
        if (isAxiosError(error)) {
            console.log("Error to get trips" , error?.response?.data.message);
            if (error.response?.status === 401) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })

                throw error
            } else if (error.response?.status === 404) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })

                throw error
            } else if (error.response?.status === 500) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })

                throw error
            } else {
                Toast.show({
                    type: "error",
                    text1: error?.response?.data.message
                })

                throw error
            }
        }
        throw error;
    }
}