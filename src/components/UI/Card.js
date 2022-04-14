import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const AppCard = (props) => {
    return (
        <View style={{ ...styles.default, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        padding: 10,
        borderWidth: 1,
        borderColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "pink",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        backgroundColor: "black",
        borderRadius: 10,
        elevation: 8,
    },
});
