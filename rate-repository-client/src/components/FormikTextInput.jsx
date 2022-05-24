import { View } from 'react-native'
import { useField } from 'formik'
import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error
  const style = [
    theme.forms.inputFields,
    showError && {
      ...theme.forms.inputFields,
      borderColor: theme.forms.errorText.color,
    },
  ]

  return (
    <View>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={style}
        {...props}
      />
      {showError && <Text style={theme.forms.errorText}>{meta.error}</Text>}
    </View>
  )
}

export default FormikTextInput
