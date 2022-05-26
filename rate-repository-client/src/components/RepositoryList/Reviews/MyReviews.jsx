import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import { DELETE_REVIEW } from '../../../graphql/mutations'
import ReviewItem from './ReviewItem'
import { View, FlatList, Alert } from 'react-native'
import Text from '../../Text'
import Button from '../../Button'
import theme from '../../../theme'
import useMyReviews from '../../../hooks/useMyReviews'

const MyReviews = () => {
  const navigate = useNavigate()
  const [deleteReview] = useMutation(DELETE_REVIEW)

  const { me, loading, fetchMore, refetch } = useMyReviews({
    first: 6,
    includeReviews: true,
  })

  const onEndReach = () => {
    console.log('end!')
    fetchMore()
  }

  if (loading) {
    return <Text>loading...</Text>
  }

  const parsedReviews = me.reviews.edges.map((r) => r.node)

  const ItemSeparator = () => <View style={theme.itemSeparator} />

  const handleDeleteReview = async (id) => {
    await deleteReview({ variables: { deleteReviewId: id } })
    refetch()
  }

  const createTwoButtonAlert = (id) => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: null,
          style: 'cancel',
        },
        { text: 'OK', onPress: () => handleDeleteReview(id) },
      ]
    )
  }

  const renderItem = ({ item }) => {
    return (
      <View style={theme.container.card}>
        <ReviewItem review={item} myReviews={true} />
        <View
          style={{ ...theme.container.row, justifyContent: 'space-around' }}
        >
          <Button
            type='large'
            text='View Repository'
            style={{ width: '45%' }}
            onPress={() => navigate(`/${item.repository.id}`)}
          />
          <Button
            type='large'
            text='Delete Review'
            style={{ backgroundColor: 'red', width: '45%' }}
            onPress={() => createTwoButtonAlert(item.id)}
          />
        </View>
      </View>
    )
  }

  return (
    <FlatList
      data={parsedReviews}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default MyReviews
