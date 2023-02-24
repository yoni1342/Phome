import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Slider,
  Switch,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setLevel,turnOn,turnOff} from '../../redux/reducers/termoSlice'
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


const Index = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const termoStatus = useSelector(state => state.termo.status);
  const termoLevel = useSelector(state => state.termo.level);

  const [isEnable, setIsEnable] = useState(termoStatus);
  const [temp, setTemp] = useState(termoLevel);

  useEffect(() => {
    dispatch(setLevel(temp))
  },[temp])

  const toggleSwitch = () => {
    if (isEnable) {
      dispatch(setLevel(0));
      dispatch(turnOff());
    } else {
      dispatch(setLevel(20))
      dispatch(turnOn());
    }
    setIsEnable((previousState) => !previousState);
  };
  return (
    <SafeAreaView className="h-full">
      {/* Top Bar */}
      <View className="flex flex-row items-center px-4 justify-between">
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "DashBoard" }],
              })
            );
          }}
        >
          <View className="bg-gray-300 rounded-full w-10 h-10 items-center">
            <Icon
              name="chevron-back"
              size={35}
              color="black"
              className="w-10 h-10"
            />
          </View>
        </TouchableOpacity>
        <Text className="text-lg font-bold">Smart AC</Text>
        <View />
      </View>
      <ScrollView>
      <View className="flex flex-row items-center justify-between px-10">
              <View className="flex flex-row items-center ">
                <Text className="text-[100rem] font-extralight">
                  {Math.round(termoLevel)}<Text className ='text-md'>°C</Text>
                </Text>
              </View>
              <View>
                <Switch
                  trackColor={{ false: "gray", true: "black" }}
                  ios_backgroundColor="gray"
                  onValueChange={toggleSwitch}
                  value={isEnable}
                  className=""
                />    
              </View>
            </View>
            <View className="">
              <Slider
                minimumValue={20}
                maximumValue={30}
                value={termoLevel}
                step = {1}
                onValueChange={(value) => setTemp(value)}
                animateTransitions={true}
                thumbTouchSize={{ width: 150, height: 150 }}
                minimumTrackTintColor="#000"
                maximumTrackTintColor="#FFF"
                className = 'mx-3'
              />
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
