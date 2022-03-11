import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import createDreamScreen from '../../screens/dreamJournalScreens/createDreamScreen/createDreamScreen'
import dreamJournalScreen from '../../screens/dreamJournalScreens/dreamJournalScreen/DreamJournalScreen'
import DreamSearchScreen from '../../screens/dreamJournalScreens/dreamSearchScreen/DreamSearchScreen'

const MainNavigator = createNativeStackNavigator()

function MainStack () {
  return (
    <MainNavigator.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >
      <MainNavigator.Screen options={{ headerShown: false }} name='createDreamScreen' component={createDreamScreen} />
      <MainNavigator.Screen options={{ headerShown: false }} name='DreamSearchScreen' component={DreamSearchScreen} />
      <MainNavigator.Screen options={{ headerShown: false }} name='DreamJournalScreen' component={dreamJournalScreen} />
    </MainNavigator.Navigator>
  )
}

export default MainStack
