import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';
import { themeColor } from '../theme';

export default function Home() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search Bar  */}
      <View className="flex-row items-center  space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center mt-2 px-4 rounded-full border border-gray-700">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants..." className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-600">Lucknow, IN</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColor.bgColor(1)}}
          className="p-3 mt-2 bg-gray-300 rounded-full">
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <Categories />

        {/* Featured  */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, ind) => {
            return (
              <FeaturedRow
                key={ind}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
