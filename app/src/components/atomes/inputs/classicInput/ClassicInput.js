import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const ClassicInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />

  )
}

export default ClassicInput
