import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import RecipeSearch from './screens/RecipeScreen';
import CurrencyScreen from './screens/CurrencyScreen';


const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return <NavigationContainer>
    <Navigator>
      <Screen name="Recipes" component={RecipeSearch} options={{ title: "Recipe search", tabBarIcon: () => <Text>👨‍🍳</Text> }} />
      <Screen name="Currencies" component={CurrencyScreen} options={{ title: "Currency converter", tabBarIcon: () => <Text>💰</Text> }} />
    </Navigator>
  </NavigationContainer>
}
