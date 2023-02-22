import { useEffect } from 'react'
import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import {userSlice} from '../../redux/reducers/userSlice'

const Index = () => {

    const navigation = useNavigation();
    useEffect(() => {
        const checkUser = async () => {
          const user = await AsyncStorage.getItem("token");
          if (user) {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'DashBoard' }],
              })
            );
          }
          else{
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Signin' }],
              })
            );
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