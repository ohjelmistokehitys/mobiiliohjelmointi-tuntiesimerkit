import { useEffect, useState } from "react";
import { BodyText, Container, RowView, Title } from "../components";
import { ActivityIndicator, Button, FlatList, Text, TextInput } from "react-native";
import { styles } from "@/styles";
import { useSQLiteContext } from "expo-sqlite";



export default function ShoppingListScreen() {

    const [contents, setContents] = useState([] as string[]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);
    const db = useSQLiteContext();

    useEffect(() => {
        fetchItems()
            .then(() => setLoading(false));
    }, []);

    const fetchItems = async () => {
        try {
            const results = await db.getAllAsync("SELECT * FROM shoppinglist");
            console.log(results);
            const items = results.map(row => (row as any).item);
            setContents(items);
        } catch (e) {
            console.error(e);
        }
    };

    const saveItem = async (item: string) => {
        try {
            await db.runAsync("INSERT INTO shoppinglist (id, item) VALUES (?, ?);", new Date().getTime(), item);
            await fetchItems();
        } catch (e) {
            console.error(e);
        }
    };

    const clearDatabase = async () => {
        try {
            await db.runAsync("DELETE FROM shoppinglist");
            await fetchItems();
        } catch (e) {
            console.error(e);
        }
    }

    return <Container>
        <Title>Shopping list</Title>
        <BodyText>Add stuff to list</BodyText>

        <RowView>
            <TextInput value={text} onChangeText={setText} style={styles.textInput} />
            <Button title="Add" onPress={() => saveItem(text)} disabled={!text} />
            <Button title="Clear" onPress={() => clearDatabase()} color={"red"} />
        </RowView>

        {loading && <ActivityIndicator />}
        <FlatList
            data={contents}
            renderItem={({ item }) => <Text>{item}</Text>}
        />
    </Container>
}