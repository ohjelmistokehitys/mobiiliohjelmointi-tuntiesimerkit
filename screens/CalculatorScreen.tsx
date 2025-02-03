import { Button, FlatList, View } from "react-native";
import { useState } from "react";
import styles from "../components/styles";
import NumberInput from "../components/NumberInput";
import { useNavigation } from "@react-navigation/native";
import { StyledText, Title } from "../components/Text";
import { useHistory } from "../hooks/HistoryContext";


export default function CalculatorScreen() {

    const navigation = useNavigation();

    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);

    const { addHistory, history } = useHistory();

    const calc = (operator: "+" | "-") => {
        const result = operator === "+" ? (numA + numB) : (numA - numB);
        const calculation = `${numA} ${operator} ${numB} = ${result}`
        addHistory(calculation);
    }

    return <View style={styles.container}>
        <Title>Calculator 🚀</Title>

        <NumberInput value={numA} onChange={setNumA} placeholder="first number" />
        <NumberInput value={numB} onChange={setNumB} placeholder="second number" />

        <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => calc("+")} />
            <Button title="-" onPress={() => calc("-")} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="See history" onPress={() => navigation.navigate("History")} />
        </View>
        <FlatList
            data={history.toReversed()} // `toReversed` makes the most recent one appear on top
            ListEmptyComponent={<StyledText>Let's do math!</StyledText>}
            renderItem={({ item }) => <StyledText>{item}</StyledText>}
        />
    </View>;
}
