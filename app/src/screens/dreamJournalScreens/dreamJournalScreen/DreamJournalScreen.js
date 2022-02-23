import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { DreamCard } from '../../../components/molecules'
import { useAuth } from '../../../contexts/authContext/AuthContext'
import globalStyles from '../../../styles/globalStyles'

function dreamJournalScreen () {
  const [dreamList, setDreamList] = useState([])

  const { state } = useAuth()

  const getUserDreams = async () => {
    try {
      const config = {
        headers: { Authorization: 'Bearer ' + state.token }
      }
      const { data } = await axios.get('http://10.0.2.2:1337/api/dreams/', config)
      console.log(data.data)
      setDreamList(data.data)
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
