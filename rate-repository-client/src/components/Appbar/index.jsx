import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { View } from 'react-native'
import AppBarTab from './AppBarTab'
import theme from '../../theme'
import { ScrollView } from 'react-native'
import { useApolloClient, useQuery } from '@apollo/client'
import { LOGGED_IN_USER } from '../../graphql/queries'
import useAuthStorage from '../../hooks/useAuthStorage'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.appBar,
    paddingTop: Constants.statusBarHeight + 30,
    paddingBottom: 15,
  },
})

const AppBar = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const { data } = useQuery(LOGGED_IN_USER, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message)
    },
  })

  const loggedInUser = data?.me

  const handleLogout = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
        <AppBarTab text={'Repositories'} path={'/'} />
        {!loggedInUser ? (
          <AppBarTab text={'Sign In'} path={'/login'} />
        ) : (
          <>
            <AppBarTab text={'Create a review'} path={'/review'} />
            <AppBarTab
              text={'Sign Out'}
              path={'/login'}
              onPress={handleLogout}
            />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
