import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import Location from '../../../types/location'
import { useRegion } from '../../../hooks/useRegion'
import Restaurant from '../../../types/restaurant'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import ClientMarker from '../clientMarker/cleintMarker'
import CouriorMarker from '../courierMarker/courierMarker'
import ContactCard from '../contactCard/contactCard'
import LocationBar from '../locationBar/locationBar'

interface props {
    restaurant: Restaurant
}
export default function MapViewComponent({ restaurant }: props) {
    const region = useRegion(restaurant.location);

    const mapViewRef = useRef<MapView | null>(null);
    return (
        <View style={{ flex: 1 }}>
            <MapView
                region={region}
                ref={mapViewRef}
                style={{ flex: 1 }}
            >
                <ClientMarker />
                <CouriorMarker restaurantLocation={restaurant.location} />
            </MapView>
            <ContactCard courior={restaurant.courier} restaurantName={restaurant.name} rating={restaurant.rating} />
            <LocationBar />
        </View>
    )
}