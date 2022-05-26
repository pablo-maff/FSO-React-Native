import { useQuery } from '@apollo/client'
import { LOGGED_IN_USER } from '../graphql/queries'

const useMyReviews = (variables) => {
  const { data, loading, fetchMore, error, refetch, ...result } = useQuery(
    LOGGED_IN_USER,
    {
      variables,
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
      onError: (error) => {
        console.error(error.graphQLErrors[0].message)
      },
    }
  )

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    me: data?.me,
    fetchMore: handleFetchMore,
    loading,
    error,
    refetch,
    ...result,
  }
}

export default useMyReviews
