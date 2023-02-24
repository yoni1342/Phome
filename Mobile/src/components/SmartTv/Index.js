import { Text, View, Image, Switch } from 'react-native'
import React, { Component, useState} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import images from '../../../assets/imageassets'
import { useDispatch,useSelector } from 'react-redux';
import {changeStatus} from '../../redux/reducers/tvSlice'
const Index = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.tv.status);
  const [isEnable, setIsEnable] = useState(true);
  const [brightness, setBrightness] = useState(20);

  const toggleSwitch = () => {
    if (isEnable){
      setBrightness(0)
      dispatch(changeStatus())
    }
    else{
      setBrightness(20)
      dispatch(changeStatus())
    }
    setIsEnable(previousState => !previousState);
  };
  return (
    <View className ='mr-2 bg-gray-300 h-72 rounded-3xl items-center justify-center relative'>
        <Image source={images.tv} className='w-11/12 h-20'/>
        <View className ='flex-row justify-between mt-3 space-x-3 items-center'>
        <View className = "bg-gray-200 w-10 h-28 rounded-2xl flex items-center justify-center space-y-10">
          <Icon name="upcircleo" size={28} color="black" className='w-10 h-10' />
          <Icon name="downcircleo" size={28} color="black" className='w-10 h-10' />
        </View>
          <Switch 
            trackColor={{false: 'gray', true:'black'}}
            // thumbColor={isEnable? 'white':'white'}
            ios_backgroundColor='gray'
            onValueChange={toggleSwitch}
            value={isEnable}
            />
        <View className = "bg-gray-200 w-10 h-28 rounded-2xl flex items-center justify-center space-y-10">
          <Icon name="plus" size={28} color="black" className='w-10 h-10' />
          <Icon name="minus" size={28} color="black" className='w-10 h-10' />
        </View>
        </View> 
        <Text className ="text-lg font-bold py-3">Smart TV</Text>
      </View>
  )
}

export default Index