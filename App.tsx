import { isAndroid } from '@freakycoder/react-native-helpers';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { TransitionPresets, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { RootNavigatorParamList } from './src/core/router/navigator';
import { basketRoute, deliveryRoute, homeRoute, preparingOrderRoute, restaurantDetailRoute } from './src/core/router/routePath';
import BasketScreen from './src/feature/basket/views/BasketScreen';
import DeliveryScreen from './src/feature/delivery/views/DeliveryScreen';
import { HomeScreen } from './src/feature/home/views/HomeScreen';
import PreparingOrderScreen from './src/feature/preparingOrder/views/PreparingOrderScreen';
import { RestaurantDetailScreen } from './src/feature/restaurantDetail/views/RestaurantDetailScreen';
import { store } from './src/redux/store'

const Stack = createStackNavigator<RootNavigatorParamList>()

const queryClient = new QueryClient()

module.exports = function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{
              headerShown: false, presentation: 'modal', ...(TransitionPresets.SlideFromRightIOS),
            }}>
              <Stack.Screen name={homeRoute} component={HomeScreen} />
              <Stack.Screen name={restaurantDetailRoute} component={RestaurantDetailScreen} />
              <Stack.Screen name={deliveryRoute} component={DeliveryScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{
              presentation: 'modal', headerShown: false, gestureEnabled: true,
              transitionSpec: { open: TransitionSpecs.BottomSheetSlideInSpec, close: TransitionSpecs.BottomSheetSlideOutSpec },
              ...(isAndroid && TransitionPresets.ModalPresentationIOS),
            }}
            >
              <Stack.Screen name={basketRoute} component={BasketScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{
              headerShown: false,
              // transitionSpec: { open: TransitionSpecs.BottomSheetSlideOutSpec, close: TransitionSpecs.BottomSheetSlideInSpec },
              ...(TransitionPresets.SlideFromRightIOS),
              // ...(TransitionPresets.ModalSlideFromBottomIOS),
            }}
            >
              <Stack.Screen name={preparingOrderRoute} component={PreparingOrderScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer >
      </QueryClientProvider>
    </Provider >
  );
}

