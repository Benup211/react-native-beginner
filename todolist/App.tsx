import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import Header from "./components/header/Header";
import CardTodo from "./components/cardtodo/CardTodo";
import { useState } from "react";

interface todoDataProps {
    id: number;
    title: string;
    isCompleted: boolean;
}
export default function App() {
    const [todoList, setTodoList] = useState<todoDataProps[]>([
        {
            id: 1,
            title: "Hello Programmer",
            isCompleted: true,
        },
        {
            id: 2,
            title: "Hello Programmer",
            isCompleted: false,
        },
        {
            id: 3,
            title: "Hello Programmer",
            isCompleted: true,
        },
    ]);
    const fetchTodo = (todoList: todoDataProps[]) => {
        return todoList.map((todo) => (
            <View key={todo.id} style={s.card}>
                <CardTodo cardPressed={updateTodo} cardData={todo} />
            </View>
        ));
    };

    function updateTodo(todo: todoDataProps) {
        const updatedTodo={
            ...todo,
            isCompleted:!todo.isCompleted
        }
        const updatedTodoList=[...todoList]
        const indexOfUpdatedTodo=updatedTodoList.findIndex((t)=>t.id===todo.id)
        updatedTodoList[indexOfUpdatedTodo]=updatedTodo
        setTodoList(updatedTodoList)
    }
    return (
        <View style={s.root}>
            <SafeAreaProvider>
                <SafeAreaView style={s.app}>
                    <View style={s.header}>
                        <Header />
                    </View>
                    <View style={s.body}>{fetchTodo(todoList)}</View>
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
}
