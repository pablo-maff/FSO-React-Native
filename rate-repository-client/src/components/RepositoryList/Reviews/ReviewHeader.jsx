import { View } from 'react-native'
import Text from '../../Text'
import { format, parseISO } from 'date-fns'
import theme from '../../../theme'

const ReviewHeader = ({ userName, date }) => {
  date = format(parseISO(date), 'dd/MM/yyyy')

  return (
    <View style={theme.container.header}>
      <Text fontWeight='bold' fontSize='subheading'>
        {userName}
      </Text>
      <Text color='textSecondary'>{date}</Text>
    </View>
  )
}

export default ReviewHeader
