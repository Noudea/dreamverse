import React, { useEffect, useRef, useState } from 'react'
import { Button, Platform, Text, View } from 'react-native'
import { ClassicInput, DateInput, IconInput, TimeInput } from '../../../components/atomes'
import globalStyles from '../../../styles/globalStyles'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import Swiper from 'react-native-swiper'
import styles from './styles'
import { FeelingCard } from '../../../components/molecules'

function createDreamScreen () {
  const swiper = useRef(null)
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    category: '',
    sleepQuality: '',
    date: new Date()
  })

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
    setFormData({ ...formData, date: selectedDate })
    console.log(formData.date)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }

  const setSleepQuality = (quality) => {
    setFormData({ ...formData, sleepQuality: quality })
    swiper.current.scrollBy(1)
  }

  const setCategory = (category) => {
    setFormData({ ...formData, category: category })
    swiper.current.scrollBy(1)
  }

  useEffect(() => {

  }, [formData])
  return (
    <Swiper
      ref={swiper}
      dot={
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,.3)',
            width: 12,
            height: 12,
            borderRadius: 7,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30
          }}
        />
          }
      activeDot={
        <View style={styles.dotContainer}>
          <Text style={styles.text}>Swipe</Text>
          <View
            style={{
              backgroundColor: '#fff',
              width: 12,
              height: 12,
              borderRadius: 7,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          />
        </View>
          }
      paginationStyle={{
        bottom: 70
      }}
      loop={false}
    >
      <View style={globalStyles.screenContainer}>
        <Text style={styles.text}>Title</Text>
        <ClassicInput
          onChangeText={
            (e) => {
              setFormData({ ...formData, title: e })
            }
          }
          placeholder='Your dream title'
          name='mail'
          type='feather'
        />
        <Text style={styles.text}>Date</Text>
        <View style={styles.dateContainer}>
          <DateInput onPress={showDatepicker} date={moment(date).format('MMMM Do YYYY')} />
          <TimeInput onPress={showTimepicker} date={moment(date).format('hh:mm:ss')} />
        </View>
        <Text style={styles.text}>{moment(formData.date).format('MMMM Do YYYY HH:mm:ss')}</Text>
        {/* <Button onPress={showDatepicker} title='Show date picker!' />
        <Button onPress={showTimepicker} title='Show time picker!' /> */}
        {show && (
          <DateTimePicker
            maximumDate={new Date()}
            value={formData.date}
            mode={mode}
            is24Hour
            display='default'
            onChange={onChange}
          />
        )}
      </View>
      <View style={globalStyles.screenContainer}>
        <Text style={styles.headerText}>How was your sleep ?</Text>
        <FeelingCard onPress={() => { setSleepQuality('very bad') }} text='Very bad' />
        <FeelingCard onPress={() => { setSleepQuality('bad') }} text='Bad' />
        <FeelingCard onPress={() => { setSleepQuality('normal') }} text='Normal' />
        <FeelingCard onPress={() => { setSleepQuality('good') }} text='Good' />
        <FeelingCard onPress={() => { setSleepQuality('amazing') }} text='Amazing' />
      </View>
      <View style={globalStyles.screenContainer}>
        <Text style={styles.headerText}>How was your dream ?</Text>
        <FeelingCard onPress={() => { setCategory('normal') }} text='Normal' />
        <FeelingCard onPress={() => { setCategory('lucid') }} text='Lucid' />
        <FeelingCard onPress={() => { setCategory('nightmare') }} text='Nightmare' />
        <Button
          onPress={() => {
            console.log(formData)
          }} title='Forward'
        />
      </View>
    </Swiper>
  )
}

export default createDreamScreen
