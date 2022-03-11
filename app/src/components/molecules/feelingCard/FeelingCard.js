import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { color } from '../../../theme'

import styles from './styles'

const FeelingCard = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Icon
        reverse
        name='chevron-right'
        type='feather'
        size={20}
        color={color.baseColor}
      />
    </TouchableOpacity>
  )
}

export default FeelingCard
