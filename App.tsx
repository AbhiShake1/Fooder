import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homeRoute } from './src/core/router/routePath';
import { HomeScreen } from './src/feature/home/views/HomeScreen';

const Stack = createNativeStackNavigator();

module.exports = function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={homeRoute} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

