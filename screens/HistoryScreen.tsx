import { FlatList, View } from "react-native";
import styles from "../components/styles";
import { StyledText, Title } from "../components/Text";
import { useHistory } from "../hooks/HistoryContext";

export default function HistoryScreen() {

    const { history } = useHistory();

    return <View style={styles.container}>
        <Title>History 🦖</Title>

        <FlatList
            data={history}
            renderItem={({ item }) => <StyledText>{item}</StyledText>}
        />
    </View>;
}