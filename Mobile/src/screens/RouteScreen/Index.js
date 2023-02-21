import { useEffect } from 'react'
import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";


const Index = ({navigation}) => {
    useEffect(() => {
        const checkUser = async () => {
          const user = await AsyncStorage.getItem("token");
          if (user) {
            navigation.navigate("DashBoard");
          }
          else{
            navigator.navigate("IntroScreen");
          }
        };
        checkUser();
      }, []);
  return (
    <View>
      <Text>Index</Text>
    </View>
  )
}

export default Index