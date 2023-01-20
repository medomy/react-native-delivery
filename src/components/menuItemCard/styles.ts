import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Constants";

const styles = StyleSheet.create({
    cardContainer: {
        padding: SIZES.padding,
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
        height: 200,
        resizeMode: "cover"
    },
    counterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: SIZES.radius,
        alignItems: "center",
        padding: 8,
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: - 16,
        zIndex: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        width : "50%"
    },
    dishName: {
        ...FONTS.h2,
        fontWeight: "bold",
        marginTop: SIZES.margin,
        marginBottom : 3,
        color : "black",
        textAlign : "center"
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
    },
    btnWrap : {
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
        marginVertical : SIZES.margin2
    }
});

export default styles;