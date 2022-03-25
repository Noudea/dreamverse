import moment from 'moment'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import {Emote} from '../../../atomes'
import {WithMargin} from '../../../templates'
import styles from './styles'
import globalStyles from '../../../../styles/globalStyles'
import { DreamBadge } from '../../../atomes'

function DreamCard ({ title, tags, date, isLucid, isNightmare, content, interpretation, sleepQuality, dreamClarity, onPress }) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[globalStyles.textBold, styles.title]}>{title}</Text>
          <Text style={[globalStyles.textBold, styles.date]}>{moment(date).format('DD MMMM')}</Text>
        </View>
        <View style={styles.emoteContainer}>
          {isLucid && <WithMargin margin={{ right: 10 }}><Emote name='lucide' size='small' /></WithMargin>}
          {isNightmare && <WithMargin margin={{ right: 10 }}><Emote name='nightmare' size='small' /></WithMargin>}
          {sleepQuality && <WithMargin margin={{ right: 10 }}><Emote name={sleepQuality} size='small' /></WithMargin>}
          {dreamClarity && <WithMargin margin={{ right: 10 }}><Emote name={dreamClarity} size='small' /></WithMargin>}
        </View>
        {/* <RowList listItems={tags.map((item, index) => {
          return <DreamBadge key={index} id={index} category={item} />
        })}
        /> */}
        {/* <Text style={styles.text}>{content}</Text> */}
      </View>
    </Pressable>
  )
}

export default DreamCard
