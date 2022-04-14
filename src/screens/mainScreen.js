import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
} from "react-native";
import { AddTodo } from "../components/addTodo";
import { Todo } from "../components/todo";

export const MainScreen = ({ addTodo, todo, removeTodo, openTodo }) => {
    let content = (
        <FlatList
            data={todo}
            renderItem={({ item }) => {
                return (
                    <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
                );
            }}
            keyExtractor={(item) => item.id.toString()}
        />
    );

    if (todo.length === 0) {
        content = (
            <View style={style.imgWrap}>
                <Image
                    style={style.img}
                    source={require("../../assets/pngwing.com.png")}
                />
            </View>
        );
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    );
};

const style = StyleSheet.create({
    imgWrap: {
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        height: 300,
    },
    img: {
        width: "125%",
        height: "230%",
        resizeMode: "contain",
    },
});
