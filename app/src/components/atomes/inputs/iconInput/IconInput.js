import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { color } from '../../../../theme'

const IconInput = (props) => {
  return (
    <View style={style.inputContainer}>
      <Icon
        name={props.name}
        type={props.type}
        color={color.iconColor}
        containerStyle={style.icon}
      />
      <TextInput
        style={style.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
      />
    </View>
  )
}

const style = StyleSheet.create({
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

export default IconInput
