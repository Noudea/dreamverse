import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/atomes/buttons/Button'
import IconInput from '../../components/atomes/inputs/iconInput/IconInput'
import WithMargin from '../../components/templates/WithMargin'
import { customAxios } from '../../services/api'
import { color } from '../../theme'

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phoneNumber: ''
  })

  const submit = async () => {
    console.log(formData)
    const { data } = await customAxios.post('/auth/dreamverse/signup', formData)
    console.log(data)
    if (data.success) {
      navigation.navigate('Login')
    }
  }

  const goToLoginScreen = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.view}>
      <WithMargin margin={{ bottom: 40 }}>
        <Text style={styles.title}>Dreamverse</Text>
        <Text style={styles.subTitle}>Start your journey now</Text>
      </WithMargin>
      <WithMargin width='100%' margin={{ bottom: 12 }}>
        <IconInput
          placeholder='Email address'
          name='mail' type='feather'
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
      <WithMargin width='100%' margin={{ bottom: 12 }}>
        <IconInput
          placeholder='Password'
          name='smartphone'
          type='feather'
          onChangeText={(e) => {
            setFormData({ ...formData, phoneNumber: e })
          }}
        />
      </WithMargin>
      <Button
        onPress={submit}
        title='Sign up'
        style={styles.submitButton}
        textStyle={styles.buttonText}
        accessibilityLabel='Sign Up'
      />
      <Text style={styles.textGrey}>Don't have an account ?</Text>
      <Pressable onPress={goToLoginScreen}>
        <Text style={styles.text}>Sign In</Text>
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
    fontSize: 56,
    fontFamily: 'Roboto',
    color: 'white'
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

export default SignUpScreen
