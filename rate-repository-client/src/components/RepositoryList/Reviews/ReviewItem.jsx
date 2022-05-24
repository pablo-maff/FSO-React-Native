import { View, StyleSheet } from 'react-native'
import theme from '../../../theme'
import Text from '../../Text'
import ReviewHeader from './ReviewHeader'

const styles = StyleSheet.create({
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ReviewItem = ({ review }) => {
  return (
    <View style={theme.container.card}>
      <View style={theme.container.row}>
        <View style={styles.ratingContainer}>
          <Text color='primary' fontWeight='bold' fontSize='subheading'>
            {review.rating}
          </Text>
        </View>
        <ReviewHeader userName={review.user.username} date={review.createdAt} />
      </View>
      <View style={theme.container.row}>
        <Text style={{ marginLeft: 68 }}>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem
