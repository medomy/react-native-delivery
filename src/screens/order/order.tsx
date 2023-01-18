import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import OrdersNav from '../../components/ordersNav/ordersNav';
import { getRestaurantById } from '../../services/restaurants';

interface routeParams {
  restaurantId: number
}
export default function Order() {
  const route = useRoute();
  const params = route.params as routeParams;
  return (
    <View>
      <OrdersNav restaurantName={getRestaurantById(params.restaurantId)?.name ?? ""} />
    </View>
  )
}