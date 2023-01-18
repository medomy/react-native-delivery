import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { icons } from '../../Constants'
import { useNavigation } from '@react-navigation/native'

interface props {
    restaurantName: string
}
export default function OrdersNav({ restaurantName }: props) {

    const nanigation = useNavigation();

    const goBack = () => {
        nanigation.goBack();
    }
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.iconWrap} onPress={goBack}>
                <Image
                    source={icons.back}
                    style={styles.iconImg} />
            </TouchableOpacity>
            <View style={styles.locationWrap}>
                <Text>{restaurantName}</Text>
            </View>
            <TouchableOpacity style={styles.iconWrap}>
                <Image
                    source={icons.list}
                    style={styles.iconImg} />
            </TouchableOpacity>
        </View>
    )
}