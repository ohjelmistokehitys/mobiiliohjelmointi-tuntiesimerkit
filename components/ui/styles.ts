import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        backgroundColor: "black"
    },
    textInput: {
        color: "white",
        width: 150,
        height: 40,
        paddingHorizontal: 8,
        borderColor: "white",
        borderWidth: 2
    },
    text: {
        color: "white",
        fontSize: 20
    },
    title: {
        color: "white",
        fontSize: 40
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 20
    },
    inputValid: {

    },
    inputError: {
        borderColor: 'red'
    }
});