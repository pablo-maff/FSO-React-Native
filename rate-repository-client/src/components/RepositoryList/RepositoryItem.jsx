import { Pressable, StyleSheet, Image, View } from 'react-native'
import theme from '../../theme'
import ItemHeader from './ItemHeader'
import ItemStat from './ItemStat'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  statsItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

const RepositoryItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <View accessibilityLabel='repository-item' style={theme.container.card}>
      <Pressable onPress={() => navigate(`/${item.id}`)}>
        <View style={{ ...theme.container.row }}>
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
          <ItemStat
            num={item.stargazersCount}
            text={'Stars'}
            accessibilityLabel='stars-count'
          />
          <ItemStat
            num={item.forksCount}
            text={'Forks'}
            accessibilityLabel='forks-count'
          />
          <ItemStat
            num={item.reviewCount}
            text={'Reviews'}
            accessibilityLabel='review-count'
          />
          <ItemStat
            num={item.ratingAverage}
            text={'Rating'}
            accessibilityLabel='rating-average'
          />
        </View>
      </Pressable>
    </View>
  )
}

export default RepositoryItem
