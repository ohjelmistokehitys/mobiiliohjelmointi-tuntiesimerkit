import { Button, FlatList, Text, TextProps, View } from "react-native";
import { useRef, useState } from "react";
import styles from "../../components/ui/styles";
import NumberInput from "@/components/NumberInput";

// These two custom components act as examples on how you could "wrap" built-in
// components and make your own, reusable and semantically more meaningful ones.
const Title = ({ children }: TextProps) => <Text style={styles.title}>{children}</Text>
const StyledText = ({ children }: TextProps) => <Text style={styles.text}>{children}</Text>


export default function CalculatorWithHistory() {
    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);
    const [calculations, setCalculations] = useState<string[]>([]);

    const calc = (operator: "+" | "-") => {
        const result = operator === "+" ? (numA + numB) : (numA - numB);
        const calculation = `${numA} ${operator} ${numB} = ${result}`
        setCalculations(calculations.concat(calculation));
    }

    return <View style={styles.container}>
        <Title>Calculator 🚀</Title>

        <NumberInput value={numA} onChange={setNumA} placeholder="first number" />
        <NumberInput value={numB} onChange={setNumB} placeholder="second number" />

        <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => calc("+")} />
            <Button title="-" onPress={() => calc("-")} />
        </View>
        <FlatList
            data={calculations.toReversed()} // `toReversed` makes the most recent one appear on top
            ListEmptyComponent={<StyledText>Let's do math!</StyledText>}
            renderItem={({ item }) => <StyledText>{item}</StyledText>}
        />
    </View>;
}