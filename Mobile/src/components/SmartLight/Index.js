import { Text, View, Image, Switch } from "react-native";
import React, { Component, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import images from "../../../assets/imageassets";
import {turnOff,turnOn} from '../../redux/reducers/lightReducer'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';


const Index = ({lightBrightness, turnOff, turnOn}) => {
  const lightStatus = useSelector(state => state.light.status);
  // const lightBrightness = useSelector(state => state.light.brightness);
  const dispatch = useDispatch();

  const [isEnable, setIsEnable] = useState(true);
  const [brightness, setBrightness] = useState(20);

  const toggleSwitch = () => {
    if (isEnable) {
      setBrightness(0);
      dispatch(turnOff())
    } else {
      setBrightness(lightBrightness);
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
            <Text className="text-2xl font-light">{Math.round(brightness)}%</Text>
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

const mapStateToProps = (state)=>({
  lightBrightness: state.light.brightness
})

const mapDispatchToProps = {
  turnOff,
  turnOn
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
