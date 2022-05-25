import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'
import { Picker } from '@react-native-picker/picker'

const RepositoryList = () => {
  const [orderedRepositories, setOrderedRepositories] = useState()
  const { repositories, loading, error } = useRepositories(orderedRepositories)

  return (
    <>
      <Picker
        selectedValue={orderedRepositories}
        onValueChange={(itemValue, itemIndex) =>
          setOrderedRepositories(itemValue)
        }
      >
        <Picker.Item label='Latest repositories' value={'createdLatest'} />
        <Picker.Item label='Highest rated repositories' value={'higherAvg'} />
        <Picker.Item label='Lowest rated repositories' value={'lowerAvg'} />
      </Picker>
      <RepositoryListContainer repositories={repositories} />
    </>
  )
}

export default RepositoryList
