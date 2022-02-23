import React from 'react'
import { ScrollView } from 'react-native'
import styles from './styles'

function ColumnList ({ listItems }) {
  return (
    <ScrollView style={styles.container}>
      {listItems}
    </ScrollView>
  )
}

export default ColumnList
