import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import images from "../../../assets/imageassets";
import Room from "../../components/Room/Index";
import Light from "../../components/SmartLight/Index";
import Speaker from "../../components/SmartSpeaker/Index";
import TV from "../../components/SmartTv/Index";
import Termo from "../../components/SmartTermo/Index";
import Door from "../../components/SmartDoor/Index";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/reducers/counterReducer';

const Index = ({ navigation }) => {
  const counterValue = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="pt-3 space-y-10">
          {/* Nav bar */}
          <View className="flex flex-row items-center justify-between">
            <Image source={images.logo} className="ml-2" />
            <View className="px-3 bg-gray-400 mx-3 rounded-full w-10 h-10 items-center justify-center">
              <Image source={images.avatar} className="w-6" />
            </View>
          </View>

          {/* welcom text */}
          <View className="px-2">
            <Text className="text-2xl font-bold">Hey Don</Text>
            <Text className="text-lg">Welcom</Text>
          </View>

          {/* Rooms */}
          <ScrollView horizontal={true} className="flex flex-row space-x-3">
            <Room icon={"couch"} name="Living Room" key={1} />
            <Room icon={"couch"} name="Living Room" key={1} />
            <Room icon={"couch"} name="Living Room" key={1} />
            <Room icon={"couch"} name="Living Room" key={1} />
          </ScrollView>
        </View>

        {/* Devices */}
        <View className="px-2 my-2">
          <Text className="text-2xl font-bold">Devices {counterValue}</Text>
          <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
          <View className="flex flex-row ">
            <View className="w-[50%]">
              <TouchableOpacity
                onPress={() => navigation.navigate("LightController")}
              >
                <Light />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("TVController")}
              >
              <TV />
              </TouchableOpacity>
            </View>
            <View className="w-[50%]">
              <TouchableOpacity
                onPress={() => navigation.navigate("SpeakerController")}
              >
                <Speaker />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("DoorController")}
              >
                <Door />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
