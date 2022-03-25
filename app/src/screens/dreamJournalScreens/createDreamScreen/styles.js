import { StyleSheet } from 'react-native'
import { color } from '../../../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  },
  headerText: {
    fontSize: 40,
    marginBottom: 40,
  },
  dotContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleContainer: {
    marginBottom: 40
  },
  dateContainer: {
    marginBottom: 40
  },
  emoteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  selectedContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedText: {
    fontSize: 30,
    marginLeft: 10,
    textTransform: 'capitalize'
  },
  indicator: {
    backgroundColor: color.backgroundColor,
    width: '100%'
  }

})

export default styles
