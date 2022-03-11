import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { DreamCard } from '../../../components/molecules'
import { useAuth } from '../../../contexts/authContext/AuthContext'
import { customAxios } from '../../../services/api'
import globalStyles from '../../../styles/globalStyles'

function dreamJournalScreen () {
  const [dreamList, setDreamList] = useState([])

  const getUserDreams = async () => {
    try {
      const { data } = await customAxios.get('/api/dreams')
      console.log(data)
      setDreamList(data.dreams)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserDreams()
  }, [])

  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        data={dreamList}
        renderItem={({ item }) => <DreamCard key={item.id} {...item} />}
      />
    </View>
  )
}

export default dreamJournalScreen
