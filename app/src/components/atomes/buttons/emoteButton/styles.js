import { StyleSheet } from 'react-native'
import { color } from '../../../../theme'

const styles = StyleSheet.create({
  container: {
    height: 66,
    width: 66,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  isSelected: {
    backgroundColor: color.baseColor
  }
})

export default styles
