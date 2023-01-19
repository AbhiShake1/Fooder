import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeBody } from './components/HomeBody'
import { HomeHeader } from './components/HomeHeader'

export const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <View >
      <SafeAreaView />
      <HomeHeader />

      <HomeBody />
    </View>
  )
}
