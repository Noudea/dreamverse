import { StyleSheet } from 'react-native'
import { color } from '../../../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.baseColor,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: color.textColor,
    fontSize: 24,
    fontWeight: 'bold'
  },
  date: {
    color: color.textColor
  },
  badgeContainer: {
    flexDirection: 'row'
  },
  text: {
    color: color.textColor
  }
})

export default styles
