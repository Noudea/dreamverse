import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from './contexts/authContext/AuthContext'
import Stack from './stacks'

function App () {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default App
