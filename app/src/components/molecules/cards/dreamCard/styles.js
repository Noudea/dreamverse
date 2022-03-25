import { StyleSheet } from 'react-native'
import { color } from '../../../../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.baseColor,
    padding: 16,
    borderRadius: 16,
    marginBottom: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    textTransform: 'capitalize'
  },
  date: {
    color: color.textColor
  },
  emoteContainer: {
    flexDirection: 'row'
  },
  text: {
    color: color.textColor
  }
})

export default styles
