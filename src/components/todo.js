import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

export const Todo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <Text style={styles.textTodo}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 3,
        backgroundColor: "#000",
        borderColor: THEME.PINK_COLOR,
        borderRadius: 5,
        marginBottom: 10,
    },
    textTodo: {
        color: THEME.PINK_COLOR,
        fontSize: 17,
    },
});
