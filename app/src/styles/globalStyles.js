import { StyleSheet } from 'react-native'
import { color } from '../theme'

const globalStyles = StyleSheet.create({
  screenContainer: {
    padding: 40,
    backgroundColor: color.backgroundColor,
    color: color.textColor,
    height: '100%'
  }
})

export default globalStyles
