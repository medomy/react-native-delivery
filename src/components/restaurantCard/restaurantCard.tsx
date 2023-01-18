import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Restaurant from '../../types/restaurant'
import styles from './styles'
import { icons } from '../../Constants'
import categoriesArrFunc from '../../utils/categoriesArr'
import { affordabilityActivArrFunc, affordabilityinActiveArrFunc } from '../../utils/affordabiltyArr'
import { useNavigation } from '@react-navigation/native'

interface props {
    restaurant: Restaurant
}
export default function RestaurantCard({ restaurant }: props) {
    const navigation = useNavigation();

    const goToOrders = () => {
        navigation.navigate("Order" as never, {
            restaurantId: restaurant.id
        } as never)
    }

    return (
        <View style={styles.cardContainer}>
            <Pressable style={styles.imgDurationContainer} onPress={goToOrders}>
                <Image
                    source={restaurant.photo}
                    style={styles.img}
                    resizeMode="cover"
                />
                <View style={styles.durationView}>
                    <Text style={styles.durationTxt}>
                        {restaurant.duration}
                    </Text>
                </View>
            </Pressable>
            <View style={styles.infoContainer}>
                <Text style={styles.RestaurantName}>
                    {restaurant.name}
                </Text>
                <View style={styles.ratingAffordabilityBox}>
                    <Image
                        source={icons.star}
                        style={styles.ratingImg}
                        resizeMode="contain" />
                    <Text style={styles.ratingTxt}>
                        {restaurant.rating}
                    </Text>
                    {categoriesArrFunc(restaurant.categories).map((cat) => (
                        <View key={cat} style={styles.catsContainer}>
                            <Text style={styles.ratingTxt}>{cat}</Text>
                            <Text style={styles.fadingTxt}>.</Text>
                        </View>
                    ))}
                    {affordabilityActivArrFunc(restaurant.priceRating).map((n) => (
                        <Image
                            source={icons.dollar}
                            style={styles.affordabiltyDollerSignBlack}
                            resizeMode='contain'
                            key={n} />
                    ))}
                    {affordabilityinActiveArrFunc(restaurant.priceRating).map((n) => (
                        <Image
                            source={icons.dollar}
                            style={styles.affordabiltyDollerSignFade}
                            resizeMode='contain'
                            key={n} />
                    ))}
                </View>
            </View>
        </View>
    )
}