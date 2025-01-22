import { Button, Text, TextInput, TextProps, View } from "react-native";
import styles from "../../components/ui/styles";
import { useState } from "react";

export const Title = ({ children }: TextProps) => <Text style={styles.title}>{children}</Text>
export const Message = ({ children }: TextProps) => <Text style={styles.text}>{children}</Text>

export default function Calculator() {

    const [numA, setNumA] = useState("");
    const [numB, setNumB] = useState("");
    const [message, setMessage] = useState("");

    const calc = (operator: "+" | "-") => {
        const a = +numA;
        const b = +numB;

        if (Number.isNaN(a) || Number.isNaN(b)) {
            setMessage("Input only numbers");
            return;
        }

        if (operator === "+") {
            setMessage(`${a} + ${b} = ${a + b}`);
        } else {
            setMessage(`${a} - ${b} = ${a - b}`);
        }
    }

    return <View style={styles.container}>
        <Title>Calculator 🧮</Title>

        <TextInput style={styles.textInput}
            value={numA}
            onChangeText={text => setNumA(text)}
            placeholder="first number"
            placeholderTextColor={styles.textInput.color}
            keyboardType="numeric" />

        <TextInput style={styles.textInput}
            value={numB}
            onChangeText={text => setNumB(text)}
            placeholder="second number"
            placeholderTextColor={styles.textInput.color}
            keyboardType="numeric" />

        <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => calc("+")} />
            <Button title="-" onPress={() => calc("-")} />
        </View>
        <Message>{message}</Message>
    </View>;
}