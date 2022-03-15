import { StyleSheet } from 'react-native'
import { color } from '../../../theme'

const styles = StyleSheet.create({
  text: {
    color: color.textColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 18
  },
  headerText: {
    color: color.textColor,
    fontSize: 40,
    marginBottom: 40,
    fontFamily: 'Poppins-Bold'
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
    color: color.textColor,
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    marginLeft: 10,
    textTransform: 'capitalize'
  },
  indicator: {
    backgroundColor: color.backgroundColor,
    width: '100%'
  }

})

export default styles
