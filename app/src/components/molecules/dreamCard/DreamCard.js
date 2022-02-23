import moment from 'moment'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import DreamBadge from '../../atomes/badges/dreamBadge/DreamBadge'
import RowList from '../../templates/lists/rowList/RowList'
import styles from './styles'

function DreamCard ({ title, content, category, date }) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{moment(date).format('MMMM Do')}</Text>
        </View>
        <View style={styles.badgeContainer}>
          <RowList listItems={category.map((item, index) => {
            return <DreamBadge key={index} id={index} category={item} />
          })}
          />
        </View>
        <Text style={styles.text}>{content}</Text>
      </View>
    </Pressable>
  )
}

export default DreamCard