import { View, Text, Image, ViewComponent } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, icons } from '../../Constants'
import CustomBtn from '../customBtn/customBtn'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export default function OrderNowComponent() {
    const { numberOfElements, totalPrice } = useSelector((state: RootState) => {
        return { numberOfElements: state.cart.numberOfElements, totalPrice: state.cart.totalPrice }
    });
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
                    <CustomBtn bgColor={COLORS.primary} txt='Order' txtColor={COLORS.white} onPress={() => { }} width={"100%"} />
                </View>
            </View>
        </View>
    )
}