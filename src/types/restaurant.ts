import { ImageSourcePropType } from "react-native"
import PriceRating from "./enums/priceRating"
import Location from "./location"
import Courior from "./courier"
import MenuItem from "./menu"

export default interface Restaurant {
    id: number,
    name: string,
    rating: number,
    categories: number[],
    priceRating: PriceRating,
    photo: ImageSourcePropType,
    duration: string,
    location: Location,
    courier: Courior,
    menu: MenuItem[]
}