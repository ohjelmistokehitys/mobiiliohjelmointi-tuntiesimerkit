import { FlatList, View } from "react-native";
import styles from "../components/styles";
import { useRoute } from "@react-navigation/native";
import { HistoryType } from "./types";
import { StyledText, Title } from "../components/Text";

export default function HistoryScreen() {

    const route = useRoute<HistoryType['route']>();
    const { calculations = [] } = route.params;

    console.log(calculations);
    return <View style={styles.container}>
        <Title>History 🦖</Title>

        <FlatList
            data={calculations}
            renderItem={({ item }) => <StyledText>{item}</StyledText>}
        />
    </View>;
}