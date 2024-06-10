import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {themeColor} from '../theme';
import RestaurantCard from './RestaurantCard';

export type Restaurant = {
  id: number;
  name: string;
  image: string;
  description: string;
};

type featureProps = {
  title: string;
  description: string;
  restaurants: Restaurant[];
};

export default function FeaturedRow({
  title,
  restaurants,
  description,
}: featureProps) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="font-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColor.text}} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        className="overflow-visible py-5">
        {restaurants.map((res, ind) => {
          return <RestaurantCard key={ind} item={res} />;
        })}
      </ScrollView>
    </View>
  );
}
