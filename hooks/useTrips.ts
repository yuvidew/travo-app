import { useQuery, } from "@tanstack/react-query"
import { getTripById, getTripsByTravelStyle } from "../api/index"
import { useLocalSearchParams } from "expo-router"

export const useGetTripsByTravelStyle = () => {
    return useQuery({
        queryFn : getTripsByTravelStyle,
        queryKey : ["get-trips-by-travel-style"],
    })
}

export const useGetTripById = () => {
    const { id } = useLocalSearchParams();
    return useQuery({
        queryFn : () => getTripById(id as string),
        queryKey : ["get-trip-by-id"]
    })
}