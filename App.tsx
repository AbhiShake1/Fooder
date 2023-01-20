import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { RootNavigatorParamList } from './src/core/router/navigator';
import { homeRoute, restaurantDetailRoute } from './src/core/router/routePath';
import { HomeScreen } from './src/feature/home/views/HomeScreen';
import { RestaurantDetailScreen } from './src/feature/restaurantDetail/views/RestaurantDetailScreen';
import { store } from './src/redux/store'

const Stack = createNativeStackNavigator<RootNavigatorParamList>()

const queryClient = new QueryClient()

module.exports = function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={homeRoute} component={HomeScreen} options={{ animation: 'slide_from_right', headerShown: false, }} />
            <Stack.Screen name={restaurantDetailRoute} component={RestaurantDetailScreen} options={{ animation: 'slide_from_right', headerShown: false, }} />
          </Stack.Navigator>
        </NavigationContainer >
      </QueryClientProvider>
    </Provider>
  );
}

