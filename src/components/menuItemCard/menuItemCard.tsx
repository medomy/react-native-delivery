import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import MenuItem from '../../types/menu'
import { COLORS, icons } from '../../Constants'
import Icon from 'react-native-vector-icons/Entypo'
import CustomBtn from '../customBtn/customBtn'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cartSlice/cartSlice'
import { RootState } from '../../store/store'
interface props {
    menuItem: MenuItem
}
export default function MenuItemCard({ menuItem }: props) {
    const [countItem, setCountItem] = useState(1);

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const increaseCount = () => {
        setCountItem(prev => prev + 1);
    }
    const decreaseCount = () => {
        if (countItem > 1) setCountItem(prev => prev - 1);
    }
    const _addToCart = () => {
        dispatch(addToCart({ ...menuItem, count: countItem }));
    }
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image
                    source={menuItem.photo}
                    style={styles.dishImg} />
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={decreaseCount}>
                        <Icon name='minus' color={countItem > 1 ? "black" : COLORS.darkgray} size={25} />
                    </TouchableOpacity>
                    <Text style={styles.dishDescription}>
                        {countItem}
                    </Text>
                    <TouchableOpacity onPress={increaseCount}>
                        <Icon name='plus' color={"black"} size={25} />
                    </TouchableOpacity>
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
            <View style={styles.btnWrap}>
                <CustomBtn width={"50%"} bgColor={COLORS.primary} txtColor={COLORS.white} txt='add to cart' onPress={_addToCart} />
            </View>
        </View>
    )
}