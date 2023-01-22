import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { AppColors } from '../../../../core/constants';
import { RootNavigatorParamList } from '../../../../core/router/navigator';
import { preparingOrderRoute } from '../../../../core/router/routePath';
import { selectBasketTotal } from '../../../restaurantDetail/slice/basketSlice';

// import { Container } from './styles';

export default function BasketFooter() {
  const basketTotal = useSelector(selectBasketTotal)
  const navigation = useNavigation<StackNavigationProp<RootNavigatorParamList, '/preparing'>>()

  return (
    <View className='p-5 bg-white space-y-4 align-bottom'>
      <View className='flex-row justify-between'>
        <Text className='text-gray-400'>Subtotal</Text>
        <Text className='text-gray-400'>Rs. {basketTotal}</Text>
      </View>

      <View className='flex-row justify-between'>
        <Text className='text-gray-400'>Delivery Fee</Text>
        <Text className='text-gray-400'>Rs. 50</Text>
      </View>

      <View className='flex-row justify-between'>
        <Text>Order Total</Text>
        <Text className='font-extrabold'>Rs. {basketTotal + 50}</Text>
      </View>

      <TouchableOpacity activeOpacity={.8} onPress={() => navigation.replace(preparingOrderRoute)} className='rounded-lg p-4' style={{ backgroundColor: AppColors.primary }}>
        <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}
