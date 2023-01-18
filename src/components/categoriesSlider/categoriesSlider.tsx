import { View, Text, ListRenderItem, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import categories from '../../data/categories'
import Category from '../../types/category'
import CategoryWrap from '../categoryWrap/categoryWrap';
import styles from './styles';

export default function CategoriesSlider() {
    const [cats, setCats] = useState<Category[]>([]);
    const [selectedItem, setSelectedItem] = useState<number>(1);
    // flat list renderer

    const flatListRenderer: ListRenderItem<Category> = ({ item }) => (<CategoryWrap category={item} selectedCategory={selectedItem} chooseCategory={selectCategory} />);
    useEffect(() => {
        setCats(categories);
    }, [])
    const selectCategory = (id: number) => {
        setSelectedItem(id);
    }
    return (
        <View style={styles.flatList}>
            <FlatList
                data={cats}
                renderItem={flatListRenderer}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}