import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { AppColors } from '../../../core/constants'
import BasketHeader from './components/BasketHeader'
import BasketFooter from './components/BasketFooter'
import BasketItems from './components/BasketItems'

export default function BasketScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 bg-gray-100'>
        <BasketHeader />

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 rounded-full' />
          <Text className='text-lg font-bold text-left flex-1'>Deliver in 15-25 min</Text>

          <TouchableOpacity><Text style={{ color: AppColors.primary }}>Change</Text></TouchableOpacity>
        </View>

        <BasketItems />
        <BasketFooter />
      </View>
    </SafeAreaView>
  )
}
