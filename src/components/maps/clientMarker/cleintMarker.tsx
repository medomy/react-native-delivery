import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Marker } from 'react-native-maps';
import styles from './styles';
import { icons } from '../../../Constants';

export default function ClientMarker() {
    const location = useSelector((state: RootState) => state.location.location);
    return (
        <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}>
            <View style={styles.bigCircle}>
                <View style={styles.smallCircle}>
                    <Image
                        source={icons.location}
                        style={styles.icon}
                        resizeMode="contain" />
                </View>
            </View>
        </Marker>
    )
}