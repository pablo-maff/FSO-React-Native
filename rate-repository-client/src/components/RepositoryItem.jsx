import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import theme from '../theme'
import ItemHeader from './ItemHeader'
import ItemStat from './ItemStat'

const styles = StyleSheet.create({
  flexContainer: {
    padding: 5,
    backgroundColor: theme.backgroundColors.card,
  },
  headerItems: {
    flexDirection: 'row',
  },
  statsItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 8,
    marginTop: 12,
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.headerItems}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={theme.images.profileImage}
        />
        <ItemHeader
          fullName={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>
      <View style={styles.statsItems}>
        <ItemStat num={item.stargazersCount} label={'Stars'} />
        <ItemStat num={item.forksCount} label={'Forks'} />
        <ItemStat num={item.reviewCount} label={'Reviews'} />
        <ItemStat num={item.ratingAverage} label={'Rating'} />
      </View>
    </View>
  )
}

export default RepositoryItem
