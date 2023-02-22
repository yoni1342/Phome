import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import images from "../../../assets/imageassets";
import Room from "../../components/Room/Index";
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LivingRoom from "../../components/LivingRoom/Index"

const Index = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setUser(JSON.parse(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSignOut = () => {
    AsyncStorage.removeItem("token")
      .then((res) => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Signin" }],
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="pt-3 space-y-10">
          {/* Nav bar */}
          <View className="flex flex-row items-center justify-between">
            <Image source={images.logo} className="ml-2" />
            <TouchableOpacity onPress={handleSignOut}>
              <View className="px-3 bg-gray-400 mx-3 py-2 items-center justify-center">
                <Text className="text-xl">Log Out</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* welcom text */}
          <View className="px-2">
            <Text className="text-2xl font-bold">Hey {user.firstname}</Text>
            <Text className="text-lg">Welcom</Text>
          </View>

          {/* Rooms */}
          <ScrollView horizontal={true} className="flex flex-row space-x-3">
            <TouchableOpacity>
              <Room icon={"couch"} name="Living Room" active={true} key={1} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Devices */}
        <View className="px-2 my-2">
          <Text className="text-2xl font-bold">Devices </Text>
          <LivingRoom />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
