import { useEffect, useState } from "react";
import { BodyText, Container, RowView, Title } from "../components";
import { Button, FlatList, Text, TextInput } from "react-native";
import { styles } from "@/styles";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "shoppingList";

function useStorage<T>(key: string, initial: T): [T, (x: T) => void] {
    const [data, setData] = useState<T>(initial);
    const { getItem, setItem } = useAsyncStorage(key);

    useEffect(() => {
        getItem()
            .then(result => {
                result && setData(JSON.parse(result));
            });
    }, [])

    return [data, (content: T) => {
        setItem(JSON.stringify(content))
            .then(() => setData(content));
    }];
}

export default function ShoppingListScreen() {

    const [contents, setContents] = useStorage(STORAGE_KEY, [] as string[]);
    const [text, setText] = useState("");

    const addToList = () => {
        setContents([...contents, text]);
        setText("");
    }

    return <Container>
        <Title>Shopping list</Title>
        <BodyText>Add stuff to list</BodyText>

        <RowView>
            <TextInput value={text} onChangeText={setText} style={styles.textInput} />
            <Button title="Add" onPress={addToList} />
            <Button title="Clear" onPress={() => setContents([])} color={"red"} />
        </RowView>

        <FlatList
            data={contents}
            renderItem={({ item }) => <Text>{item}</Text>}
        />
    </Container>
}