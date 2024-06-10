import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../constants';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories.map((category, ind) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? 'bg-gray-800' : 'bg-gray-200';
          let textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray';
          return (
            <View
              key={ind}
              className="flex justify-center items-center mt-2 mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={'p-1 shadow-md rounded-full bg-gray-200' + btnClass}>
                <Image
                  source={category.image}
                  style={{width: 45, height: 45}}
                  className="rounded-full"
                />
              </TouchableOpacity>
              <Text className={'text-sm' + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
