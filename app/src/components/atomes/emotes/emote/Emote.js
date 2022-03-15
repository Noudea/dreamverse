import React from 'react'
import { Image, View } from 'react-native'
import bad from '../../../../assets/emotes/bad.png'
import normal from '../../../../assets/emotes/normal.png'
import good from '../../../../assets/emotes/good.png'
import amazing from '../../../../assets/emotes/amazing.png'
import cloudy from '../../../../assets/emotes/cloudy.png'
import normalCloud from '../../../../assets/emotes/normalCloud.png'
import clear from '../../../../assets/emotes/clear.png'
import superClear from '../../../../assets/emotes/superClear.png'
import lucide from '../../../../assets/emotes/lucide.png'
import nightmare from '../../../../assets/emotes/nightmare.png'
import no from '../../../../assets/emotes/no.png'
import styles from './styles'

function Emote ({ name, size }) {
  return (
    <View>
      {name === 'bad' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={bad} />}
      {name === 'normal' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={normal} />}
      {name === 'good' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={good} />}
      {name === 'amazing' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={amazing} />}
      {name === 'cloudy' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={cloudy} />}
      {name === 'normalCloud' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={normalCloud} />}
      {name === 'clear' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={clear} />}
      {name === 'superClear' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={superClear} />}
      {name === 'lucide' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={lucide} />}
      {name === 'nightmare' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={nightmare} />}
      {name === 'no' && <Image style={[size === 'small' && styles.small, size === 'medium' && styles.medium, size === 'large' && styles.large]} source={no} />}
    </View>
  )
}

export default Emote
