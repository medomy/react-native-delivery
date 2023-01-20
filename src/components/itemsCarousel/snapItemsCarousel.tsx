import { View, Text, ListRenderItem, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel';
import MenuItem from '../../types/menu';
import MenuItemCard from '../menuItemCard/menuItemCard';

interface props {
    items: MenuItem[]
}
export default function SnapItemsCarousel({ items }: props) {
    // reference to carousel item
    const carousel = useRef();

    // renderer
    const renderer: ListRenderItem<MenuItem> = ({ item }) => (<MenuItemCard menuItem={item} />);
    return (
        <Carousel
            ref={carousel.current}
            data={items}
            renderItem={renderer}
            layout={'default'}
            pagingEnabled={true}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={Dimensions.get("window").width}
            horizontal />
    )
}