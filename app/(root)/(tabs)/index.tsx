import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGetTripsByTravelStyle } from './hooks/useTrips'

export default function Index() {
  const {isLoading , isError , data} = useGetTripsByTravelStyle()

  console.log("the trips list " , data);
  console.log("the trips error " , isError);
  console.log("the trips loading " , isLoading);

  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity >
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  )
}

