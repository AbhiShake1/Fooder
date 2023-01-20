import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { ScrollView, TouchableOpacity, View, Text, Image, ActivityIndicator, } from 'react-native'
import { MapPinIcon, ArrowRightIcon, StarIcon } from 'react-native-heroicons/outline'
import { useQuery } from 'react-query'
import { urlFor } from '../../../../core/backendClient/sanityClient'
import { AppColors } from '../../../../core/constants'
import { RootNavigatorParamList } from '../../../../core/router/navigator'
import { restaurantDetailRoute } from '../../../../core/router/routePath'
import { RestaurantDetailScreen } from '../../../../feature/restaurantDetail/views/RestaurantDetailScreen'
import { CategoryCardModel, FeaturedRowModel, RestaurantCardModel } from '../../models'
import { getAllCategories, getFeaturedCategories } from '../../repo/homeRepo'

export const HomeBody = () => {
  const { isLoading, error, data } = useQuery('fetch_featurerd_row_key', getFeaturedCategories)

  if (isLoading || error) {
    return (
      <View className='text-center justify-center flex-1'>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeCategories />

      {data?.map(r => <FeaturedRow _id={r._id} key={r._id} short_description={r.short_description}
        restaurants={r.restaurants} name={r.name} />)}
    </ScrollView >
  )
}

const HomeCategories = () => {
  const { isLoading, error, data } = useQuery('fetch_all_cat_key', getAllCategories)

  if (isLoading || error) {
    return (
      <View className='text-center justify-center flex-1'>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
      paddingHorizontal: 16, paddingTop: 8,
    }}>
      {data?.map(d => <CategoryCard key={d._id} _id={d._id} image={d.image} name={d.name} />
      )}
    </ScrollView >
  )
}

const CategoryCard = (props: CategoryCardModel) => {
  return (
    <TouchableOpacity activeOpacity={.8} className='relative mx-2'>
      {<Image source={{ uri: urlFor(props.image).url() }} className='h-24 w-24 rounded-md' />}
      < Text className='absolute bottom-1 left-1 text-white font-bold'>{props.name}</Text>
    </TouchableOpacity >
  )
}

const FeaturedRow = (props: FeaturedRowModel) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{props.name}</Text>
        <ArrowRightIcon color={AppColors.primary} />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{props.short_description}</Text>

      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false} className='pt-4' >

        {props.restaurants?.map(r => <RestaurantCard _id={r._id} key={r._id} name={r.name} image={r.image}
          rating={r.rating} genre={r.genre} address={r.address} short_description={r.short_description} dishes={r.dishes}
          lat={20} lng={18}
        />
        )}
      </ScrollView>
    </View>
  )
}

const RestaurantCard = (props: RestaurantCardModel) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList, '/restaurantDetail'>>()

  function pushToDetail() {
    navigation.navigate(restaurantDetailRoute, props)
  }

  return (
    <TouchableOpacity onPress={pushToDetail}
      activeOpacity={.8} className='w-48 bg-white mr-3 shadow rounded-md'>
      <Image source={{ uri: urlFor(props.image).url() }} className='h-48 rounded-md' />

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{props.name}</Text>

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

