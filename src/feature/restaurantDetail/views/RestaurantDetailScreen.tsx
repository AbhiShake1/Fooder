import { RouteProp, useRoute } from '@react-navigation/native'
import { ScrollView, View, Text, TouchableOpacity, } from 'react-native'
import { RootNavigatorParamList } from '../../../core/router/navigator'
import { RestaurantDishes } from './components/RestaurantDishes'
import { RestaurantHeader } from './components/RestaurantHeader'
import { RestaurantInfo } from './components/RestaurantInfo'

export const RestaurantDetailScreen = () => {
  return (
    <ScrollView>
      <RestaurantHeader />
      <RestaurantInfo />

      <RestaurantDishes />
    </ScrollView >
  )
}
