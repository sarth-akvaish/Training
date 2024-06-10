import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColor} from '../theme';
import {useNavigation} from '@react-navigation/native';

const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-3 z-50 w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{backgroundColor: themeColor.bgColor(1)}}
        className="flex-row items-center justify-center mx-5 p-2 rounded-full shadow">
        <View
          className="p-2 px-4 rounded-full"
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold p-2 text-white text-lg">$ {3342}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
