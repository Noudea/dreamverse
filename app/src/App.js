import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SignUpScreen from './screens/SignUpScreen'

const Stack = createNativeStackNavigator()

function App () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
