import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Emote } from '../../emotes'
import styles from './styles'

function EmoteButton ({ onPress, emote, isSelected }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, isSelected ? styles.isSelected : null]}>
      <Emote size='large' name={emote} />
    </TouchableOpacity>
  )
}

export default EmoteButton
