import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const RestaurantScreen = () => {
  const navigation = useNavigation()

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  });

  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full">
          <AntDesign name="arrowleft" size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <FontAwesome name="star" size={22} color="#5FCE81" />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Entypo name="location-pin" size={22} color="gray" /> 
                <Text className="text-xs text-gray-500">{address}</Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <AntDesign name="questioncircleo" size={22} color="gray" />
            <Text className="pl-2 flex-1 text-md font-bold">
              Tem alergia de algum alimento?
            </Text>
            <FontAwesome5 name="chevron-right" size={15} color="#00CCBB"/>
          </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">
          Menu
        </Text>

        {/* Dishrows */}
        

      </View>
    </ScrollView>
  )
}

export default RestaurantScreen