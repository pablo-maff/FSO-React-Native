import { View } from 'react-native'
import Text from '../../Text'
import { format, parseISO } from 'date-fns'
import theme from '../../../theme'

const ReviewHeader = ({ title, date }) => {
  date = format(parseISO(date), 'dd/MM/yyyy')

  return (
    <View style={theme.container.header}>
      <Text fontWeight='bold' fontSize='subheading'>
        {title}
      </Text>
      <Text color='textSecondary'>{date}</Text>
    </View>
  )
}

export default ReviewHeader
