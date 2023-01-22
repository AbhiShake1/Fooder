import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import { AppColors } from '../../../../core/constants';
import { selectRestaurant } from '../../../restaurantDetail/slice/restaurantSlice';

// import { Container } from './styles';

export default function BasketHeader() {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)

  return (
    <View className='bg-white border-gray-100 p-3 flex-row justify-center'>
      <View>
        <Text className='text-lg font-bold text-center'>Basket</Text>
        <Text className='text-center text-gray-400'>{restaurant.name}</Text>
      </View>

      <TouchableOpacity onPress={navigation.goBack}
        className='rounded-full right-5 absolute top-3'>
        <XCircleIcon color={AppColors.primary} size={50} />
      </TouchableOpacity>
    </View>
  );
}
