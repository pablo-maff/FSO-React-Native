import useSignUp from '../../hooks/useSignUp'
import SignUp from './SignUp'

const SignUpHandler = () => {
  const [signUp] = useSignUp()

  return <SignUp onSubmit={signUp} />
}

export default SignUpHandler
