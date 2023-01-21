import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import MapViewComponent from '../../components/maps/mapViewComponent/mapViewComponent';
import { getRestaurantById } from '../../services/restaurants';

interface routeParams {
  restaurantId: number
}
export default function Map() {
  const route = useRoute();
  const params = route.params as routeParams;
  return (
    <View style={{ flex: 1 }}>
      <MapViewComponent restaurant={getRestaurantById(params.restaurantId)!} />
    </View>
  )
}