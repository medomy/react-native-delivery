import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Constants";

const styles = StyleSheet.create({
    cardContainer: {
        padding: SIZES.padding2,
        width: "100%",
        alignItems : "center"
    },
    imgContainer: {
        position: "relative",
        width: "90%",
        alignItems: "center"
    },
    dishImg: {
        width: "80%",
        height: 250,
        resizeMode: "cover"
    },
    counterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: SIZES.radius,
        alignItems: "center",
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: - SIZES.padding,
        zIndex: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        width : "40%"
    },
    dishName: {
        ...FONTS.h2,
        fontWeight: "bold",
        marginTop: SIZES.margin2,
        marginBottom: 6,
        color : "black"
    },
    dishDescription: {
        ...FONTS.body2,
        marginBottom: SIZES.margin2,
        color : "black",
        textAlign : "center"
    },
    caloryContainer : {
        flexDirection : "row"
    },
    caloryTxt : {
        color : COLORS.darkgray,
        ...FONTS.body4
    },
    caloryPic : {
        width : 25,
        height : 25,
        marginRight : 4
    }
});

export default styles;