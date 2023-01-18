import { View, Text, ListRenderItem, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import restaurants from '../../data/restaurants'
import Restaurant from '../../types/restaurant'
import RestaurantCard from '../restaurantCard/restaurantCard';

export default function RestaurantsList() {
    const [myRestaurants, setMyRestaurants] = useState<Restaurant[]>([]);

    const flatListRenderer: ListRenderItem<Restaurant> = ({ item }) => (<RestaurantCard restaurant={item} />)
    useEffect(() => {
        setMyRestaurants(restaurants);
    }, [])

    return (
        <View style={{flex : 1}}>
            <FlatList
                data={myRestaurants}
                renderItem={flatListRenderer}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 50 }} />} />
        </View>
    )
}