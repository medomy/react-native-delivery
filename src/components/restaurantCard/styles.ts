import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Constants";

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        padding: SIZES.padding,
        marginVertical: SIZES.margin,
    },
    imgDurationContainer: {
        width: "100%",
        position: "relative",
        marginBottom: SIZES.margin2,
        height: 150,
    },
    img: {
        width: "100%",
        height: 150,
        borderRadius: SIZES.radius2
    },
    durationView: {
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: SIZES.radius2,
        borderTopRightRadius: SIZES.radius2
    },
    durationTxt: {
        fontWeight: "800",
        color: "black"
    },
    infoContainer: {

    },
    RestaurantName: {
        fontWeight: "bold",
        color: "black",
        ...FONTS.h3
    },
    ratingAffordabilityBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    ratingImg: {
        width: SIZES.h4,
        height: SIZES.h4,
        marginRight: 4
    },
    ratingTxt: {
        fontWeight: "800",
        marginRight: SIZES.margin2,
        color: "black"
    },
    fadingTxt: {
        color: COLORS.lightGray2
    },
    affordabiltyDollerSignBlack: {
        tintColor: "black",
        width: 18,
        height: 18
    },
    affordabiltyDollerSignFade: {
        tintColor: COLORS.secondary,
        width: 20,
        height: 20
    },
    catsContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default styles