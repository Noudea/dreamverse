import React from 'react'
import { ScrollView } from 'react-native'
import { DreamCalendar, DreamCard } from '../../../components/molecules'
import ColumnList from '../../../components/templates/lists/columnList/ColumnList'
import globalStyles from '../../../styles/globalStyles'

function DreamSearchScreen () {
  const dreams = [
    { id: 1, title: '1 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 2, title: '2 dream', content: 'lorem dsqdqs', category: ['nightmare'] },
    { id: 3, title: '3 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 4, title: '4 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 5, title: '5 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 6, title: '6 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 7, title: '7 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 8, title: '8 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 9, title: '9 dream', content: 'lorem dsqdqs', category: ['lucid'] },
    { id: 10, title: '10 dream', content: 'lorem dsqdqs', category: ['lucid'] }
  ]

  return (
    <ScrollView style={[globalStyles.screenContainer, { flex: 1 }]}>
      <DreamCalendar />
      {/* <FlatList
        data={dreams}
        renderItem={({ item }) => <DreamCard key={item.id} {...item} />}
      /> */}
      <ColumnList listItems={dreams.map(dream => <DreamCard key={dream.id} {...dream} />)} />
    </ScrollView>
  )
}

export default DreamSearchScreen
