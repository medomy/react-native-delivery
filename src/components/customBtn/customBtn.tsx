import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

interface props {
    width?: number | string,
    onPress?: () => void,
    txtColor: string,
    txt: string,
    bgColor: string,
}
export default function CustomBtn({ width, onPress, txtColor, txt, bgColor }: props) {
    return (
        <Pressable style={[styles.btn, { backgroundColor: bgColor, width: width }]} onPress={onPress}>
            <Text style={[{ color: txtColor } , styles.txt]}>{txt}</Text>
        </Pressable>
    )
}