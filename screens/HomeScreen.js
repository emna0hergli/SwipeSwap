import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl`}>Welcome to Exchange!</Text>
    </View>
  )
}

export default HomeScreen