import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const LineInput = ({ value, placeholder, onChangeText, multiline, onFocus, onBlur }) => {
  return (
    <TextInput
      onBlur={onBlur}
      onFocus={onFocus}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor='#454960'
      multiline={multiline}
    />
  )
}

export default LineInput
