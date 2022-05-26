import { useQuery } from '@apollo/client'
import { View, FlatList } from 'react-native'
import { LOGGED_IN_USER } from '../../../graphql/queries'
import theme from '../../../theme'
import ReviewItem from './ReviewItem'
import Text from '../../Text'

const MyReviews = () => {
  const { data, loading } = useQuery(LOGGED_IN_USER, {
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

  const renderItem = ({ item }) => <ReviewItem review={item} myReviews={true} />

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
