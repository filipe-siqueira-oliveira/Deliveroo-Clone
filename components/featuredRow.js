import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import RestaurantCard from './restaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={30} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123} 
          imgUrl="https://links.papareact.com/gn7"
          title="Yot Sushi"
          rating={4.5}
          genre="Japonese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123} 
          imgUrl="https://links.papareact.com/gn7"
          title="Yot Sushi"
          rating={4.5}
          genre="Japonese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123} 
          imgUrl="https://links.papareact.com/gn7"
          title="Yot Sushi"
          rating={4.5}
          genre="Japonese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow