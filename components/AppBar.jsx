import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { View } from 'react-native'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.appBar,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 100,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text={'Repositories'} path={'/'} />
      <AppBarTab text={'Sign In'} path={'/login'} />
    </View>
  )
}

export default AppBar
