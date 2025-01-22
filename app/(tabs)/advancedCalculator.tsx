import { Button, Text, TextInput, TextInputProps, TextProps, View } from "react-native";
import styles from "../../components/ui/styles";
import { useState } from "react";

// These two custom components act as examples on how you could "wrap" built-in
// components and make your own, reusable and semantically more meaningful ones.
const Title = ({ children }: TextProps) => <Text style={styles.title}>{children}</Text>
const Message = ({ children }: TextProps) => <Text style={styles.text}>{children}</Text>


// Feel free to modify these properties in the extra task:
type NumberInputProps = {
    value: number
    onChange: (x: number) => void
    placeholder?: string
}

/**
 * Extra task:
 * Complete the following reusable `NumberInput` component that only accepts and sets
 * values of numeric types. You should utilize the existing TextInput component and
 * add your own logic for validating and converting inputs to numbers. Remember to
 * add the keyboardType, style and other useful properties in the TextInput, too.
 */
function NumberInput({ value, onChange, placeholder }: NumberInputProps) {
    return <Message>TODO!</Message>
}

export default function Calculator() {

    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);
    const [message, setMessage] = useState("");

    const calc = (operator: "+" | "-") => {
        const result = operator === "+" ? (numA + numB) : (numA - numB);
        setMessage(`${numA} ${operator} ${numB} = ${result}`);
    }

    return <View style={styles.container}>
        <Title>Calculator 🚀</Title>

        { /* In this advanced version, the inputs only handle numbers */}
        <NumberInput value={numA} onChange={setNumA} placeholder="first number" />
        <NumberInput value={numB} onChange={setNumB} placeholder="second number" />

        <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => calc("+")} />
            <Button title="-" onPress={() => calc("-")} />
        </View>
        <Message>{message}</Message>
    </View>;
}