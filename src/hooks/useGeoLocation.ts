import Geolocation from "@react-native-community/geolocation";
import { getLocationPermission } from "../services/locationService";
import Location from "../types/location";
import { useState, useEffect } from 'react'
export function useGeoLocationPermission() {
    let isGranted = false;
    const isLocationPermissioned = async () => {
        try {
            isGranted = await getLocationPermission();
        } catch (err) {
            console.warn(err);
            isGranted = false;
        }
    }
    useEffect(() => {
        isLocationPermissioned();
    }, []);
    return isGranted;
}

export function useGeoLocation() {
    const [loaction, setLocation] = useState<Location>();
    let isGranted = false;
    const isLocationPermissioned = async () => {
        try {
            // get permission for location
            isGranted = await getLocationPermission();
            console.log(isGranted);
            Geolocation.getCurrentPosition((position) => setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }))
        } catch (err) {
            console.warn(err);
            isGranted = false;
        }
    }
    useEffect(() => {
        isLocationPermissioned();
        console.log(isGranted);
        // Geolocation.getCurrentPosition((position) => setLocation({
        //     latitude: position.coords.latitude,
        //     longitude: position.coords.longitude
        // }))
        console.log(loaction);
    }, [])

    return loaction;
}