import FormikTextInput from './FormikTextInput'
import { Pressable, View } from 'react-native'
import { Formik } from 'formik'
import Text from './Text'
import theme from '../theme'
import Button from './Button'

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

const SignInHandler = () => {
  const onSubmit = (values) => {
    const username = values.username
    const password = values.password

    console.log(`username: ${username}, password: ${password}`)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInHandler
