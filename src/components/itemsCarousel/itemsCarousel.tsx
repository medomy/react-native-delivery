import { View, Text, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel'
import MenuItem from '../../types/menu'
import { CarouselRenderItem, ICarouselInstance } from 'react-native-reanimated-carousel/lib/typescript/types'
import MenuItemCard from '../menuItemCard/menuItemCard'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Pagination from './pagination'

interface props {
    data: MenuItem[]
}
export default function ItemsCarousel({ data }: props) {
    const [selectedIndx, setSelectedIndx] = useState<number>(0);
    // refer to carousel

    const carouselRef = useRef<ICarouselInstance | null>(null)
    const carouselRendererItem: CarouselRenderItem<MenuItem> = ({ item }) => (<MenuItemCard menuItem={item} />)

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={carouselRendererItem}
                width={Dimensions.get("window").width}
                pagingEnabled={true}
                // autoPlay={true}
                // mode='parallax'
                snapEnabled={true}
                onSnapToItem={(index) => setSelectedIndx(index)}
            />
            <Pagination data={data} selectedVal={selectedIndx} />
        </GestureHandlerRootView>
    )
}