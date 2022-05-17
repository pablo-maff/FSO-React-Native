import { StyleSheet } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import View from './View'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <RepositoryList />
      </View>
    </>
  )
}

export default Main
