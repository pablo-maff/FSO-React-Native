import { View } from 'react-native'
import theme from '../../theme'
import Button from '../Button'
import FormikTextInput from '../FormikTextInput'

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={theme.container.card}>
      <FormikTextInput name='username' placeholder='username' />
      <FormikTextInput
        name='password'
        placeholder='password'
        secureTextEntry={true}
      />
      <Button type='large' text='Sign In' onPress={onSubmit} />
    </View>
  )
}

export default SignInForm
