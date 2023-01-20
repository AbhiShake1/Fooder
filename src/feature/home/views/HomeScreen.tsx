import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeBody } from './components/HomeBody'
import { HomeHeader } from './components/HomeHeader'

export const HomeScreen = () => {
  return (
    <View >
      <SafeAreaView />
      <HomeHeader />

      <HomeBody />
    </View>
  )
}
