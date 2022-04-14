import { View, TextInput, StyleSheet, Button, Alert } from "react-native";
import { useState } from "react";
import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue("");
        } else {
            Alert.alert("Sorry,but write 'Name task'");
        }
    };

    return (
        <View style={style.wrapper}>
            <TextInput
                style={style.input}
                onChangeText={setValue}
                value={value}
                placeholder="Write name task ....."
                autoCorrect={false}
                autoCapitalize="none"
            />
            <View style={style.sButton}>
                <Button title="Submit" color="pink" onPress={pressHandler} />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#000",
    },
    sButton: {
        backgroundColor: THEME.BLACK_COLOR,
        borderRadius: 20,
    },
});
