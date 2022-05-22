import { SIGN_IN } from '../graphql/mutations'
import { useApolloClient, useMutation } from '@apollo/client'
import useAuthStorage from './useAuthStorage'
import { useNavigate } from 'react-router-native'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    })

    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
    navigate('/')

    return { data }
  }

  return [signIn, result]
}

export default useSignIn
