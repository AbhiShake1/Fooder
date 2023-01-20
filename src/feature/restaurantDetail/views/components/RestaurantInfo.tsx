import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  MapPinIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon
} from 'react-native-heroicons/solid'
import { AppColors } from '../../../../core/constants'
import { RootNavigatorParamList } from '../../../../core/router/navigator'

export const RestaurantInfo = () => {
  const { params } = useRoute<RouteProp<RootNavigatorParamList, '/restaurantDetail'>>()

  return (
    <View className='bg-white'>
      <View className='px-4 pt-4'>
        <Text className='text-3xl font-bold'>{params.name}</Text>
        <View className='flex-row space-x-2 my-1'>
          <View className='flex-row items-center space-x-1'>
            <StarIcon color='green' opacity={.5} size={18} />
            <Text className='text-xs text-gray-500'>
              <Text className='text-green-500'>{params.rating}</Text> . {params.genre}
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <MapPinIcon color='green' opacity={.4} size={18} />
            <Text className='text-xs text-gray-500'>
              Nearby . {params.address}
            </Text>
          </View>
        </View>

        <Text className='text-gray-500 mt-2 pb-4'>{params.short_description}</Text>

        <TouchableOpacity activeOpacity={.8} className='flex-row items-center space-x-2 p-4 border-y border-gray-50' >
          <QuestionMarkCircleIcon color='gray' opacity={.6} size={18} />
          <Text className='pl-2 flex-1 text-md font-bold'>
            Have a food allergy?
          </Text>

          <ChevronRightIcon color={AppColors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
