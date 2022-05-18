import Text from './Text'
import { Link } from 'react-router-native'

const AppBarTab = ({ text, path }) => (
  <Link to={path}>
    <Text fontWeight='bold' color='textDarkBackground' fontSize='subHeading'>
      {text}
    </Text>
  </Link>
)

export default AppBarTab
