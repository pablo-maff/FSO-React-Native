import { View } from 'react-native'
import theme from '../../../theme'
import Button from '../../Button'
import FormikTextInput from '../../FormikTextInput'

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={theme.container.card}>
      <FormikTextInput name='ownerName' placeholder="Repository's owner name" />
      <FormikTextInput name='repositoryName' placeholder="Repository's name" />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline />
      <Button
        type='large'
        backGround='primary'
        text='Create a review'
        onPress={onSubmit}
      />
    </View>
  )
}

export default ReviewForm
