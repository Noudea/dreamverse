import React from 'react'
import { View } from 'react-native'
import styles from './styles'

function DreamBadge ({ id, category }) {
  const renderColor = () => {
    if (category === 'nightmare') { return styles.red }
    if (category === 'lucid') { return styles.green }
  }

  return (
    <View style={[styles.container, renderColor()]} key={id} />
  )
}

export default DreamBadge
