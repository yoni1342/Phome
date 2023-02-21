import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import images from "../../../assets/imageassets";
import Icon from "react-native-vector-icons/Ionicons";
import Door from "../../components/Door/Index";
import DoorData from "../../data/DoorData";

const Index = ({navigation}) => {
  const [doors, setDoors] = useState([{}]);

  useEffect(() => {
    setDoors(DoorData);
  }, []);
  const handleChange = (door) => {
    door.status = !door.status;
  };
  return (
    <SafeAreaView className="h-full">
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
        <Text className="text-lg font-bold">Smart Door</Text>
        <View />
      </View>
      <ScrollView>
        <View className="flex flex-row flex-wrap">
          {doors.map((door) => {
            return (
              <TouchableOpacity
                className="w-[45%] m-1"
                key={door.id}
                onPress={() => {
                  handleChange(door);
                }}
              >
                <Door
                  DoorName={door.doorName}
                  status={door.status}
                  key={door.id}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
