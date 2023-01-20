import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../Constants'

interface props {
    value: number,
    selectedVal: number
}
export default function PaginationDot({ value, selectedVal }: props) {
    return (
        <View style={[styles.dot, { backgroundColor: value === selectedVal ? COLORS.primary : COLORS.secondary }]}>
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        marginHorizontal : 3,
    }
})