import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../screens/authScreens/LoginScreen'
import SignUpScreen from '../../screens/authScreens/SignUpScreen'
const AuthNavigator = createNativeStackNavigator()

function AuthStack () {
  return (
    <AuthNavigator.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthNavigator.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
      <AuthNavigator.Screen options={{ headerShown: false }} name='SignUp' component={SignUpScreen} />
    </AuthNavigator.Navigator>
  )
}

export default AuthStack
