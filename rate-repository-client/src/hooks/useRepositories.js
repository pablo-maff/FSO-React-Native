import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'
import Text from '../components/Text'

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
