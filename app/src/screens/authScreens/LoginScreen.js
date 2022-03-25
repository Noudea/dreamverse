import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/atomes/buttons/Button'
import IconInput from '../../components/atomes/inputs/iconInput/IconInput'
import { color } from '../../theme'

import { loginUser, useAuth } from '../../contexts/authContext/AuthContext'
import { customAxios } from '../../services/api'
import globalStyles from '../../styles/globalStyles'
import { WithMargin } from '../../components/templates'
const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: 'tests@dreamverse.com',
    password: 'test'
  })

  const { dispatch } = useAuth()

  const submit = async () => {
    try {
      const { data } = await customAxios.post('/auth/dreamverse/signin', formData)
      loginUser({
        user: data.user,
        accessToken: data.accessToken
      }, dispatch)
    } catch (error) {
      console.log('test', error.response.data)
    }
  }

  const goToSignUpScreen = async () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.view}>
      <WithMargin margin={{ bottom: 40 }}>
        <Text style={[globalStyles.textBold, styles.title]}>Dreamverse</Text>
        <Text style={styles.subTitle}>Start your journey now</Text>
      </WithMargin>
      <WithMargin width='100%' margin={{ bottom: 12 }}>
        <IconInput
          placeholder='Email address'
          name='mail'
          type='feather'
          onChangeText={(e) => {
            setFormData({ ...formData, email: e })
          }}
        />
      </WithMargin>
      <WithMargin width='100%' margin={{ bottom: 12 }}>
        <IconInput
          placeholder='Password'
          name='lock'
          type='feather'
          onChangeText={(e) => {
            setFormData({ ...formData, password: e })
          }}
        />
      </WithMargin>
      <Button
        onPress={submit}
        title='Sign in'
        style={styles.submitButton}
        textStyle={styles.buttonText}
        accessibilityLabel='Sign In'
      />
      <Text style={styles.textGrey}>Don't have an account ?</Text>
      <Pressable onPress={goToSignUpScreen}>
        <Text style={styles.text}>Sign up</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.backgroundColor,
    padding: 42
  },
  input: {
    height: 45,
    margin: 12,
    paddingLeft: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  submitButton: {
    alignItems: 'center',
    margin: 8,
    height: 45,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: color.baseColor
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    left: 25,
    zIndex: 5
  },
  title: {
    fontSize: 48
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  textGrey: {
    fontSize: 16,
    fontFamily: 'Robot medium',
    fontWeight: 'bold',
    color: color.iconColor
  },
  text: {
    fontSize: 16,
    fontFamily: 'Robot medium',
    fontWeight: 'bold',
    color: 'white'
  }

})

export default LoginScreen
