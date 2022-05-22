import { View } from 'react-native'
import numToThousands from '../../utils/numToThousands'
import Text from '../Text'
const ItemStat = ({ num, text, testID, accessibilityLabel }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text
        fontWeight='bold'
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      >
        {numToThousands(num)}
      </Text>
      <Text color='textSecondary'>{text}</Text>
    </View>
  )
}

export default ItemStat
