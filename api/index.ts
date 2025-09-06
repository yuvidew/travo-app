import { Trip, TripResult } from "../types/type";
import { api_end_points } from "../constants/api-endpoints"
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

export type TripsCursorResponse = {
    /** Normalized list (use this in your FlatList) */
    items: Trip[];
    /** For cursor-based pagination; undefined/null when no more pages */
    nextCursor?: string | null;

    /** Optional fields for page/limit backends (kept for flexibility) */
    page?: number;
    totalPages?: number;
};

type GetTripsArgs = {
    /** Optional override; if omitted we read AsyncStorage("travel_styles") */
    styles?: string[];
    /** Cursor-based pagination */
    cursor?: string;
    /** Page/limit pagination */
    page?: number;
    limit?: number;
    /** React Query passes this; enables request cancellation */
    signal?: AbortSignal;
};

export const getTripsByTravelStyle = async ({
    styles,
    cursor,
    page,
    limit,
    signal,
}: GetTripsArgs = {}) => {
    const travelStyles = JSON.parse((await AsyncStorage.getItem("travel_styles")) || "[]");


    try {
        const params: Record<string, string | number | undefined> = {};
        if (cursor) {
            params.cursor = cursor;
        } else if (typeof page === "number") {
            params.page = page;
            if (typeof limit === "number") params.limit = limit;
        }
        const { data, status } = await api.get(
            `${api_end_points.get_trips_by_travel_style}${travelStyles?.join(",")}`,
            { params, signal }
        );

        if (status === 200) {
            return data.trips as Trip[]
        }

    } catch (error) {
        if (isAxiosError(error)) {
            console.log("Error to get trips", error?.response?.data.message);
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

type GetTripByIDResponse = {
    code : number,
    message : string,
    trip : Trip,
    result : TripResult
}

export const getTripById = async (id : string) => {
    try {
        const {data ,  status} = await api.get<GetTripByIDResponse>(`${api_end_points.get_trip_by_id}/${id}`);

        if (status === 200) {
            return data
        }


    } catch (error) {
        if (isAxiosError(error)) {
            console.log("Error to get trips", error?.response?.data.message);
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