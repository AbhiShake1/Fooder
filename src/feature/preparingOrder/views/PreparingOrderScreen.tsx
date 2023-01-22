import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { AppColors } from '../../../core/constants';
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigatorParamList } from '../../../core/router/navigator';
import { deliveryRoute } from '../../../core/router/routePath';
// import { Container } from './styles';

export default function PreparingOrderScreen() {
  const navigation = useNavigation<StackNavigationProp<RootNavigatorParamList, '/delivery'>>()

  useEffect(() => {
    setTimeout(() => { navigation.replace(deliveryRoute) }, 4000)
  })

  return (
    <SafeAreaView className='flex-1 justify-center items-center' style={{ backgroundColor: AppColors.primary }}>
      <Animatable.Image className='h-96 w-full' animation='slideInUp'
        iterationCount={1} source={require('../../../../assets/order_placing.gif')}
      />

      <Animatable.Text animation='slideInUp' iterationCount={1} className='text-lg text-white my-10 font-bold text-center' >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.CircleSnail indeterminate={true} color='white' />
    </SafeAreaView>
  );
}
