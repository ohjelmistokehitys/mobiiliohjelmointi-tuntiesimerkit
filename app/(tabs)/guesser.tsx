import { Button, Text, TextInput, View } from "react-native";
import styles from "../../components/ui/styles";
import { useEffect, useRef, useState } from "react";
import { Title, Message } from './index';

const MIN_GUESS = 1, MAX_GUESS = 100;

export default function Guesser() {
    let [correct, setCorrect] = useState(0);
    let attempts = useRef(0);
    let [message, setMessage] = useState("");
    let [input, setInput] = useState("");

    console.log({ correct, attempts, message, input });
    useEffect(() => newGame(), []);

    const newGame = () => {
        let rand = Math.trunc(Math.random() * MAX_GUESS) + MIN_GUESS;
        console.log(`The correct answer is ${rand}`);
        setCorrect(rand);

        setMessage(`Guess a number between ${MIN_GUESS}-${MAX_GUESS}`);
        attempts.current = 0;
        setInput("");
    };

    const makeGuess = () => {

        let guess = +input; // converting the string input to number

        if (Number.isNaN(guess)) {
            setMessage("Input a number 😠");
            return;
        }

        attempts.current++;

        if (guess < correct) {
            setMessage(`${guess} is too low`);
            return;
        }
        if (guess > correct) {
            setMessage(`${guess} is too high`);
            return;
        }
        if (guess === correct) {
            setMessage(`Correct! It took you ${attempts.current} tries!`)
        }
    };

    return <View style={styles.container}>
        <Title>Guessing game</Title>

        <Message>{message}</Message>

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