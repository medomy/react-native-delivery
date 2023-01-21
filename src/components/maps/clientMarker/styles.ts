import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants";

const styles = StyleSheet.create({
    bigCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.white
    },
    smallCircle : {
        width : 30,
        height :30,
        borderRadius : 15,
        backgroundColor : COLORS.primary
    },
    icon : {
        width : 20,
        height :20,
        tintColor : COLORS.white
    }
})

export default styles;