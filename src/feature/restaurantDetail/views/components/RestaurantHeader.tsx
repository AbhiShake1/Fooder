import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../../../../core/backendClient/sanityClient'
import { AppColors } from '../../../../core/constants'
import { RootNavigatorParamList } from '../../../../core/router/navigator'

export const RestaurantHeader = () => {
  const navigation = useNavigation()
  const { params } = useRoute<RouteProp<RootNavigatorParamList, '/restaurantDetail'>>()

  return (
    <View className='relative'>
      <Image source={{ uri: urlFor(params.image).url() }} className='w-full h-56 bg-gray-300 p-4' />
      <TouchableOpacity activeOpacity={.8} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
        onPress={navigation.goBack}>
        <ArrowLeftIcon size={18} color={AppColors.primary} />
      </TouchableOpacity>
    </View>
  )
}
