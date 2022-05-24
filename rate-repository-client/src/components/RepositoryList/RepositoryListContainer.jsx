import { FlatList, View } from 'react-native'
import theme from '../../theme'
import RepositoryItem from './RepositoryItem'

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const ItemSeparator = () => <View style={theme.itemSeparator} />

  const renderItem = ({ item }) => (
    <RepositoryItem style={theme.itemSeparator} item={item} />
  )

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  )
}

export default RepositoryListContainer
