import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../Constants";

const styles = StyleSheet.create({
    btn: {
        borderRadius: SIZES.radius2,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical : SIZES.padding2
    },
    txt : {
        fontWeight : "bold",
        ...FONTS.h4
    }
});

export default styles;