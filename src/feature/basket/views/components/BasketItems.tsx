import React, { useMemo, useState } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { urlFor } from '../../../../core/backendClient/sanityClient';
import { AppColors } from '../../../../core/constants';
import { DishModel } from '../../../home/models';
import { removeFromBasket, selectBasketItems } from '../../../restaurantDetail/slice/basketSlice';
import { GroupedItemsModel } from '../../models';

// import { Container } from './styles';

export default function BasketItems() {
  const item = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<GroupedItemsModel<DishModel[]>>({})

  useMemo(() => {
    const groupedItems = item.reduce((results: GroupedItemsModel<DishModel[]>, item) => {
      (results[item._id] = results[item._id] || []).push(item)
      return results
    }, {})
    setGroupedItemsInBasket(groupedItems)
  }, [item])

  return (
    <ScrollView>
      {Object.entries(groupedItemsInBasket).map(([key, items]) => <BasketItem key={key} {...{ items }} />)}
    </ScrollView>
  );
}

function BasketItem(props: { items: DishModel[] }) {
  const dispatch = useDispatch()

  return (
    <View className='flex-row items-center space-x-3 bg-white py-2 px-5 border-b border-gray-100'>
      <Text>{props.items.length} x</Text>
      <Image source={{ uri: urlFor(props.items[0]?.image).url() }} className='h-12 w-12 rounded-full' />
      <Text className='flex-1'>{props.items[0]?.name}</Text>
      <Text className='text-gray-600'>Rs. {props.items[0]?.price}</Text>

      <TouchableOpacity>
        <Text style={{ color: AppColors.primary }} className='text-xs'
          onPress={() => dispatch(removeFromBasket({ items: props.items[0] }))} >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  )
}

