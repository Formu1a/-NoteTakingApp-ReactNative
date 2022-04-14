import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    Alert,
} from "react-native";
import { AppLoading } from "expo";
import { Navbar } from "./src/components/Navbar";
import { useState } from "react";
import { MainScreen } from "./src/screens/mainScreen";
import { TodoScreen } from "./src/screens/todoScreen";
import { useFonts } from "expo-font";

// async function loadApp() {
//     await Font.loadAsync({
//         "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
//         "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     });
// }

export default function App() {
    const [todoId, setTodoId] = useState(null);

    const [todo, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title,
            },
        ]);
    };
    const removeTodo = (id) => {
        const nameTodo = todo.find((t) => t.id === id);

        Alert.alert(
            "Delete Element",
            `You want delete "${nameTodo.title}" task ?`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        setTodoId(null);
                        setTodos((prev) =>
                            prev.filter((todo) => todo.id !== id)
                        );
                    },
                },
            ]
        );
    };

    const updateTodo = (id, title) => {
        setTodos((old) =>
            old.map((todo) => {
                if (todo.id === id) {
                    todo.title = title;
                }
                return todo;
            })
        );
    };

    let content = (
        <MainScreen
            addTodo={addTodo}
            removeTodo={removeTodo}
            todo={todo}
            openTodo={setTodoId}
        />
    );

    if (todoId) {
        const selTodo = todo.find((todo) => todo.id === todoId);
        content = (
            <TodoScreen
                onRemove={removeTodo}
                goBack={() => setTodoId(null)}
                todo={selTodo}
                onSave={updateTodo}
            />
        );
    }
    return (
        <View>
            <Navbar title="To$do  App ^_^" />
            <View style={styles.container}>{content}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});
