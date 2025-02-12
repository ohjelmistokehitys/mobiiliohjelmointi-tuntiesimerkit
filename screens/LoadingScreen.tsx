import { ActivityIndicator, View } from "react-native";
import styles from "../components/styles";
import { StyledText } from "../components/Text";

export default function LoadingScreen() {
    return <View style={styles.container}>
        <StyledText>Loading...</StyledText>
        <ActivityIndicator size="large" />
    </View>
}