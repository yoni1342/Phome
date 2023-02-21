import { View, Text, Image,SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../../assets/imageassets'
import { Link } from '@react-navigation/native'

const Index = ({navigation}) => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View className = "flex items-center space-y-10">
                <Image source={images.textlogo}  />
                <View className="flex items-center">
                    <Image source={images.intro} className=''/>

                    <View className="flex items-center">
                        <Text className="text-2xl font-bold ">Welcome to PHOME</Text>
                        <Text className="text-xl ">Control Your Home</Text>

                        <Text className="px-5 py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum autem molestias aperiam accusamus dolorem delectus iure doloremque corrupti eligendi similique.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum autem molestias aperiam accusamus dolorem delectus iure doloremque corrupti eligendi similique.</Text>
                    </View>

                    <View className="bg-black px-6 py-2 hover:shadow-md cursor-pointer active:scale-95 transition-transform ease-in-out duration-150">
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                            <Text className="text-xl text-white font-bold">Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Index