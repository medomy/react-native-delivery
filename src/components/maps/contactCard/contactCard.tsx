import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Courior from '../../../types/courier'
import { COLORS, icons } from '../../../Constants'
import CustomBtn from '../../customBtn/customBtn'

interface props {
    courior: Courior,
    restaurantName: string,
    rating: number
}
export default function ContactCard({ courior, restaurantName, rating }: props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.infoContainer}>
                <View style={styles.couriorContainer}>
                    <Image
                        source={courior.avatar}
                        style={styles.img}
                        resizeMode="contain" />
                    <View>
                        <Text style={styles.couriorName}>
                            {courior.name}
                        </Text>
                        <Text style={styles.restaurantName}>
                            {restaurantName}
                        </Text>
                    </View>
                </View>
                <View style={styles.couriorContainer}>
                    <Image
                        source={icons.star}
                        style={styles.ratingImg}
                        resizeMode="contain" />
                    <Text style={styles.ratingTxt}>
                        {rating}
                    </Text>
                </View>
            </View>
            <View style={styles.btnsContainer}>
                <View style={styles.btnView}>
                    <CustomBtn width={"100%"} txtColor={COLORS.white} bgColor={COLORS.primary} txt='call' />
                </View>
                <View style={styles.btnView}>
                    <CustomBtn width={"100%"} txtColor={COLORS.black} bgColor={COLORS.secondary} txt='chat' />
                </View>
            </View>
        </View>
    )
}