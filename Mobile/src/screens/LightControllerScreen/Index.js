import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Slider,
  Switch,
  TouchableOpacity,
} from "react-native";
import images from "../../../assets/imageassets";
import Icon from "react-native-vector-icons/Ionicons";
// import {Slider} from 'react-native-color-picker'
import React, { useState } from "react";
import ColorPicker from "../../components/ColorPiker/Index";
import {
  turnOff,
  turnOn,
  setBrightness,
} from "../../redux/reducers/lightReducer";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Index = ({
  lightStatus,
  lightBrightness,
  turnOff,
  turnOn,
  setBrightness,
}) => {
  // const lightStatus = useSelector(state => state.light.status);
  // const lightBrightness = useSelector(state => state.light.brightness);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isEnable, setIsEnable] = useState(lightStatus);
  // const [brightness, setBrightnesss] = useState(lightBrightness);

  const toggleSwitch = () => {
    if (isEnable) {
      // setBrightnesss(0);
      dispatch(setBrightness(0));
      dispatch(turnOff());
    } else {
      // setBrightnesss(lightBrightness);
      dispatch(setBrightness(50));
      dispatch(turnOn());
    }
    setIsEnable((previousState) => !previousState);
  };

  const handleBrightnessChange = (value) => {
    dispatch(setBrightness(value));
    // setBrightnesss(value);
    if (value === 0) {
      setIsEnable(false);
      dispatch(turnOff());
    } else if (!isEnable) {
      setIsEnable(true);
      dispatch(turnOn());
    }
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
        <Text className="text-lg font-bold">Smart Light</Text>
        <View />
      </View>
      <ScrollView>
        <View className="pt-3 space-y-10">
          {/* Light Controller */}
          <View className="flex px-3">
            {/* Display */}
            <View className="flex flex-row items-center justify-between px-10">
              <View className="flex flex-row items-center ">
                <Text className="text-[100rem] font-extralight">
                  {Math.round(lightBrightness)}
                </Text>
                <Icon
                  name="ios-sunny-outline"
                  size={50}
                  color="black"
                  className="w-10 h-10"
                />
              </View>
              <View>
                <Switch
                  trackColor={{ false: "gray", true: "black" }}
                  // thumbColor={isEnable? 'white':'white'}
                  ios_backgroundColor="gray"
                  onValueChange={toggleSwitch}
                  value={isEnable}
                  className=""
                />
              </View>
            </View>
            {/* Slider */}
            <View className="">
              <Slider
                minimumValue={0}
                maximumValue={100}
                onValueChange={handleBrightnessChange}
                value={lightBrightness}
                // onValueChange={(value) => setBrightness(value)}
                animateTransitions={true}
                thumbTouchSize={{ width: 150, height: 150 }}
                minimumTrackTintColor="#000"
                maximumTrackTintColor="#FFF"
              />
            </View>
          </View>
          <ColorPicker />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  lightStatus: state.light.status,
  lightBrightness: state.light.brightness,
});

const mapDispatchToProps = {
  turnOff,
  turnOn,
  setBrightness,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
