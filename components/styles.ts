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
        width: 200,
        height: 50,
        paddingHorizontal: 8,
        borderColor: "white",
        borderWidth: 2
    },

    // verified on Android only!
    pickerContainer: {
        width: 200,
        height: 60,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 10
    },
    // verified on Android only!
    picker: {
        color: "white",
        height: "100%",
        width: "100%"
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