import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

function TimeInput ({ onPress, date }) {
  return (
    <Pressable
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          {date}
        </Text>
      </View>
    </Pressable>
  )
}

export default TimeInput
