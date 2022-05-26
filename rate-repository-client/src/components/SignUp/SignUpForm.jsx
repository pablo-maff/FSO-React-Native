import { View } from 'react-native'
import theme from '../../theme'
import Button from '../Button'
import FormikTextInput from '../FormikTextInput'

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={theme.container.card}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
      />
      <FormikTextInput
        name='passwordConfirmation'
        placeholder='Password Confirmation'
        secureTextEntry={true}
      />
      <Button type='large' text='Sign Up' onPress={onSubmit} />
    </View>
  )
}

export default SignUpForm
