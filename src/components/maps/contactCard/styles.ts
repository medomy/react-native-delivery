import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../Constants";

const styles = StyleSheet.create({
    cardContainer: {
        width: "90%",
        alignSelf: "center",
        position: "absolute",
        bottom: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius2,
        padding: SIZES.padding2
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    couriorContainer: {
        flexDirection: "row",
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: SIZES.margin
    },
    couriorName: {
        ...FONTS.h3,
        color: "black",
        fontWeight: "bold",
        marginBottom: 6
    },
    restaurantName: {
        ...FONTS.body4,
        color: COLORS.darkgray,
    },
    ratingImg: {
        width: 25,
        height: 25,
        marginRight: 3
    },
    ratingTxt: {
        ...FONTS.body5,
        fontWeight: "900",
        color: "black"
    },
    btnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btnView: {
        width: "40%",
        marginHorizontal: SIZES.margin
    }
});

export default styles;