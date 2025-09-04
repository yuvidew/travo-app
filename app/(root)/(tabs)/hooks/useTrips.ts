import { useQuery,  } from "@tanstack/react-query"
import { getTripsByTravelStyle } from "../api/index"

export const useGetTripsByTravelStyle = () => {
    return useQuery({
        queryFn : getTripsByTravelStyle,
        queryKey : ["get-trips-by-travel-style"],
        
    })
}