import { ImageSourcePropType } from "react-native";

export default interface MenuItem {
    menuId: number,
    name: string,
    photo: ImageSourcePropType,
    description: string,
    calories: number,
    price: number
}