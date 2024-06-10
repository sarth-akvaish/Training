import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColor } from '../theme';

const DishRow = ({item}) => {
  return (
    <View className="flex-row items-center  bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-2xl"
        style={{width: 100, height: 100}}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-lg">{item.name}</Text>
          <Text className="text-gray-700 text-md">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-2 items-center">
          <Text className="text-gray-800 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColor.bgColor(1),
              }}>
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>
            <Text className="px-2">{12}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColor.bgColor(1),
              }}>
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
