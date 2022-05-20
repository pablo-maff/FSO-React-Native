import { View, StyleSheet } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  header: {
    flexShrink: 1,
  },
  items: {
    paddingVertical: 3,
  },
  language: {
    paddingHorizontal: 5,
    alignSelf: 'flex-start',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
})

const ItemHeader = ({ fullName, description, language }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.items} fontWeight='bold' fontSize='subheading'>
        {fullName}
      </Text>
      <Text style={{ ...styles.items, marginBottom: 5 }}>{description}</Text>
      <Text
        color='textDarkBackground'
        style={{ ...styles.items, ...styles.language }}
      >
        {language}
      </Text>
    </View>
  )
}

export default ItemHeader
