import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Emote } from '../../atomes/emotes'

import styles from './styles'

const FeelingCard = ({ text, onPress, emote }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Emote size='medium' name={emote} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default FeelingCard
