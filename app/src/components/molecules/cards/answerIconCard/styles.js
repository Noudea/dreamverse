import { StyleSheet } from 'react-native'
import { color } from '../../../../theme'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 30,
    backgroundColor: color.baseColor,
    borderRadius: 50,
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginLeft: 20
  },
  next: {
    color: 'white',
    fontSize: 30
  }
})

export default styles