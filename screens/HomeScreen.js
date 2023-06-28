import { SafeAreaView, View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Ionicons, Feather } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white p-5">
      <Text>

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Peça agora!
            </Text>
            <Text className="font-bold text-xl">
              Localização Atual <Ionicons name="chevron-down" size={24} color="#00CCBB" />
            </Text>
          </View>
          <Feather name="user" size={35} color="#00CCBB" />
        </View>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen