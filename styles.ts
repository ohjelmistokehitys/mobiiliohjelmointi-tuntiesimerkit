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
        alignSelf: "center",
        fontSize: 25,
    },
});

export const listStyles = StyleSheet.create({
    articleTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    articleLink: {
        textDecorationLine: "underline"
    },
    separator: {
        marginVertical: 15,
        borderColor: "gray",
        borderBottomWidth: 1
    }
});