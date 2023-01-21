import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HomeHeader from '../../components/homeHeader/homeHeader'
import HomeTitleHeader from '../../components/homeTitleHeader/homeTitleHeader'
import CategoriesSlider from '../../components/categoriesSlider/categoriesSlider'
import RestaurantsList from '../../components/restaurantsList/restaurantsList'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useGeoLocation } from '../../hooks/useGeoLocation'
import { setLocation } from '../../store/locationSlice/locationSlice'

export default function Home() {
    const location = useGeoLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLocation(location ?? {latitude : 0 , longitude :0}));
        console.log(location);
    }, [location])
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader />
            <HomeTitleHeader />
            <CategoriesSlider />
            <RestaurantsList />
        </View>
    )
}