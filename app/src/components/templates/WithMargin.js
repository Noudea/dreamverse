import React from 'react'
import { StyleSheet, View } from "react-native"

const WithMargin = ({children,...props}) => {
  
  const style = StyleSheet.create({
    view : {
      marginTop : props.margin.top,
      marginBottom : props.margin.bottom,
      marginRight : props.margin.right,
      marginLeft : props.margin.left,
      width:'100%'
    }
  })

  return(
    <View style={style.view}>
      {children}
    </View>
  )
}

export default WithMargin