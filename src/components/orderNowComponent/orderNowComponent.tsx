import { View, Text, Image, ViewComponent, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, icons } from '../../Constants'
import CustomBtn from '../customBtn/customBtn'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Restaurant from '../../types/restaurant'
import { useNavigation } from '@react-navigation/native'

interface props {
    restaurantId: number
}
export default function OrderNowComponent({ restaurantId }: props) {
    const { numberOfElements, totalPrice } = useSelector((state: RootState) => {
        return { numberOfElements: state.cart.numberOfElements, totalPrice: state.cart.totalPrice }
    });
    const navigation = useNavigation();
    const orderNow = () => {
        if (numberOfElements > 0) {
            navigation.navigate("Map" as never, {
                restaurantId,
            } as never)
        }
        else Alert.alert("no items", "htere is nothing in your cart to order", [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
                style: "default"
            },
        ]
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.cartInfoContainer}>
                <Text style={styles.cartTxt}>{numberOfElements} items in cart</Text>
                <Text style={styles.cartTxt}>${totalPrice}</Text>
            </View>
            <View style={styles.addressPaymentInfo}>
                <View style={styles.addressOrPaymentRow}>
                    <View style={styles.addressOrPayment}>
                        <Image
                            source={icons.location}
                            style={styles.icon}
                            resizeMode="contain" />
                        <Text style={styles.addressPaymentTxt}>Street name</Text>
                    </View>
                    <View style={styles.addressOrPayment}>
                        <Image
                            source={icons.master_card}
                            style={styles.icon}
                            resizeMode="contain" />
                        <Text style={styles.addressPaymentTxt}>****** 5671</Text>
                    </View>
                </View>
                <View style={styles.btnWrapper}>
                    <CustomBtn bgColor={COLORS.primary} txt='Order' txtColor={COLORS.white} onPress={orderNow} width={"100%"} />
                </View>
            </View>
        </View>
    )
}