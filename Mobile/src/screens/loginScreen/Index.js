import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "../../../assets/imageassets";
import { useState } from "react";
import { axios } from "../../utils/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const Index = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSignin = () => {
    const data = {
      email,
      password,
    };

    axios
      .post("auth/signin", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data.token);
        AsyncStorage.setItem("token", res.data.token);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'DashBoard' }],
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="pt-3 space-y-10">
          <Image source={images.logo} className="ml-2" />

          <View className="flex items-center space-y-10">
            <Text className="text-5xl font-bold">Login</Text>

            <View className="flex items-center w-full space-y-5">
              {/* Email addrase input */}
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={setEmail}
              />
              {/* Password input */}
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="Password"
                textContentType={"password"}
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={setPassword}
              />
              {/* Login button */}
              <TouchableOpacity
                className="w-full"
                onPress={() => {
                  navigation.navigate("Signup");
                }}
              >
                <Text className="text-blue-500 underline text-right w-full px-10">
                  Create New Account
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handelSignin}>
              <View className="bg-black px-6 py-2 hover:shadow-md cursor-pointer active:scale-95 transition-transform ease-in-out duration-150">
                <Text className="text-xl text-white font-bold">Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;