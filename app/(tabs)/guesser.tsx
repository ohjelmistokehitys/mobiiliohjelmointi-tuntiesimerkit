import { Button, Text, TextInput, View } from "react-native";
import styles from "../../components/ui/styles";
import { useEffect, useState } from "react";

const MIN_GUESS = 1, MAX_GUESS = 100;

export default function Guesser() {
    let [correct, setCorrect] = useState(0);
    let [attempts, setAttempts] = useState(0);
    let [message, setMessage] = useState("");
    let [input, setInput] = useState("");

    useEffect(() => newGame(), []);

    const newGame = () => {
        let rand = Math.trunc(Math.random() * MAX_GUESS) + MIN_GUESS;
        console.log(`The correct answer is ${rand}`);
        setCorrect(rand);

        setMessage(`Guess a number between ${MIN_GUESS}-${MAX_GUESS}`);
        setAttempts(0);
        setInput("");
    };

    const makeGuess = () => {

        let guess = +input; // converting the string input to number

        if (Number.isNaN(guess)) {
            setMessage("Input a number 😠");
            return;
        }

        setAttempts(attempts + 1);

        if (guess < correct) {
            setMessage(`${guess} is too low`);
            return;
        }
        if (guess > correct) {
            setMessage(`${guess} is too high`);
            return;
        }
        if (guess === correct) {
            // FIXME: attempts seems to always be one too low?!
            setMessage(`Correct! It took you ${attempts} tries!`)
        }
    };

    return <View style={styles.container}>
        <Text style={styles.title}>Guessing game</Text>

        <Text style={styles.text}>{message}</Text>

        <TextInput
            value={input}
            onChangeText={setInput}
            onSubmitEditing={makeGuess}
            style={styles.textInput}
            keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
            <Button title="Make guess!" onPress={makeGuess} />
            <Button title="New game" onPress={newGame} />
        </View>
    </View>
}