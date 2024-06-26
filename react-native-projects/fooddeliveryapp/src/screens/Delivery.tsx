import {View, Text} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import {themeColor} from '../theme';

const Delivery = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="flex-1 w-full h-full">
      <MapView
        initialRegion={{
          latitude: 26.83928,
          longitude: 80.92313,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: 26.94865,
            longitude: 80.9402,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColor.bgColor(1)}
        />
      </MapView>
    </View>
  );
};

export default Delivery;
