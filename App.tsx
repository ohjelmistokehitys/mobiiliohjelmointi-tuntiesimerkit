import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import RecipeSearch from './screens/RecipeScreen';
import CurrencyScreen from './screens/CurrencyScreen';
import MapScreen from './screens/MapScreen';


const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return <NavigationContainer>
    <Navigator>
      <Screen name="Map" component={MapScreen} options={{ title: "Map", tabBarIcon: () => <Text>🗺️</Text> }} />
      <Screen name="Recipes" component={RecipeSearch} options={{ title: "Recipe search", tabBarIcon: () => <Text>👨‍🍳</Text> }} />
      <Screen name="Currencies" component={CurrencyScreen} options={{ title: "Currency converter", tabBarIcon: () => <Text>💰</Text> }} />
    </Navigator>
  </NavigationContainer>
}
