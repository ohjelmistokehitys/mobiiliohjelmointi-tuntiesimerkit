import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} options={{ title: "Koti" }} />
        <Screen name="Settings" component={SettingsScreen} options={{ title: "Asetukset" }} />
      </Navigator>
    </NavigationContainer>
  );
}
