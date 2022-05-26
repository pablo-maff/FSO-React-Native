import { Route, Routes, Navigate } from 'react-router-native'
import { View, StyleSheet } from 'react-native'

import AppBar from './Appbar'
import RepositoryList from './RepositoryList'
import theme from '../theme'
import SignInHandler from './SignIn'
import SingleRepository from './RepositoryList/SingleRepository'
import SignUpHandler from './SignUp'
import CreateReviewHandler from './RepositoryList/Reviews'
import MyReviews from './RepositoryList/Reviews/MyReviews'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backgroundColors.primary,
  },
})

const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path='/' element={<RepositoryList />} exact />
          <Route path='/login' element={<SignInHandler />} exact />
          <Route path='/:id' element={<SingleRepository />} exact />
          <Route path='/review' element={<CreateReviewHandler />} exact />
          <Route path='/signup' element={<SignUpHandler />} exact />
          <Route path='/myReviews' element={<MyReviews />} exact />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </View>
    </>
  )
}

export default Main
