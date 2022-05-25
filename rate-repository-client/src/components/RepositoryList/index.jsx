import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'
import { useDebounce } from 'use-debounce'

const RepositoryList = () => {
  const [orderedRepositories, setOrderedRepositories] = useState()
  const [searchRepo, setSearchRepo] = useState('')
  // Add delay to not perform unnecessary requests while user is typing
  const [searchKeyword] = useDebounce(searchRepo, 500)

  const { repositories, loading, error } = useRepositories(
    orderedRepositories,
    searchKeyword
  )

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderedRepositories={orderedRepositories}
      setOrderedRepositories={setOrderedRepositories}
      searchRepo={searchRepo}
      setSearchRepo={setSearchRepo}
    />
  )
}

export default RepositoryList
