import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { View } from 'react-native'
import AppBarTab from './AppBarTab'
import theme from '../../theme'
import { ScrollView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.appBar,
    paddingTop: Constants.statusBarHeight + 30,
    paddingBottom: 15,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
        <AppBarTab text={'Repositories'} path={'/'} />
        <AppBarTab text={'Sign In'} path={'/login'} />
      </ScrollView>
    </View>
  )
}

export default AppBar