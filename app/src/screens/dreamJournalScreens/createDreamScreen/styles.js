import { StyleSheet } from 'react-native'
import { color } from '../../../theme'

const styles = StyleSheet.create({
  text: {
    color: color.textColor
  },
  headerText: {
    color: color.textColor,
    fontSize: 40,
    fontWeight: 'bold'
  },
  dotContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})

export default styles
