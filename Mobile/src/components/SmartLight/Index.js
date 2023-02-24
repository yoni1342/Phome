import { Text, View, Image, Switch } from "react-native";
import React, { Component, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import images from "../../../assets/imageassets";
import {turnOff,turnOn,setBrightness} from '../../redux/reducers/lightReducer'
import { useDispatch, useSelector } from 'react-redux';



const Index = () => {
  const lightStatus = useSelector(state => state.light.status);
  const lightBrightness = useSelector(state => state.light.brightness);
  const dispatch = useDispatch();

  const [isEnable, setIsEnable] = useState(lightStatus);
  const [brightnessLevel, setBrightnessLevel] = useState(lightBrightness);

  const toggleSwitch = () => {
    if (isEnable) {
      dispatch(setBrightness(0));
      setBrightnessLevel(0)
      dispatch(turnOff())
    } else {
      dispatch(setBrightness(50));
      setBrightnessLevel(50)
      dispatch(turnOn())
    }
    setIsEnable((previousState) => !previousState);
  };
  return (
    <View className="mr-2 my-5 bg-gray-300 h-52 rounded-3xl items-center justify-center">
      <View className="flex flex-row items-center justify-center px-3">
        <View className='w-[50%]'>
          <View className="flex flex-row items-center">
            <Icon name="sun" size={28} color="black" className="w-10 h-10" />
            <Text className="text-2xl font-light">{Math.round(brightnessLevel)}%</Text>
          </View>
          <Switch
            trackColor={{ false: "gray", true: "black" }}
            // thumbColor={isEnable? 'white':'white'}
            ios_backgroundColor="gray"
            onValueChange={toggleSwitch}
            value={isEnable}
            className=""
          />
        </View>
        <Image source={images.lamp} className="w-1/2 h-40" />
      </View>
      <Text className="text-lg font-bold">Smart Light</Text>
    </View>
  );
};

export default Index