import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CalculatorScreen from './screens/CalculatorScreen';
import HistoryScreen from './screens/HistoryScreen';
import { Text } from 'react-native';
import { HistoryProvider, useHistory } from './hooks/HistoryContext';



const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    <HistoryProvider>
      <CalculatorApp />
    </HistoryProvider>
  );
}

function CalculatorApp() {
  const { history } = useHistory();
  return <NavigationContainer>
    <Navigator>
      <Screen name="Calculator" component={CalculatorScreen} options={{ title: "Calculator", tabBarIcon: () => <Text>📱</Text> }} />
      <Screen name="History" component={HistoryScreen} options={{ title: `History (${history.length})`, tabBarIcon: () => <Text>📃</Text> }} initialParams={{ calculations: [] }} />
    </Navigator>
  </NavigationContainer>
}