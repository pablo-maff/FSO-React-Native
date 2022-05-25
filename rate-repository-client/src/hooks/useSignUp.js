import { SIGN_UP } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import useSignIn from './useSignIn'

const useSignUp = () => {
  const navigate = useNavigate()
  const [signIn] = useSignIn()
  const [mutate, result] = useMutation(SIGN_UP)

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { user: { username, password } },
    })

    await signIn({ username, password })
    navigate('/')

    return { data }
  }

  return [signUp, result]
}

export default useSignUp
