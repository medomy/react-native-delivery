import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import MenuItem from '../../types/menu'
import { icons } from '../../Constants'

interface props {
    menuItem: MenuItem
}
export default function MenuItemCard({ menuItem }: props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image
                    source={menuItem.photo}
                    style={styles.dishImg} />
                <View style={styles.counterContainer}>
                    {/* <TouchableOpacity>
                        <Text style={styles.dishDescription}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.dishDescription}>
                        1
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.dishDescription}>
                            +
                        </Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            <Text style={styles.dishName}>
                {menuItem.name}
            </Text>
            <Text style={styles.dishDescription}>
                {menuItem.description}
            </Text>
            <View style={styles.caloryContainer}>
                <Image
                    source={icons.fire}
                    style={styles.caloryPic} />
                <Text style={styles.caloryTxt}>{menuItem.calories} cals</Text>
            </View>
        </View>
    )
}