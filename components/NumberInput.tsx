import { useState } from "react";
import { TextInput } from "react-native";
import styles from "./styles";

type NumberInputProps = {
    value: number
    onChange: (x: number) => void
    placeholder?: string
}

/**
 * The `NumberInput` component only accepts and sets values of numeric types.
 */
export default function NumberInput({ value, onChange, placeholder }: NumberInputProps) {
    // Here we keep track of the number during editing
    const [visibleValue, setVisibleValue] = useState(value.toString());

    const update = (text: string) => {
        text = text
            .replaceAll(/,/g, ".") // dot is used as a decimal separator instead of comma
            .replaceAll(/[^0-9.]/g, ""); // removes all characters except for numbers and dot
        setVisibleValue(text);

        const asNumber = +text;
        if (Number.isNaN(asNumber)) {
            console.error(`TextInput received ${text}, which was converted to NaN.`);
            return;
        }

        onChange(asNumber); // update the number upstream
    }

    const valid = !Number.isNaN(+visibleValue);

    return <TextInput
        // the input style changes based on validation:
        style={[styles.textInput, valid ? styles.inputValid : styles.inputError]}
        value={visibleValue}
        onChangeText={update}
        placeholder={placeholder}
        keyboardType="numeric" />
}