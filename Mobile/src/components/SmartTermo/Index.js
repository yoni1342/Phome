import { View, Text, Image, Switch } from "react-native";
import React, { useState } from "react";
import images from "../../../assets/imageassets";
import { useDispatch, useSelector } from "react-redux";
import {turnOn, turnOff,setLevel } from "../../redux/reducers/termoSlice";

const Index = () => {
  const dispatch = useDispatch();
  const termoStatus = useSelector((state) => state.termo.status);
  const termoLevel = useSelector(state => state.termo.level);

  const [isEnable, setIsEnable] = useState(termoStatus);
  const [level, setlevel] = useState(termoLevel);

  const toggleSwitch = () => {
    if (isEnable) {
      dispatch(setLevel(0));
      setlevel(0)
      dispatch(turnOff());
    } else {
      dispatch(setLevel(20))
      setlevel(20)
      dispatch(turnOn());
    }
    setIsEnable((previousState) => !previousState);
  };
  return (
    <View className="mr-2 my-5 bg-gray-300 h-52 rounded-3xl items-center justify-center">
      <Image source={images.termo} className="w-2/3 h-28" />
      <View className="flex-row items-center justify-center space-x-7 py-2">
        <Text className="text-2xl font-light">{level} &deg;C</Text>
        <Switch
          trackColor={{ false: "gray", true: "black" }}
          // thumbColor={isEnable? 'white':'white'}
          ios_backgroundColor="gray"
          onValueChange={toggleSwitch}
          value={isEnable}
          className=""
        />
      </View>
      <Text className="text-lg font-bold">Smart Termo</Text>
    </View>
  );
};

export default Index;
