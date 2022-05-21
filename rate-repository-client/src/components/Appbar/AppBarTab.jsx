import Text from '../Text'
import { Link } from 'react-router-native'

const AppBarTab = ({ text, path, onPress }) => (
  <Link to={path} style={{ padding: 5, marginRight: 15 }} onPress={onPress}>
    <Text fontWeight='bold' color='textDarkBackground' fontSize='subHeading'>
      {text}
    </Text>
  </Link>
)

export default AppBarTab
