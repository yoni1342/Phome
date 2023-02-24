import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from "../screens/IntroScreen/Index";
import SigninScreen from "../screens/loginScreen/Index";
import SignupScreen from "../screens/SignupScreen/Index";
import VerificationScreen from "../screens/VerificationScreen/Index";
import DashBoardScreen from "../screens/DashBoardScreen/Index";
import LightControllerScreen from "../screens/LightControllerScreen/Index";
import SpeakerControllerScreen from "../screens/SpeakerControllerScreen/Index";
import DoorControllerScreen from "../screens/DoorScreen/Index";
import TVControllerScreen from "../screens/TVControllerScreen/Index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RouteScreen from "../screens/RouteScreen/Index";
import TermoScreen from '../screens/TermoControllerScreen/Index';
import { useSelector } from "react-redux";

import { useEffect } from "react";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  console.log(isLogged)
  return (
    // <NavigationContainer>
    //   {/* <Stack.Navigator initialRouteName="Intro"></Stack.Navigator> */}
    <Stack.Navigator initialRouteName={isLogged?("DashBoard"):("Intro")}>
      <Stack.Screen
        name="Route"
        component={RouteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro"  
        component={IntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DashBoard"
        component={DashBoardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LightController"
        component={LightControllerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpeakerController"
        component={SpeakerControllerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoorController"
        component={DoorControllerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TVController"
        component={TVControllerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermoController"
        component={TermoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // {/* </NavigationContainer> */}
  );
};

export default RootNavigator;
