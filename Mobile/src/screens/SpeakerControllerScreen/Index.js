import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";

import images from "../../../assets/imageassets";

import React, { useState } from "react";

const Index = ({navigation}) => {
  const [isEnable, setIsEnable] = useState(true);
  const [brightness, setBrightness] = useState(20);

  const toggleSwitch = () => {
    if (isEnable) {
      setBrightness(0);
    } else {
      setBrightness(20);
    }
    setIsEnable((previousState) => !previousState);
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="pt-3 space-y-10">
          {/* Top Bar */}
          <View className="flex flex-row items-center px-4 justify-between">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DashBoard");
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
            <Text className="text-lg font-bold">Smart Speacker</Text>
            <View />
          </View>
          {/* Speaker Controller */}
          <View className="flex px-3 flex-row justify-center">
            <Image source={images.music} className="w-60 h-60 rounded-full" />
          </View>
          <View />
          <View className="items-center mt-3 space-y-3 flex flex-row justify-center space-x-4">
            <View className="flex-row justify-between items-center space-x-3">
              <Icon2
                name="stepbackward"
                size={40}
                color="black"
                className="w-10 h-10"
              />
              <Icon2
                name="caretright"
                size={40}
                color="black"
                className="w-10 h-10"
              />
              <Icon2
                name="stepforward"
                size={40}
                color="black"
                className="w-10 h-10"
              />
            </View>
            <Switch
              trackColor={{ false: "gray", true: "black" }}
              // thumbColor={isEnable? 'white':'white'}
              ios_backgroundColor="gray"
              onValueChange={toggleSwitch}
              value={isEnable}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
