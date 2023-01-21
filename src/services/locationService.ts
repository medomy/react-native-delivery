import { PermissionsAndroid } from "react-native"

export async function getLocationPermission() {
    try {
        const premissionGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: "request for location",
            message: "Delivery app needs permission to your location",
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
        )
        if (premissionGranted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        throw new Error(`could not get location , ${err}`)
    }
}