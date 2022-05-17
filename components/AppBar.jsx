import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import View from './View'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
})

const AppBar = () => {
  return (
    <View backgroundColor='appBar' style={styles.container}>
      <AppBarTab text={'Repositories'} />
    </View>
  )
}

export default AppBar
