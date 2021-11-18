import React from 'react';
import { Text, Pressable } from 'react-native';

const Button = (props) => {
  const { onPress, title } = props;
  return (
    <Pressable style={props.style} onPress={onPress}>
      <Text style={props.textStyle}>{title}</Text>
    </Pressable>
  );
}

export default Button