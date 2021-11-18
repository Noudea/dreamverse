import React, { useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/atomes/buttons/Button';
import { Icon } from 'react-native-elements'
import IconInput from '../components/atomes/inputs/IconInput';
import {color} from '../theme'
import WithMargin from '../components/templates/WithMargin';

const LoginScreen = () => {

  const [formData,setFormData] = useState({
    email : '',
    password:''
  })
  let { height, width } = Dimensions.get('window');
  const submit = () => {
    console.log(formData)
  }

  const goToSignUpScreen = () => {

  }

  return (
    <View style={style.view}>
      <WithMargin margin={{bottom:40}}>
        <Text style={style.title}>Dreamverse</Text>
        <Text style={style.subTitle}>Start your journey now</Text>
      </WithMargin>
      <WithMargin margin={{bottom:12}}>
        <IconInput 
          placeholder="Email address" 
          name='mail' type='feather' 
          onChangeText={(e)=> {
              setFormData({...formData,email : e})
            }}>
        </IconInput>
      </WithMargin>
      <WithMargin margin={{bottom:12}}>
        <IconInput 
          placeholder="Password" 
          name='lock' type='feather' 
          onChangeText={(e)=> {
              setFormData({...formData,password : e})
            }}>
        </IconInput>
      </WithMargin>
      <Button
        onPress={submit}
        title="Sign in"
        style={style.submitButton}
        textStyle={style.buttonText}
        accessibilityLabel="Sign In"
      />
      <Text style={style.textGrey}>Don't have an account ?</Text>
      <Pressable onPress={goToSignUpScreen}>
        <Text style={style.text}>Sign up</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  view : {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: color.backgroundColor,
    padding:42
  },
  input: {
    height: 45,
    margin: 12,
    paddingLeft:45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  submitButton: {
    alignItems: 'center',
    margin:8,
    height: 45,
    width:'100%',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: color.baseColor,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
   inputContainer: {
    width:'100%',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 25,
    zIndex: 5
  },
  title : {
    fontSize:56,
    fontFamily: 'Roboto',
    color: 'white',
  },
  subTitle:{
    fontSize:20,
    color: 'white',
    textAlign:'center'
  },
  textGrey : {
    fontSize:16,
    fontFamily:'Robot medium',
    fontWeight:'bold',
    color: color.iconColor,
  },
  text : {
    fontSize:16,
    fontFamily:'Robot medium',
    fontWeight:'bold',
    color: 'white',
  }

});



export default LoginScreen