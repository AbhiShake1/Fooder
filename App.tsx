import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { homeRoute } from './src/core/router/routePath';
import { HomeScreen } from './src/feature/home/views/HomeScreen';

const Stack = createNativeStackNavigator()

const queryClient = new QueryClient()

module.exports = function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={homeRoute} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer >
    </QueryClientProvider>
  );
}

