import { FlatList, View } from 'react-native'
import theme from '../../theme'
import TextInput from '../TextInput'
import RepositoryItem from './RepositoryItem'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'

const RepositoryListHeader = ({
  setOrderedRepositories,
  searchRepo,
  setSearchRepo,
}) => {
  const [selectedOrder, setSelectedOrder] = useState()

  return (
    <>
      <TextInput
        onChangeText={setSearchRepo}
        value={searchRepo}
        placeholder='Search repositories'
        style={{
          backgroundColor: 'white',
          margin: 12,
          padding: 6,
          borderRadius: 6,
          borderWidth: 2,
          borderColor: 'silver',
        }}
      />
      <Picker
        selectedValue={selectedOrder}
        onValueChange={(itemValue, itemIndex) => {
          let orderObj
          if (itemValue === 'higherAvg')
            orderObj = {
              orderBy: 'RATING_AVERAGE',
              orderDirection: 'DESC',
            }
          else if (itemValue === 'lowerAvg')
            orderObj = {
              orderBy: 'RATING_AVERAGE',
              orderDirection: 'ASC',
            }
          else
            orderObj = {
              orderBy: 'CREATED_AT',
              orderDirection: 'DESC',
            }
          setOrderedRepositories(orderObj)
          setSelectedOrder(itemValue)
        }}
        style={{ marginLeft: 12, marginBottom: 12 }}
      >
        <Picker.Item label='Latest repositories' value={'createdLatest'} />
        <Picker.Item label='Highest rated repositories' value={'higherAvg'} />
        <Picker.Item label='Lowest rated repositories' value={'lowerAvg'} />
      </Picker>
    </>
  )
}

// Use a class component to not loose focus on textinput because flatlist will unmount it after each typed letter
export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props
    return (
      <RepositoryListHeader
        setOrderedRepositories={props.setOrderedRepositories}
        searchRepo={props.searchRepo}
        setSearchRepo={props.setSearchRepo}
      />
    )
  }

  render() {
    const props = this.props
    const repositoryNodes = props.repositories
      ? props.repositories.edges.map((edge) => edge.node)
      : []

    const ItemSeparator = () => <View style={theme.itemSeparator} />

    const renderItem = ({ item }) => (
      <RepositoryItem style={theme.itemSeparator} item={item} />
    )

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        ListHeaderComponent={this.renderHeader}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    )
  }
}

export default RepositoryListContainer
