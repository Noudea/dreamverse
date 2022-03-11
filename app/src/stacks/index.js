import React from 'react'
import { useAuth } from '../contexts/authContext/AuthContext'
import AuthStack from './authStack/AuthStack'
import MainStack from './mainStack/MainStack'

function Stack () {
  const { state } = useAuth()
  if (state.user && state.accessToken) {
    return (
      <MainStack />
    )
  } else {
    return (
      <AuthStack />
    )
  }
}

export default Stack
