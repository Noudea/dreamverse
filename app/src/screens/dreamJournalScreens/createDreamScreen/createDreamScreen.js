import React, { useEffect, useState } from 'react'
import { Button, Platform, Text, View } from 'react-native'
import { ClassicInput, DateButton, IconInput } from '../../../components/atomes'
import globalStyles from '../../../styles/globalStyles'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
function createDreamScreen () {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
    console.log(date)
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

  return (
    <View style={globalStyles.screenContainer}>
      <ClassicInput
        placeholder='Your dream title'
        name='mail'
        type='feather'
      />
      <DateButton onPress={showDatepicker} date={moment(date).format('MMMM Do YYYY')} />
      <Button onPress={showDatepicker} title='Show date picker!' />
      <Button onPress={showTimepicker} title='Show time picker!' />
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour
          display='default'
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default createDreamScreen
