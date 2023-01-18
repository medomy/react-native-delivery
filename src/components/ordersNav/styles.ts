import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants";

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        padding: SIZES.base,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImg: {
        width: SIZES.h3,
        height: SIZES.h3
    },
    iconWrap: {
        marginHorizontal: SIZES.base,
        padding: SIZES.padding * 2
    },
    locationWrap: {
        backgroundColor: COLORS.lightGray3,
        borderRadius: SIZES.radius,
        flex: 1,
        padding: SIZES.padding,
        justifyContent: "center",
        alignItems: "center"
    },
    locationTxt: {
        color: COLORS.black,
        fontWeight: "bold"
    }
});

export default styles;