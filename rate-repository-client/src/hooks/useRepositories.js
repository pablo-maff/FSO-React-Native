import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  return {
    repositories: data?.repositories,
    loading: loading,
    error: error,
  }
}

export default useRepositories
