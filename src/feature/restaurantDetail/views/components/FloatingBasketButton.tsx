import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { AppColors } from '../../../../core/constants'
import { RootNavigatorParamList } from '../../../../core/router/navigator'
import { basketRoute } from '../../../../core/router/routePath'
import { selectBasketItems, selectBasketTotal } from '../../slice/basketSlice'

export const FloatingBasketButton = () => {
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)

  const navigation = useNavigation<StackNavigationProp<RootNavigatorParamList, '/restaurantDetail'>>()

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity activeOpacity={.9} style={{ backgroundColor: items.length == 0 ? AppColors.primaryDisabled : AppColors.primary }}
        className={`mx-5 p-4 rounded-md flex-row items-center space-x-1`}
        disabled={items.length == 0}
        onPress={() => navigation.navigate(basketRoute)}>
        <View className='flex-1 flex-row'>
          <Text className={`texbg-red-100 text-white font-extrabold text-lg bg-[#01A296] px-2 rounded-sm`}>{items.length}</Text>
          <View className='flex-1' />
        </View>
        <Text className='flex-1 text-white font-extrabold text-lg text-right'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold text-right flex-1'>रु {basketTotal}</Text>
      </TouchableOpacity>
    </View >
  )
}
