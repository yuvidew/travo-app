import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Index() {
  const onRemove = async() => {
    const data = await AsyncStorage.getItem("travel_styles");

    console.log(data);
  }

  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  )
}

