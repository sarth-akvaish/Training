import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import * as Icon from 'react-native-feather';
import React from 'react';
import {featured} from '../constants';
import {themeColor} from '../theme';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{backgroundColor: themeColor.bgColor(1)}}
          className="absolute z-10 p-1 rounded-full left-2 top-4">
          <Icon.ArrowLeft strokeWidth={2} stroke={'white'} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      <View
        style={{backgroundColor: themeColor.bgColor(0.2)}}
        className="flex-row items-center px-4 py-2 ">
        <Image
          source={require('../assets/images/dev.png')}
          className="h-16 w-16"
        />
        <Text className="flex-1 pl-4 ">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{color: themeColor.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="bg-white pt-3">
        {restaurant.dishes.map((dish, ind) => {
          return (
            <View
              key={ind}
              className="flex-row items-center space-x-2 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
              <Text className="font-bold " style={{color: themeColor.text}}>
                2 x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{backgroundColor: themeColor.bgColor(1)}}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* Total  */}
      <View
        style={{backgroundColor: themeColor.bgColor(0.2)}}
        className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$ 20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$ 2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$ 30</Text>
        </View>
        <View>
          <TouchableOpacity
          onPress={() => navigation.navigate('OrderPreparing')}
            style={{backgroundColor: themeColor.bgColor(1)}}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
