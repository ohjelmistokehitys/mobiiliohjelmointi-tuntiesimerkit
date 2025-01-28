import { Alert, Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import styles from "../../components/ui/styles";
import { useState } from "react";
import { Title, StyledText } from './index';



export default function ShoppingList() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState<string[]>([]);

    const addToList = () => {
        setItems(items.concat(input));
        setInput("");
    };

    const clearList = () => {
        Alert.alert("Clear the list?", "Are you sure you wish to clear your list?",
            [
                { text: "Clear", onPress: () => setItems([]), style: "destructive" },
                { text: "Cancel", style: "cancel" }
            ]
        );
    }

    return <View style={styles.container}>
        <Title>Shopping list 🛒</Title>

        <TextInput
            value={input}
            onChangeText={setInput}
            onSubmitEditing={addToList}
            style={styles.textInput}
            keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
            <Button title="Add to list ➕" onPress={addToList} />
            <Button title="Clear 🗑️" onPress={clearList} />
        </View>

        <FlatList
            style={listStyles.shoppingList}
            data={items}
            renderItem={({ item }) => <StyledText>{item}</StyledText>}
        />
    </View>
}

const listStyles = StyleSheet.create({
    shoppingList: {
        width: "100%",
        paddingHorizontal: 50
    }
});
