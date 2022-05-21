import FormikTextInput from './FormikTextInput'
import { View } from 'react-native'
import { Formik } from 'formik'
import theme from '../theme'
import Button from './Button'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
}

const SignIn = ({ onSubmit }) => {
  return (
    <View
      style={{
        backgroundColor: theme.backgroundColors.card,
        padding: 20,
      }}
    >
      <FormikTextInput name='username' placeholder='username' />
      <FormikTextInput
        name='password'
        placeholder='password'
        secureTextEntry={true}
      />
      <Button
        type='large'
        backGround='primary'
        text='Sign In'
        onPress={onSubmit}
      />
    </View>
  )
}

const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'Too short').required('Username is required!'),
  password: yup.string().min(6, 'Too short').required('Password required!'),
})

const SignInHandler = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInHandler
