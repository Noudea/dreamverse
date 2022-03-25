import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { color } from '../../../../theme'

function DreamCalendar () {
  const INITIAL_DATE = '2022-02-15'
  const [selected, setSelected] = useState(INITIAL_DATE)
  const onDayPress = (day) => {
    setSelected(day.dateString)
  }

  return (
    <View style={styles.view}>
      <Calendar
        theme={{
          calendarBackground: 'transparent',
          textSectionTitleColor: 'white', // Sun Mon Tue Wed Thu Fri Sat colors
          dayTextColor: 'white',
          monthTextColor: 'white',
          todayButtonTextColor: 'red'
        }}
        hideExtraDays
        enableSwipeMonths
        current={INITIAL_DATE}
        style={styles.calendar}
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
            selectedTextColor: 'red'
          }
        }}
      />
    </View>
  )
}

export default DreamCalendar

const styles = StyleSheet.create({
  view: {
    backgroundColor: color.baseColor,
    borderRadius: 16,
    marginBottom: 20
  },
  calendar: {

  },
  container: {
    borderRadius: 50
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  switchText: {
    margin: 10,
    fontSize: 16
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  disabledText: {
    color: 'grey'
  },
  defaultText: {
    color: 'purple'
  },
  customCalendar: {
    height: 250,
    borderBottomColor: 'lightgrey'
  },
  customDay: {
    textAlign: 'center'
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2'
  }
})
