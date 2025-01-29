import { Button, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

    return <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Ionicons name="home" size={32} />
        <Text>Home screen</Text>
        <Button title="Settings" onPress={() => navigation.navigate("Settings", { name: "Hello world" })} />
    </View>;
}
