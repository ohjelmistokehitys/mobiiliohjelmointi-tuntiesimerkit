import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: 20,
        gap: 20
    },
    title: {
        alignSelf: "flex-start",
        fontSize: 25,
    },
    bodyText: {
        alignSelf: "flex-start"
    },
    textInput: {
        width: 200,
        height: 40,
        borderColor: "black",
        borderWidth: 2
    },
});

export const listStyles = StyleSheet.create({
    articleTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    separator: {
        marginVertical: 15,
        borderColor: "gray",
        borderBottomWidth: 1
    }
});