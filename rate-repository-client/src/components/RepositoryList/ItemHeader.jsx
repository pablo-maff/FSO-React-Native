import { View } from 'react-native'
import theme from '../../theme'
import Text from '../Text'

const ItemHeader = ({ fullName, description, language }) => {
  return (
    <View style={theme.container.header}>
      <Text
        style={theme.container.itemSeparator}
        fontWeight='bold'
        fontSize='subheading'
      >
        {fullName}
      </Text>
      <Text style={theme.container.itemSeparator}>{description}</Text>
      <Text
        color='textDarkBackground'
        style={{
          ...theme.container.itemSeparator,
          ...theme.buttons.smallButton,
        }}
      >
        {language}
      </Text>
    </View>
  )
}

export default ItemHeader
