import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MenuItem from '../../types/menu'
import PaginationDot from './paginationDot'

interface props {
    data: MenuItem[],
    selectedVal: number
}
export default function Pagination({ data, selectedVal }: props) {
    return (
        <View style={styles.row}>
            {data.map((value, i) => (
                <PaginationDot key={value.menuId} value={i} selectedVal={selectedVal} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginVertical: 6,
        zIndex : 100,
    },
})