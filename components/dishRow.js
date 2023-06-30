import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'

import Currency from "react-currency-formatter"
import { urlFor } from '../sanity'

import { AntDesign } from '@expo/vector-icons';

const dishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  console.log(isPressed)
  return (
    <>
      <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)} 
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="BRL"/>
            </Text>
          </View>
        
          <View>
            <Image 
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F3"
              }}
              source={{
                uri: urlFor(image).url()
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed == true ? (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={30} color="#00CCBB" />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <AntDesign name="pluscircle" size={30} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  )
}

export default dishRow