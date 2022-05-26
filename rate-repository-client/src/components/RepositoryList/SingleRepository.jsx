import { FlatList, View } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../../hooks/useRepository'
import theme from '../../theme'
import Text from '../Text'
import RepositoryInfo from './RepositoryInfo'
import ReviewItem from './Reviews/ReviewItem'

const SingleRepository = () => {
  const { id } = useParams()
  const { repository, loading, error, fetchMore } = useRepository({
    first: 8,
    repositoryId: id,
  })

  if (loading) {
    return <Text>...loading</Text>
  }

  const onEndReach = () => {
    fetchMore()
  }

  const reviews = repository?.reviews.edges.map((r) => r.node)

  const ItemSeparator = () => <View style={theme.itemSeparator} />

  const renderItem = ({ item }) => <ReviewItem review={item} />

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ListHeaderComponentStyle={theme.itemSeparator}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository
