import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import images from "../../../assets/imageassets";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { axios } from "../../utils/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const data = {
      firstname,
      lastname,
      email,
      password,
    };

    axios
      .post("auth/signup", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        AsyncStorage.setItem("id", res.data.message._id);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Verification' }],
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView className="h-screen">
        <View className="pt-3 space-y-10">
          {/* Top Bar */}
          <Image source={images.logo} className="ml-2" />

          <View className="flex items-center space-y-10">
            <Text className="text-5xl font-bold">Sign Up</Text>

            <View className="flex items-center w-full space-y-5">
              {/* Firstname Input */}
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="First Name"
                textContentType="name"
                value={firstname}
                onChangeText={setFirstname}
              />
              {/* Last name */}
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="Last Name"
                textContentType="name"
                value={lastname}
                onChangeText={setLastname}
              />

              {/* Email addrase input */}
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="Email"
                textContentType="emailAddress"
                value={email}
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
                value={password}
                onChangeText={setPassword}
              />
              {/* Confirm Password input */}
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="Confirm Password"
                textContentType={"password"}
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                className="w-full"
                onPress={() => {
                  navigation.navigate("Signin");
                }}
              >
                <Text className="text-blue-500 underline text-right w-full px-10">
                  I Have Account
                </Text>
              </TouchableOpacity>
            </View>
            {/* Signup buttom */}
            <TouchableOpacity
              className="bg-black px-6 py-2 hover:shadow-md cursor-pointer active:scale-95 transition-transform ease-in-out duration-150"
              onPress={handleSignup}
            >
              <Text className="text-xl text-white font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
