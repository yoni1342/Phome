import { Text, View, Image, Switch } from 'react-native'
import React, { Component, useState} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import images from '../../../assets/imageassets'

const Index = () => {
  const [isEnable, setIsEnable] = useState(true);
  const [brightness, setBrightness] = useState(20);

  const toggleSwitch = () => {
    if (isEnable){
      setBrightness(0)
    }
    else{
      setBrightness(20)
    }
    setIsEnable(previousState => !previousState);
  };
  return (
    <View className ='my-5 p-3 bg-gray-300 h-72 rounded-3xl items-center justify-center relative'>
        <Image source={images.speaker} className='w-10/12 h-40'/>
        <View className="bg-gray-100 w-[85%] h-2 relative rounded-md">
          <View className = "bg-black absolute top-0 left-0 w-[50%] h-2 rounded-md" />
        </View>
        <View className ='items-center mt-3 space-y-3'>
          <View className="flex-row justify-between space-x-3">
            <Icon name="stepbackward" size={28} color="black" className='w-10 h-10' />
            <Icon name="caretright" size={28} color="black" className='w-10 h-10' />
            <Icon name="stepforward" size={28} color="black" className='w-10 h-10' />
          </View>
        </View> 
        <Text className ="text-lg font-bold py-3">Smart Speaker</Text>
      </View>
  )
}

export default Index