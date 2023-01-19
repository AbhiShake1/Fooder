import React from 'react'
import { View, Image, Text, TextInput, } from 'react-native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import { AppColors } from '../../../../core/constants'

export const HomeHeader = () => {
  return (
    <View className='bg-white px-1 py-2'>
      <HomeMainHeader />
      <HomeSearch />
    </View>
  )
}

const HomeMainHeader = () => {
  return (
    <View className='flex-row pb-2 items-center mx-4 space-x-2'>
      <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
      <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
        <Text className='font-bold text-xl'>
          Current Location
          <ChevronDownIcon color='gray' size={16} style={{ paddingTop: 4 }} />
        </Text>
      </View>
      <UserIcon size={28} color={AppColors.primary} />
    </View>
  )
}

const HomeSearch = () => {
  return (
    <View className='flex-row items-center space-x-2 pb-2 mx-4'>
      <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-md'>
        <MagnifyingGlassIcon color='gray' />
        <TextInput placeholder='Restaurants & cuisines' />
      </View>
      <AdjustmentsVerticalIcon color={AppColors.primary} />
    </View>
  )
}


