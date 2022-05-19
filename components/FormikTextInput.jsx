import { StyleSheet, View } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    marginBottom: 10,
    color: '#d73a4a',
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
  const style = [
    styles.inputFields,
    showError && { ...styles.inputFields, borderColor: styles.errorText.color },
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
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  )
}

export default FormikTextInput
