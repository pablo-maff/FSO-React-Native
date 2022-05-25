import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (selectedOrder) => {
  if (selectedOrder === 'higherAvg')
    selectedOrder = {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    }
  else if (selectedOrder === 'lowerAvg')
    selectedOrder = {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    }
  else
    selectedOrder = {
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC',
    }

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables: selectedOrder,
    fetchPolicy: 'cache-and-network',
  })

  return {
    repositories: data?.repositories,
    loading: loading,
    error: error,
  }
}

export default useRepositories
