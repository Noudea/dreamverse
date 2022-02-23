import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'center'
  },
  input: {
    height: 45,
    paddingLeft: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 5
  }
})

export default styles
