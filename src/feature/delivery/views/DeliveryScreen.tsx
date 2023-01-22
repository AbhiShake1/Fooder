import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, SafeAreaView, TouchableOpacity, View, Linking, Button, TouchableHighlight } from 'react-native';
import { HomeIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import { AppColors } from '../../../core/constants';
import { RootNavigatorParamList } from '../../../core/router/navigator';
import { selectRestaurant } from '../../restaurantDetail/slice/restaurantSlice';
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps';
import { RestaurantCardModel } from '../../home/models';
// import { Container } from './styles';

export default function DeliveryScreen() {
  const navigation = useNavigation<StackNavigationProp<RootNavigatorParamList, '/home'>>()
  const restaurant: RestaurantCardModel = useSelector(selectRestaurant)

  return (
    <View className='flex-1' style={{ backgroundColor: AppColors.primary }}>
      <SafeAreaView>
        <View className={'flex-row justify-between items-center p-5'}>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <HomeIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className={'font-light text-white text-lg'}>Order Help</Text>
        </View>

        <View className={'bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'}>
          <View className={'flex-row justify-between items-center'}>
            <View>
              <Text className={'text-lg text-gray-400'}>Estimated Arrival</Text>
              <Text className={'text-4xl font-bold'}>20-25 Min</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className={'w-20 h-20'}
            />
          </View>
          <Progress.Bar
            // className='h-32 w-32 mt-1'
            color={AppColors.primary}
            indeterminate={true}
          />

          <Text className={'mt-3 text-gray-500'}>
            Your Order at {restaurant.name} is being prepared
          </Text>
        </View>
      </SafeAreaView >

      <MapView
        initialRegion={{
          latitude: restaurant.lat ?? 0,
          longitude: restaurant.lng ?? 0,
          latitudeDelta: .005,
          longitudeDelta: .005,
        }}
        className={`flex-1 -mt-10 z-0`}
        mapType='hybrid'
      >
        <Marker coordinate={{ latitude: restaurant.lat ?? 0, longitude: restaurant.lng ?? 0 }} title={restaurant.name}
          description={restaurant?.short_description} pinColor={AppColors.primary} />
      </MapView>

      <SafeAreaView className={`bg-white flex-row items-center h-28`}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/EGIeHV4WoAA_qE6.jpg",
          }}
          className={`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5`}
        />
        <View className={`flex-1`}>
          <Text className={`text-lg`}>Abhi</Text>
          <Text className={`text-gray-400`}>Your Rider</Text>
        </View>
        <TouchableOpacity activeOpacity={.8} style={{ backgroundColor: AppColors.primary }} className='px-4 py-1 rounded-md mx-4'>
          <Text className='text-white text-lg font-semibold'>Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View >
  );
}
