import { StyleSheet, View } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  inputFields: {
    borderColor: 'silver',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 9,
    marginTop: 6,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <View style={styles.inputFields}>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  )
}

export default FormikTextInput
