import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const Index = ({icon, name}) => {
  return (
    <View className= "bg-gray-800 mx-3 w-32 h-20 rounded-2xl items-center justify-center">
      <Icon name={icon} size={30} color="white" />
      <Text className ='text-white'>{name}</Text>
    </View>
  )
}

export default Index