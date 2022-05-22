import useSignIn from '../../hooks/useSignIn'
import SignIn from './SignIn'

const SignInHandler = () => {
  const [signIn] = useSignIn()

  return <SignIn onSubmit={signIn} />
}

export default SignInHandler
