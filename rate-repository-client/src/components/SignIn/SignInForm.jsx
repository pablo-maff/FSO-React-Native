import { View } from 'react-native'
import theme from '../../theme'
import Button from '../Button'
import FormikTextInput from '../FormikTextInput'

const SignInForm = ({ onSubmit }) => {
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

export default SignInForm
