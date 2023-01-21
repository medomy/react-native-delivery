import { View, Text, Image } from 'react-native'
import React from 'react'
import Location from '../../../types/location'
import { Marker } from 'react-native-maps'
import { icons } from '../../../Constants'
import styles from './styles'

interface props {
    restaurantLocation: Location
}
export default function CouriorMarker({ restaurantLocation }: props) {
    return (
        <Marker
            coordinate={{ latitude: restaurantLocation.latitude, longitude: restaurantLocation.longitude }}>
            <Image
                source={icons.car}
                style={styles.img}
                resizeMode="contain" />
        </Marker>
    )
}