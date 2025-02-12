import { Button, View } from "react-native";
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

export function useCurrencies(): [boolean, Record<string, number>] {
    const [loading, setLoading] = useState(true);
    const [currencies, setCurrencies] = useState<Record<string, number>>({});

    useEffect(() => {
        fetchCurrencies()
            .then(data => setCurrencies(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return [loading, currencies];
}

function convert(amount: number, multiplier: number) {
    const fromEuro = (amount * multiplier).toFixed(2);
    const toEuro = (amount / multiplier).toFixed(2);

    return { fromEuro, toEuro };
}

export default function CurrencyScreen() {
    const [loading, currencies] = useCurrencies();
    const [amount, setAmount] = useState(100);
    const [selected, setSelected] = useState("usd");

    if (loading) {
        return <LoadingScreen />;
    }


    const multiplier = currencies[selected];
    const { fromEuro, toEuro } = convert(amount, multiplier);
    const message = `${amount} eur = ${fromEuro} ${selected}\n${amount} ${selected} = ${toEuro} eur`;

    return <View style={styles.container}>
        <StyledText>Enter amount:</StyledText>
        <NumberInput value={amount} onChange={(amt) => { setAmount(amt); }} />

        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={selected}
                onValueChange={(value) => { setSelected(value); }}
                dropdownIconColor={styles.textInput.borderColor}
            >
                {Object.keys(currencies).map(code => <Picker.Item value={code} label={code.toUpperCase()} key={code} />)}
            </Picker>
        </View>

        <StyledText style={{ textAlign: "center" }}>{message}</StyledText>
    </View >
}
