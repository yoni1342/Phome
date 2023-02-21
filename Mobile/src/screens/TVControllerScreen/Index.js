import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";
import React from "react";

const Index = ({ navigation }) => {
  return (
    <SafeAreaView className="h-full bg-[#E0E0E0]">
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
        <Text className="text-lg font-bold">Smart TV</Text>
        <View />
      </View>
      <ScrollView className = ''>
        <View className="space-y-20">
          {/* Top controllers */}
          <View className="flex flex-row justify-between p-4">
            {/* Mute button */}
            <TouchableOpacity>
              <View className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow ">
                <Icon
                  name="volume-mute"
                  size={35}
                  color="black"
                  className="w-10 h-10"
                />
              </View>
            </TouchableOpacity>

            {/* power off button */}
            <TouchableOpacity>
              <View className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow ">
                <Icon
                  name="power"
                  size={35}
                  color="red"
                  className="w-10 h-10"
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* Middle Controllers */}
          <View className="flex flex-row justify-between px-5">
            {/* Channel change bar */}
            <View className="w-[15%] h-44 bg-white rounded-full flex justify-between items-center py-5">
              {/* Up Icon */}
              <TouchableOpacity>
                <Icon
                  name="chevron-up-outline"
                  size={35}
                  color="black"
                  className="w-10 h-10"
                />
              </TouchableOpacity>
              {/* Channel Label */}
              <View>
                <Text>CHA</Text>
              </View>
              {/* Down Icon */}
              <TouchableOpacity>
                <Icon
                  name="chevron-down-outline"
                  size={35}
                  color="black"
                  className="w-10 h-10"
                />
              </TouchableOpacity>
            </View>
            {/* OKAY */}
            <View className="w-[50%]">
              <View className=" h-44 bg-white rounded-full flex justify-center items-center">
                <View className="w-[50%] h-[50%] flex justify-center items-center border-2 rounded-full shadow-lg border-[#E0E0E0]">
                  <TouchableOpacity>
                    <Text>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Volume Bar */}
            <View className="w-[15%] h-44 bg-white rounded-full flex justify-between items-center py-5">
              {/* Up Icon */}
              <TouchableOpacity>
                <Icon2
                  name="plus"
                  size={35}
                  color="black"
                  className="w-10 h-10"
                />
              </TouchableOpacity>
              {/* Channel Label */}
              <View>
                <Text>VOL</Text>
              </View>
              {/* Down Icon */}
              <TouchableOpacity>
                <Icon2
                  name="minus"
                  size={35}
                  color="black"
                  className="w-10 h-10"
                />
              </TouchableOpacity>
            </View>
          </View>
            {/* Bottom Controllers */}
            <View className = 'flex flex-row flex-wrap'>
                <View className = ' mx-3 my-2 w-[25%] h-10 bg-white rounded-lg items-center justify-center'>
                    <Text className='text-xl font-bold'>Input</Text>
                </View>
                <View className = ' mx-3 my-2 w-[25%] h-10 bg-white rounded-lg items-center justify-center'>
                    <Text className='text-xl font-bold'>Menu</Text>
                </View>
                <View className = ' mx-3 my-2 w-[25%] h-10 bg-white rounded-lg items-center justify-center'>
                    <Text className='text-xl font-bold'>Fav</Text>
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
