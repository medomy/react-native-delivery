import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Constants";

const styles = StyleSheet.create({
    wrap: {
        padding: SIZES.base,
        borderRadius: 40,
        marginHorizontal: SIZES.margin,
        alignItems : "center",
        width : 75,
        paddingBottom : SIZES.padding2
    },
    imgContainer: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 15,
        height: 15
    },
    txt: {
        fontWeight: "bold",
        marginBottom: 16,
        marginTop : 8
    },
    activeWrap: {
        backgroundColor: COLORS.primary
    },
    activeImgContainer: {
        backgroundColor: COLORS.white
    },
    activeTxt: {
        color: COLORS.white
    },
    inActiveWrap: {
        backgroundColor: COLORS.white
    },
    inActiveImgContainer: {
        backgroundColor: COLORS.lightGray
    },
    inActiveTxt: {
        color: COLORS.black
    }
});

export default styles;