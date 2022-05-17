import { Pressable } from 'react-native'
import Text from './Text'

const AppBarTab = ({ text }) => (
  <Pressable onPress={() => console.log('pressed')}>
    <Text
      fontWeight='bold'
      style={{ fontSize: 24, color: 'white', padding: 20 }}
    >
      {text}
    </Text>
  </Pressable>
)

export default AppBarTab
