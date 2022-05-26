import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'
import { useDebounce } from 'use-debounce'

const RepositoryList = () => {
  const [orderedRepositories, setOrderedRepositories] = useState()
  const [searchRepo, setSearchRepo] = useState('')
  // Add delay to not perform unnecessary requests while user is typing
  const [searchKeyword] = useDebounce(searchRepo, 500)

  const variables = { ...orderedRepositories, searchKeyword }
  const { repositories, fetchMore } = useRepositories({
    first: 8,
    ...variables,
  })

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderedRepositories={setOrderedRepositories}
      searchRepo={searchRepo}
      setSearchRepo={setSearchRepo}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
