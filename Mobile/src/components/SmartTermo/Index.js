import { View, Text, Image,Switch } from 'react-native'
import React, {useState} from 'react'
import images from "../../../assets/imageassets";

const Index = () => {
    const [isEnable, setIsEnable] = useState(true);
  const [brightness, setBrightness] = useState(20);

  const toggleSwitch = () => {
    if (isEnable) {
      setBrightness(0);
    } else {
      setBrightness(20);
    }
    setIsEnable((previousState) => !previousState);
  };
  return (
    <View className ='p-3 bg-gray-300 h-52 rounded-3xl items-center justify-center relative'>
        <Image source={images.termo} className="w-2/3 h-28" />
        <View className="flex-row items-center justify-center space-x-7 py-2">
        <Text className="text-2xl font-light">20 &deg;C</Text>
        <Switch
            trackColor={{ false: "gray", true: "black" }}
            // thumbColor={isEnable? 'white':'white'}
            ios_backgroundColor="gray"
            onValueChange={toggleSwitch}
            value={isEnable}
            className=""
          />
        </View>
      <Text className="text-lg font-bold">Smart Termo</Text>


    </View>
  )
}

export default Index