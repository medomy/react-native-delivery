import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Location from "../types/location";

export function useRegion(restaurantLocation: Location) {
    const loaction = useSelector((state: RootState) => state.location.location);
    return {
        latitude: (loaction.latitude + restaurantLocation.latitude) / 2,
        longitude: (loaction.longitude + restaurantLocation.longitude) / 2,
        latitudeDelta: Math.abs(loaction.latitude - restaurantLocation.latitude) * 2,
        longitudeDelta: Math.abs(loaction.longitude - restaurantLocation.longitude) * 2,
    }
}