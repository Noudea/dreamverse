import React from 'react'
import { View } from 'react-native'
import styles from './styles'

function RowList ({ listItems }) {
  return (
    <View style={styles.container}>
      {listItems}
    </View>
  )
}

export default RowList
