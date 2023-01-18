import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function HomeTitleHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Main Categories</Text>
        </View>
    )
}