import { View } from 'react-native'
import Text from './Text'
const ItemStat = ({ num, label }) => {
  const numToThousands = (num) => {
    if (num >= 1000) {
      const k = (num / 1000).toFixed(1)
      return `${k}k`
    }
    return num
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text fontWeight='bold'>{numToThousands(num)}</Text>
      <Text color='textSecondary'>{label}</Text>
    </View>
  )
}

export default ItemStat
