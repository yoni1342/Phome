import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Index = ({ DoorName, status }) => {
  return (
    <View
      className={`${
        status ? "bg-green-200" : "bg-red-200"
      } rounded-lg flex p-3 h-48`}
      onPress={() => {
        status = !status;
      }}
    >
      <View className="felx items-center w-full">
        <Text
          className={`text-[30rem] my-4 font-semibold ${
            status ? "text-green-800" : "text-red-800"
          }`}
        >
          {DoorName}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        {status ? (
          <Icon name="lock-open" size={35} color="green" className="w-8 h-8" />
        ) : (
          <Icon name="lock-closed" size={35} color="red" className="w-8 h-8" />
        )}
        <Text
          className={`text-2xl ${status ? "text-green-900" : "text-red-900"}`}
        >
          {status?("Opend"):("Closed")}
        </Text>
      </View>
    </View>
  );
};

export default Index;
