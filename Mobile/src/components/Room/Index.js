import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";

const Index = ({ icon, name, active }) => {
  return (
    <View
      className={`${
        active ? "bg-gray-800" : "bg-gray-300"
      } mx-3 w-32 h-20 rounded-2xl items-center justify-center`}
    >
      {active ? (
        <View className = 'items-center'>
          <Icon name={icon} size={30} color="white" />
          <Text className="text-white">{name}</Text>
        </View>
      ) : (
        <View className = 'items-center'>
          <Icon name={icon} size={30} color="black" />
          <Text className="text-black">{name}</Text>
        </View>
      )}
      
    </View>
  );
};

export default Index;
