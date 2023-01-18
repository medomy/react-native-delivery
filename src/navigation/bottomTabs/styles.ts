import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon : {
        width : 25,
        height : 25
    },
    bottomTabBarStyle : {
        backgroundColor : "transparent",
        position : "absolute",
        bottom : 0,
        left : 0,
        right : 0,
        elevation : 0, // important for android
        borderTopWidth : 0
    }
});

export default styles;