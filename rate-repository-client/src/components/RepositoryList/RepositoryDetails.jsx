import { useParams } from 'react-router-native'
import useRepository from '../../hooks/useRepository'
import Text from '../Text'
import RepositoryItem from './RepositoryItem'

const RepositoryDetails = () => {
  const { id } = useParams()
  const { repository, loading, error } = useRepository(id)

  if (loading) return <Text>...loading</Text>

  return <RepositoryItem item={repository} singleView={true} />
}

export default RepositoryDetails
