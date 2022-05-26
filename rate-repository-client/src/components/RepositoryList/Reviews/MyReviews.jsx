import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import { LOGGED_IN_USER } from '../../../graphql/queries'
import { DELETE_REVIEW } from '../../../graphql/mutations'
import ReviewItem from './ReviewItem'
import { View, FlatList, Alert } from 'react-native'
import Text from '../../Text'
import Button from '../../Button'
import theme from '../../../theme'

const MyReviews = () => {
  const navigate = useNavigate()
  const [deleteReview] = useMutation(DELETE_REVIEW)
  const { data, loading, refetch } = useQuery(LOGGED_IN_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      console.error(error.graphQLErrors[0].message)
    },
  })

  if (loading) {
    return <Text>loading...</Text>
  }

  const reviews = data?.me.reviews.edges.map((r) => r.node)

  const ItemSeparator = () => <View style={theme.itemSeparator} />

  const handleDeleteReview = (id) => {
    deleteReview({ variables: { deleteReviewId: id } })
    refetch()
  }

  const createTwoButtonAlert = (id) => {
    // const deleteConfirmation = () => {
    //   handleDeleteReview(id)
    // }

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
    console.log('review', item)
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
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      // onEndReached={onEndReach}
      // onEndReachedThreshold={0.5}
    />
  )
}

export default MyReviews
