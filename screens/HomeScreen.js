import { SafeAreaView, View, Text, Image, TextInput, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';

import client from '../sanity';

import { Ionicons, Feather } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    client.fetch(
      `
        *[_type == "featured"] {
          ...,
          restaurants[] -> {
            ...,
            dishes[] ->
          }
        }
      `
    ).then(data => {
      setFeaturedCategories(data)
    })
  }, [])

  const screenHeight = Dimensions.get("window").height

  return (
    <SafeAreaView className="bg-white p-5">

        {/* Header */}
        <View className="flex-row pb-2 items-center mx-4 space-x-2">
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

        {/* Search */}
        <View className="flex-row items-center space-x-2 p-2 mx-2">
          <View className="flex-row space-x-2 flex-1 bg-gray-100 p-3">
            <Feather name="search" size={20} color="gray" />
            <TextInput
              placeholder='Restaurantes e Lanchonetes'
              keyboardType='default'
            />
          </View>

          <Ionicons name="filter" size={28} color="#00CCBB" />
        </View>

        {/* Body */}
        <View style={{height: 525}}>
          <ScrollView className="bg-gray-100">
              {/* Categories */}
              <Categories />
              {/* Featured */}
              {featuredCategories?.map((category) => (
                <FeaturedRow
                  key={category._id}
                  id={category._id}
                  title={category.name}
                  description={category.short_description}
                />
              ))}
          </ScrollView>
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen