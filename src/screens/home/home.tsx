import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/homeHeader/homeHeader'
import HomeTitleHeader from '../../components/homeTitleHeader/homeTitleHeader'
import CategoriesSlider from '../../components/categoriesSlider/categoriesSlider'
import RestaurantsList from '../../components/restaurantsList/restaurantsList'

export default function Home() {
    return (
        <View style={{flex : 1}}>
            <HomeHeader />
            <HomeTitleHeader />
            <CategoriesSlider />
            <RestaurantsList />
        </View>
    )
}