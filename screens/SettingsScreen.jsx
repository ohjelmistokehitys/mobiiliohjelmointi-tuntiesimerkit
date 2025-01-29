import { Button, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen({ route }) {

    const navigation = useNavigation();

    return <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Ionicons name="settings" size={32} />
        <Text>Settings screen</Text>
        <Text>{route.params.name}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>;
}
