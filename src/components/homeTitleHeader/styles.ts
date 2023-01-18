import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../Constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: SIZES.padding,
        marginVertical: SIZES.margin
    },
    txt: {
        width: "40%",
        ...FONTS.h1,
        color : "black"
    }
})

export default styles;