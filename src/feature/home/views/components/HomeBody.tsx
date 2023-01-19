import { title } from 'process'
import React from 'react'
import { ScrollView, TouchableOpacity, View, Text, Image, } from 'react-native'
import { MapPinIcon, ArrowRightIcon, StarIcon } from 'react-native-heroicons/outline'
import { AppColors } from '../../../../core/constants'
import { CategoryCardModel, FeaturedRowModel, RestaurantCardModel } from '../../models'

export const HomeBody = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeCategories />

      <FeaturedRow id='1' title='featured' description='featured desc' />
      <FeaturedRow id='2' title='discounts' description='discount desc' />
      <FeaturedRow id='3' title='for you' description='for you desc' />

    </ScrollView >
  )
}

const HomeCategories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
      paddingHorizontal: 15, paddingTop: 10,
    }}>
      <CategoryCard imageUrl='https://links.papareact.com/gn7' title='testproduct' />
      <CategoryCard imageUrl='https://links.papareact.com/gn7' title='testproduct' />
      <CategoryCard imageUrl='https://links.papareact.com/gn7' title='testproduct' />
      <CategoryCard imageUrl='https://links.papareact.com/gn7' title='testproduct' />
      <CategoryCard imageUrl='https://links.papareact.com/gn7' title='testproduct' />
      <CategoryCard imageUrl='https://links.papareact.com/gn7' title='testproduct' />
    </ScrollView >
  )
}

const CategoryCard = (props: CategoryCardModel) => {
  return (
    <TouchableOpacity activeOpacity={.8} className='relative mx-2'>
      <Image source={{ uri: props.imageUrl }} className='h-24 w-24 rounded-md' />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{props.title}</Text>
    </TouchableOpacity>
  )
}

const FeaturedRow = (props: FeaturedRowModel) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{props.title}</Text>
        <ArrowRightIcon color={AppColors.primary} />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{props.description}</Text>


      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false} className='pt-4' >
        <RestaurantCard id={1} title='momo' imageUrl='https://links.papareact.com/gn7' rating={4.5}
          genre='Nepali' address='Putalisadak, Nepal' short_description='Everest Momo' dishes={[]}
          lat={20} lng={18}
        />
        <RestaurantCard id={1} title='momo' imageUrl='https://links.papareact.com/gn7' rating={4.5}
          genre='Nepali' address='Putalisadak, Nepal' short_description='Everest Momo' dishes={[]}
          lat={20} lng={18}
        />
        <RestaurantCard id={1} title='momo' imageUrl='https://links.papareact.com/gn7' rating={4.5}
          genre='Nepali' address='Putalisadak, Nepal' short_description='Everest Momo' dishes={[]}
          lat={20} lng={18}
        />
        <RestaurantCard id={1} title='momo' imageUrl='https://links.papareact.com/gn7' rating={4.5}
          genre='Nepali' address='Putalisadak, Nepal' short_description='Everest Momo' dishes={[]}
          lat={20} lng={18}
        />
      </ScrollView>
    </View>
  )
}

const RestaurantCard = (props: RestaurantCardModel) => {
  return (
    <TouchableOpacity activeOpacity={.8} className='w-48 bg-white mr-3 shadow rounded-md'>
      <Image source={{ uri: props.imageUrl }} className='h-48 rounded-md' />

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{props.title}</Text>

        <View className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={.5} size={24} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{props.rating}</Text> . {props.genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={.4} size={24} />
          <Text className='text-xs'>Nearby . {props.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

