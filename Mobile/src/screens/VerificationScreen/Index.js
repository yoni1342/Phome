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
import { useNavigation } from '@react-navigation/native';
import React from "react";
import images from "../../../assets/imageassets";
import { useState } from "react";
import { axios } from "../../utils/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';


const Index = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState("")
  const handleVerification = ()=>{
      AsyncStorage.getItem('id')
      .then(value => {
        if (value !== null) {
          axios.post(`auth/confirmCode/${value}`, JSON.stringify({pin}),{
            headers: {"Content-Type": 'application/json'}
          }).then(res=>{
            console.log(res.status)
            if (res.status == '200'){
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Signin' }],
                })
              );
            }
            else{
              alert("Wrong Code")
            }
          }).catch(err=>{
            console.log(err)
          })
      }})
      .catch(error => {
        console.log(error)
      });
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="pt-3 space-y-10">
          <Image source={images.logo} className="ml-2" />

          <View className="flex items-center space-y-10">
            <Text className="text-5xl font-bold text-center">
              Verification Code
            </Text>

            <View className="flex items-center w-full space-y-5">
              <TextInput
                className="bg-gray-300 w-10/12 p-4 text-lg outline-none"
                placeholder="Enter the code"
                textContentType="none"
                onChangeText={setPin}
              />
              {/* Login button */}
            <Text className="text-blue-500 underline text-right w-full px-10">
                Resend
            </Text>
            </View>
            <TouchableOpacity
            onPress={handleVerification}>
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
