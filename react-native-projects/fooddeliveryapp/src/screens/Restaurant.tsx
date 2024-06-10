import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import CartIcon from '../components/CartIcon';
import DishRow from '../components/DishRow';
import {themeColor} from '../theme';

export default function Restaurant() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  return (
    <View>
      <CartIcon />
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item?.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-4 left-2 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColor.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row my-1 space-x-2">
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
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>

          {item.dishes.map((dish, ind) => {
            return <DishRow key={ind} item={dish} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
