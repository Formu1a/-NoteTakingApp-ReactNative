import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { EditModel } from "../components/EditMode";
import { AppCard } from "../components/UI/Card";
import { THEME } from "../theme";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    };

    return (
        <View>
            <EditModel
                value={todo.title}
                visible={modal}
                onCancel={() => {
                    setModal(false);
                }}
                onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <Text style={styles.title}> {todo.title}</Text>
                <Button title="Edit" onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        color={THEME.PINK_COLOR}
                        title="Back"
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color={THEME.DELETE_COLOR}
                        title="Delete"
                        onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "40%",
        backgroundColor: THEME.BLACK_COLOR,
        borderRadius: 17,
    },
    title: {
        fontSize: 20,
        color: "pink",
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
});
