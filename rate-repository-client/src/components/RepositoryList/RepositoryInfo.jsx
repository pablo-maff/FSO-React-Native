import Button from '../Button'
import RepositoryItem from './RepositoryItem'
import * as Linking from 'expo-linking'
import { View } from 'react-native'
import theme from '../../theme'

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={theme.container.card}>
      <RepositoryItem item={repository} />
      <Button
        type='large'
        backGround='primary'
        text='Open in Github'
        onPress={() => Linking.openURL(repository.url)}
      />
    </View>
  )
}

export default RepositoryInfo
