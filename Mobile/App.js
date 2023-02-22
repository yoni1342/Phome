import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry } from "react-native";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/Index";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator></RootNavigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
