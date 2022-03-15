import { Dimensions, StyleSheet } from 'react-native'
import { color } from '../theme'
const ScreenHeight = Dimensions.get('window').height
const ScreenWidth = Dimensions.get('window').width
const globalStyles = StyleSheet.create({
  screenContainer: {
    padding: 40,
    backgroundColor: color.backgroundColor,
    color: color.textColor,
    // height: ScreenHeight,
    width: ScreenWidth,
    minHeight: ScreenHeight
  },
  textBold: {
    fontFamily: 'Poppins-Bold',
    color: color.textColor
  }
})

export default globalStyles
