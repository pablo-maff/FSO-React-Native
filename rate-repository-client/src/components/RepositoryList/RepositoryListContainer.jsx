import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const ItemSeparator = () => <View style={styles.separator} />

  const renderItem = ({ item }) => (
    <RepositoryItem style={styles.separator} item={item} />
  )

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      style={styles}
    />
  )
}

export default RepositoryListContainer
