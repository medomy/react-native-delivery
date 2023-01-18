import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '../../Constants'
import styles from './styles'
export default function HomeHeader() {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.iconWrap}>
                <Image
                    source={icons.nearby}
                    style={styles.iconImg} />
            </TouchableOpacity>
            <View style={styles.locationWrap}>
                <Text>Location</Text>
            </View>
            <TouchableOpacity style={styles.iconWrap}>
                <Image
                    source={icons.basket}
                    style={styles.iconImg} />
            </TouchableOpacity>
        </View>
    )
}