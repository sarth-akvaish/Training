import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColor } from '../theme';

const RestaurantCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', {...item})}>
      <View
        style={{
          shadowColor: themeColor.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="my-2 mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-2xl" source={item.image} />
        <View className="px-3 pb-4 space-y-1">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center">
            <Image
              source={require('../assets/images/star1.png')}
              className="h-6 w-6"
            />
            <Text className="text-sm">
              <Text className="text-green-700">{item?.stars || 4}</Text>
              <Text className="text-gray-700">
                ({'4k reviews'}) -{' '}
                <Text className="font-semibold">{'Fast Food'}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color={'gray'} width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              Nearby - {'Lucknow, IN'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
