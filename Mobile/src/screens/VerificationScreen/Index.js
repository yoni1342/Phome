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
import { useNavigation } from "@react-navigation/native";
import React from "react";
import images from "../../../assets/imageassets";
import { useState } from "react";
import { axios } from "../../utils/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser,resendCode } from "../../redux/reducers/userSlice";

const Index = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const user = useSelector(state=>state.user)
  const token = user.user.message.token
  const handleVerification = async () => {
    //get the token from user state
    const data = {
      token,
      pin
    };
    const response = await dispatch(verifyUser(data));
    if (response?.payload?.status == 400) {
      setError(response?.payload?.message);
    }
    else{
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Signin" }],
        })
      );
    }
  };
  

  const handleResend = async () => {
    const token = user.user.message.token
    const data = {
      token
    };
    dispatch(resendCode(data));
    console.log(token)
    // AsyncStorage.getItem("user")
    //   .then((value) => {
    //     if (value !== null) {
    //       axios
    //         .post(
    //           `auth/resendCode/${JSON.parse(value).token}`,
    //           JSON.stringify({ value }),
    //           {
    //             headers: { "Content-Type": "application/json" },
    //           }
    //         )
    //         .then((res) => {
    //           console.log(res.status);
    //           if (res.status == "200") {
    //             alert("Code sent");
    //           } else {
    //             alert("Something went wrong");
    //           }
    //         })
    //         .catch((err) => {
    //           console.log(err.message);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="pt-3 space-y-10">
          <Image source={images.logo} className="ml-2" />
          
          <View className="flex items-center space-y-10">
            <Text className="text-5xl font-bold text-center">
              Verification Code
            </Text>
            {error && (
              <View className="bg-red-400 px-2 py-1 rounded-md">
                <Text className="text-white">{error}</Text>
              </View>
            )}
            <View className="flex items-center w-full space-y-5">
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="Enter the code"
                textContentType="none"
                onChangeText={setPin}
                keyboardType={"numeric"}
              />
              {/* Login button */}
              <TouchableOpacity onPress={handleResend}>
                <Text className="text-blue-500 underline text-right w-full px-10">
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleVerification}>
              <View className="bg-black px-6 py-2 hover:shadow-md cursor-pointer active:scale-95 transition-transform ease-in-out duration-150">
                <Text className="text-xl text-white font-bold">Verify</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
