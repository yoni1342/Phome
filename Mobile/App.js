import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RootNavigator from './src/navigation/Index';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (  
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigator></RootNavigator>
      </Provider>
    </NavigationContainer>
  );
}
