import { SIGN_IN } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    return mutate({ variables: { credentials: { username, password } } })
  }
  return [signIn, result]
}

export default useSignIn
