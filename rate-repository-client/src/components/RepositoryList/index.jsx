import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories()

  return <RepositoryListContainer repositories={repositories} />
}

export default RepositoryList
