import { Text, View, Image, Switch } from "react-native";
import React, { Component, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import images from "../../../assets/imageassets";

const Index = () => {
  const [status, setStatus] = useState(true);
  const [brightness, setBrightness] = useState(20);

  const toggleSwitch = () => {
    if (status) {
      setBrightness(0);
    } else {
      setBrightness(20);
    }
    setStatus((previousState) => !previousState);
  };
  return (
    <View className="bg-gray-300 h-52 rounded-3xl items-center justify-center">
      <View className="flex flex-row items-center justify-center px-3">
        <View className="w-[50%] flex space-y-3 items-center">
          <View className="flex flex-row items-center">
            {status ? (
              <Icon
                name="lock-open"
                size={35}
                color="green"
                className="w-8 h-8"
              />
            ) : (
              <Icon
                name="lock-closed"
                size={35}
                color="red"
                className="w-8 h-8"
              />
            )}
          </View>
          <Switch
            trackColor={{ false: "gray", true: "black" }}
            // thumbColor={status? 'white':'white'}
            ios_backgroundColor="gray"
            onValueChange={toggleSwitch}
            value={status}
            className=""
          />
        </View>
        <Image source={images.door} className="w-1/2 h-40" />
      </View>
      <Text className="text-lg font-bold">Smart Door</Text>
    </View>
  );
};

export default Index;
