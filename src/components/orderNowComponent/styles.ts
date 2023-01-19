import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        // borderTopRightRadius: SIZES.radius2,
        // borderTopLeftRadius: SIZES.radius2,
        backgroundColor: COLORS.white,
        width: "100%",
        borderRadius : 25
    },
    cartInfoContainer: {
        borderTopRightRadius: SIZES.radius2,
        borderTopLeftRadius: SIZES.radius2,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding2,
        paddingVertical : 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: COLORS.darkgray,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    addressPaymentInfo: {
        paddingHorizontal: SIZES.padding2,
        backgroundColor: COLORS.white,
        paddingVertical : 25
    },
    addressOrPaymentRow : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        paddingVertical : SIZES.padding
    },
    addressOrPayment: {
        flexDirection: "row"
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 6
    },
    cartTxt: {
        ...FONTS.h3,
        fontWeight: "bold",
        color : "black"
    },
    addressPaymentTxt: {
        ...FONTS.h4,
        fontWeight: "bold",
        color : "black"
    },
    btnWrapper: {
        width: "100%",
        marginTop: SIZES.margin2,
        marginBottom: SIZES.margin
    }
});

export default styles;