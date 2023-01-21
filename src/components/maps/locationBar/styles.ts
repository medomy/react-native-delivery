import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Constants";

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: SIZES.padding2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 50,
        alignSelf: "center"
    },
    txt: {
        ...FONTS.body3,
        fontWeight: "900",
    }
});

export default styles;