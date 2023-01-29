import { RouteProp, useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { ScrollView, View, Text, } from 'react-native'
import { useDispatch } from 'react-redux'
import { RootNavigatorParamList } from '../../../core/router/navigator'
import { setRestaurant } from '../slice/restaurantSlice'
import { FloatingBasketButton } from './components/FloatingBasketButton'
import { RestaurantDishes } from './components/RestaurantDishes'
import { RestaurantHeader } from './components/RestaurantHeader'
import { RestaurantInfo } from './components/RestaurantInfo'

export const RestaurantDetailScreen = () => {
  const dispatch = useDispatch()
  const { params } = useRoute<RouteProp<RootNavigatorParamList, '/restaurantDetail'>>()

  useState(() => dispatch(setRestaurant(params)))

  return (
    <>
      <FloatingBasketButton />
      <ScrollView>
        <RestaurantHeader />
        <RestaurantInfo />

        <RestaurantDishes />

        <View className='pb-32 bg-white' ><Text></Text></View>
      </ScrollView >
    </>
  )
}
