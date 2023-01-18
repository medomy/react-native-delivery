import { ImageSourcePropType } from "react-native";

interface Category {
    id: string | number,
    name: string,
    icon: ImageSourcePropType
}

export default Category;