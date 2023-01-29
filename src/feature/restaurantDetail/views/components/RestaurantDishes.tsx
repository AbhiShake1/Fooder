import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { urlFor } from '../../../../core/backendClient/sanityClient'
import { AppColors } from '../../../../core/constants'
import { RootNavigatorParamList } from '../../../../core/router/navigator'
import { DishModel } from '../../../home/models'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsById } from '../../slice/basketSlice'

export const RestaurantDishes = () => {
  const { params } = useRoute<RouteProp<RootNavigatorParamList, '/restaurantDetail'>>()

  return (
    <View>
      <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>

      {params.dishes?.map(d => <DishRow key={d._id} _id={d._id} name={d.name} image={d.image} price={d.price} description={d.description} />)}
    </View>
  )
}

const DishRow = (props: DishModel) => {
  const [isPressed, setIsPressed] = useState(false)

  const dispatch = useDispatch()

  const items = useSelector(s => selectBasketItemsById(s, props._id))

  const count = items.length

  function removeItemFromBasket() {
    dispatch(removeFromBasket({ items: props }))
  }

  function addItemToBasket() {
    dispatch(addToBasket(props))
  }

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)} activeOpacity={.8}
        className={`bg-white border-y p-4 border-gray-50 ${isPressed && "border-b-0"}`}
      >
        < View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{props.name}</Text>
            <Text className='to-gray-400'>{props.description}</Text>
            <Text className='text-gray-400 mt-2'>
              रु {props.price}
            </Text>
          </View>

          <View>
            <Image source={{ uri: urlFor(props.image).url() }}
              className='h-20 w-20 bg-gray-300 p-4' style={{ borderWidth: 1, borderColor: AppColors.border }}
            />
          </View>
        </View>
      </TouchableOpacity >

      {
        isPressed && (
          <View className='bg-white px-4'>
            <View className='flex-row items-center space-x-2 pb-3'>
              <TouchableOpacity activeOpacity={.8}>
                <MinusCircleIcon color={count == 0 ? 'gray' : AppColors.primary} size={36} onPress={removeItemFromBasket} disabled={count == 0} />
              </TouchableOpacity>

              <Text>{count}</Text>

              <TouchableOpacity activeOpacity={.8}>
                <PlusCircleIcon color={AppColors.primary} size={36} onPress={addItemToBasket} />
              </TouchableOpacity>

            </View>
          </View>
        )
      }
    </>
  )
}

