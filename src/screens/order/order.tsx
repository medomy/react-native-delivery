import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import OrdersNav from '../../components/ordersNav/ordersNav';
import { getRestaurantById } from '../../services/restaurants';
import OrderNowComponent from '../../components/orderNowComponent/orderNowComponent';
import MenuItemCard from '../../components/menuItemCard/menuItemCard';

interface routeParams {
  restaurantId: number
}
export default function Order() {
  const route = useRoute();
  const params = route.params as routeParams;
  return (
    <View style={{ flex: 1 }}>
      <OrdersNav restaurantName={getRestaurantById(params.restaurantId)?.name ?? ""} />
      <View style={{ flex: 1, width: "100%" }}>
        <MenuItemCard menuItem={getRestaurantById(params.restaurantId)!?.menu[0]} />
      </View>
      <OrderNowComponent />
    </View>
  )
}