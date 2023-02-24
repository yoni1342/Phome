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
import { useDispatch, useSelector } from "react-redux";
import {
  addChannel,
  addVolume,
  subChannel,
  subVolume,
  changeMute,
  changeStatus,
} from "../../redux/reducers/tvSlice";
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


const Index = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const status = useSelector((state) => state.tv.status);
  const volume = useSelector((state) => state.tv.volume);
  const channel = useSelector((state) => state.tv.channel);
  const isMute = useSelector((state) => state.tv.isMute); 

  return (
    <SafeAreaView className="h-full bg-[#E0E0E0]">
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
        <Text className="text-lg font-bold">Smart TV</Text>
        <View />
      </View>
      <ScrollView className="">
        <View className="space-y-20">
          {/* Top controllers */}
          <View className="flex flex-row justify-between p-4">
            {/* Mute button */}
            <TouchableOpacity
              onPress={()=>{
                dispatch(changeMute())
                console.log(isMute)
              }}
            >
              {
                isMute ? (
                  <View className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow ">
                    <Icon
                      name="volume-mute"
                      size={35}
                      color="black"
                      className="w-10 h-10"
                    />
                  </View>
                ) : (
                  <View className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow ">
                    <Icon
                      name="volume-high"
                      size={35}
                      color="black"
                      className="w-10 h-10"
                    />
                  </View>
                )

              }
            </TouchableOpacity>

            {/* power off button */}
            <TouchableOpacity
              onPress={() => {
                dispatch(changeStatus());
              }}
            >
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
          {/* Info  */}
          <View className="flex flex-row justify-between px-5">
            {/*Channel info*/}
            <View className="flex flex-row space-x-1 items-center">
              <Text className="text-2xl font-semibold">Channel:</Text>
              <Text className="text-2xl">{channel}</Text>
            </View>
            {/* Power Info */}

            {status ? (
              <View className="flex flex-row space-x-1 items-center">
                <Text className="text-2xl bg-green-500 px-2 text-white">
                  On
                </Text>
              </View>
            ) : (
              <View className="flex flex-row space-x-1 items-center">
                <Text className="text-2xl bg-red-500 px-2 text-white">Off</Text>
              </View>
            )}

            {/* Volume info */}
            <View className="flex flex-row space-x-1 items-center">
              <Text className="text-2xl font-semibold">Volume:</Text>
              <Text className="text-2xl">{volume}</Text>
            </View>
          </View>
          {/* Middle Controllers */}
          <View className="flex flex-row justify-between px-5">
            {/* Channel change bar */}
            <View className="w-[15%] h-44 bg-white rounded-full flex justify-between items-center py-5">
              {/* Up Icon */}
              <TouchableOpacity
                onPress={() => {
                  dispatch(addChannel());
                }}
              >
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
              <TouchableOpacity
                onPress={() => {
                  dispatch(subChannel());
                }}
              >
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
              {/* pluse Icon */}
              <TouchableOpacity
                onPress={() => {
                  dispatch(addVolume());
                }}
              >
                <Icon2
                  name="plus"
                  size={35}
                  color="black"
                  className="w-10 h-10"
                />
              </TouchableOpacity>
              {/* Volum Label */}
              <View>
                <Text>VOL</Text>
              </View>
              {/* minus Icon */}
              <TouchableOpacity
                onPress={() => {
                  dispatch(subVolume());
                }}
              >
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
          <View className="flex flex-row flex-wrap">
            <View className=" mx-3 my-2 w-[25%] h-10 bg-white rounded-lg items-center justify-center">
              <Text className="text-xl font-bold">Input</Text>
            </View>
            <View className=" mx-3 my-2 w-[25%] h-10 bg-white rounded-lg items-center justify-center">
              <Text className="text-xl font-bold">Menu</Text>
            </View>
            <View className=" mx-3 my-2 w-[25%] h-10 bg-white rounded-lg items-center justify-center">
              <Text className="text-xl font-bold">Fav</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
