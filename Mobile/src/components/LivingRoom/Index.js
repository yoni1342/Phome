import { View, Text,TouchableOpacity, Image } from "react-native";
import TV from "../SmartTv/Index";
import Speaker from "../SmartSpeaker/Index";
import Light from "../SmartLight/Index";
import Door from "../SmartDoor/Index";
import Termo from "../SmartTermo/Index";
import { useNavigation } from "@react-navigation/native";
import images from "../../../assets/imageassets";


import React from "react";

const Index = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row ">
      <View className="w-[50%]">
        <TouchableOpacity
          onPress={() => navigation.navigate("LightController")}
        >
          <Light />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TVController")}>
          <TV />
        </TouchableOpacity>
      </View>
      <View className="w-[50%]">
        <TouchableOpacity
          onPress={() => navigation.navigate("TermoController")}
        >
          <Termo />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DoorController")}>
          <Door />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
