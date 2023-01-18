import { View, Text, Pressable, Image } from 'react-native'
import React, { useRef } from 'react'
import Category from '../../types/category'
import styles from './styles';

interface props {
    category: Category,
    selectedCategory: number,
    chooseCategory: (id: number) => void
}
export default function CategoryWrap({ category, selectedCategory, chooseCategory }: props) {
    const isSelected = category.id === selectedCategory;
    return (
        <Pressable onPress={() => chooseCategory(Number(category.id))} style={[styles.wrap, isSelected ? styles.activeWrap : styles.inActiveWrap]}>
            <View style={[styles.imgContainer, isSelected ? styles.activeImgContainer : styles.inActiveImgContainer]}>
                <Image
                    source={category.icon}
                    style={styles.img} />
            </View>
            <Text style={[styles.txt, isSelected ? styles.activeTxt : styles.inActiveTxt]}>{category.name}</Text>
        </Pressable>
    )
}