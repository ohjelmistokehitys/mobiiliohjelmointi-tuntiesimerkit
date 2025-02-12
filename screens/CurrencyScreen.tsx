import { ActivityIndicator, Alert, Button, FlatList, Image, Keyboard, Pressable, TextInput, View } from "react-native";
import styles from "../components/styles";
import { useEffect, useState } from "react";
import { StyledText, Title } from "../components/Text";
import NumberInput from "../components/NumberInput";
import LoadingScreen from "./LoadingScreen";
import { Picker } from "@react-native-picker/picker";

const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';


const fetchCurrencies = async () => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`Error fetching currencies: ${response.status}`);
    }
    const json = await response.json();
    return json.eur;
}

export default function CurrencyScreen() {

    const [amount, setAmount] = useState(100);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState("usd");
    const [message, setMessage] = useState("Input amount and convert!");
    const [currencies, setCurrencies] = useState<Record<string, number>>({});

    const convert = () => {
        const multiplier = currencies[selected];
        const fromEuro = (amount * multiplier).toFixed(2);
        const toEuro = (amount / multiplier).toFixed(2);

        setMessage(`${amount} eur = ${fromEuro} ${selected}\n${amount} ${selected} = ${toEuro} eur`);
    };

    useEffect(() => {
        fetchCurrencies()
            .then(data => setCurrencies(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);


    if (loading) {
        return <LoadingScreen />;
    }

    return <View style={styles.container}>
        <StyledText>Enter amount:</StyledText>
        <NumberInput value={amount} onChange={setAmount} />

        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={selected}
                onValueChange={setSelected}
                dropdownIconColor={styles.textInput.borderColor}
            >
                {Object.keys(currencies).map(code => <Picker.Item value={code} label={code.toUpperCase()} key={code} />)}
            </Picker>
        </View>

        <Button title="Convert 💰" onPress={convert} />

        <StyledText style={{ textAlign: "center" }}>{message}</StyledText>
    </View >
}
