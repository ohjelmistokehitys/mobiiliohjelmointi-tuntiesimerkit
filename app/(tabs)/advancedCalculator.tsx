import { Button, Text, TextProps, View } from "react-native";
import { useState } from "react";
import styles from "../../components/ui/styles";
import NumberInput from "@/components/NumberInput";

// These two custom components act as examples on how you could "wrap" built-in
// components and make your own, reusable and semantically more meaningful ones.
const Title = ({ children }: TextProps) => <Text style={styles.title}>{children}</Text>
const Message = ({ children }: TextProps) => <Text style={styles.text}>{children}</Text>


// For the extra task, see the file /components/NumberInput
// that contains the NumberInput component that is utilized below:


export default function AdvancedCalculator() {

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