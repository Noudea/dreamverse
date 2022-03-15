import React, { useEffect, useRef, useState } from 'react'
import { Button, Platform, ScrollView, Text, View, Dimensions } from 'react-native'
import { DateInput } from '../../../components/atomes'
import globalStyles from '../../../styles/globalStyles'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import styles from './styles'
import { FeelingCard } from '../../../components/molecules'
import LineInput from '../../../components/atomes/inputs/lineInput/LineInput'
import { EmoteButton } from '../../../components/atomes/buttons'
import { customAxios } from '../../../services/api'
import { Emote } from '../../../components/atomes/emotes'

function createDreamScreen () {
  const scrollRef = useRef(null)

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [typing, setTyping] = useState(false)
  const windowWidth = Dimensions.get('window').width
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    interpretation: '',
    tags: [],
    sleepQuality: '',
    dreamClarity: '',
    isLucid: '',
    isNightmare: '',
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

  const saveDream = async () => {
    try {
      const { data } = await customAxios.post('api/dream', formData)
      console.log(data)
    } catch (error) {
      console.log('test', error.response.data)
    }
  }

  const scrollTo = (index) => {
    scrollRef.current.scrollTo({ x: windowWidth * index })
  }
  useEffect(() => {

  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView ref={scrollRef} snapToInterval={windowWidth} decelerationRate='fast' horizontal disableIntervalMomentum pagingEnabled indicatorStyle='white'>
        <View style={globalStyles.screenContainer}>
          <Text style={styles.headerText}>Create your dream</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Title</Text>
            <LineInput
              onChangeText={
                (e) => {
                  setFormData({ ...formData, title: e })
                }
              }
              placeholder='Dream title'
            />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>Date</Text>
            <DateInput onPress={showDatepicker} date={moment(date).format('MMMM Do YYYY')} />
          </View>
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
          {!typing && <Text style={styles.headerText}>What happened in your dream ?</Text>}
          <LineInput
            onBlur={() => { setTyping(false) }}
            onFocus={() => { setTyping(true) }}
            onChangeText={
                (e) => {
                  setFormData({ ...formData, content: e })
                }
              }
            multiline
            placeholder='Describe your dream'
          />
        </View>
        <View style={globalStyles.screenContainer}>
          {!typing && <Text style={styles.headerText}>How do you interpret your dream ?</Text>}
          <LineInput
            onBlur={() => { setTyping(false) }}
            onFocus={() => { setTyping(true) }}
            onChangeText={
                (e) => {
                  setFormData({ ...formData, interpretation: e })
                }
              }
            multiline
            placeholder='Describe how you interpreted your dream'
          />
        </View>
        <View style={globalStyles.screenContainer}>
          <Text style={styles.headerText}>Was your dream lucid ?</Text>
          <FeelingCard
            emote='lucide' onPress={() => {
              setFormData({ ...formData, isLucid: true })
              scrollTo(4)
            }}
            text='Yes'
          />
          <FeelingCard
            emote='no'
            onPress={() => {
              setFormData({ ...formData, isLucid: false })
              scrollTo(4)
            }} text='No'
          />
        </View>
        <View style={globalStyles.screenContainer}>
          <Text style={styles.headerText}>Was your dream a nightmare ?</Text>
          <FeelingCard
            emote='nightmare'
            onPress={() => {
              setFormData({ ...formData, isNightmare: true })
              scrollTo(5)
            }}
            text='Yes'
          />
          <FeelingCard
            emote='no'
            onPress={() => {
              setFormData({ ...formData, isNightmare: false })
              scrollTo(5)
            }}
            text='No'
          />
        </View>
        <View style={globalStyles.screenContainer}>
          <Text style={styles.headerText}>How was your sleep ?</Text>
          <View style={styles.emoteContainer}>
            <EmoteButton emote='bad' isSelected={formData.sleepQuality === 'bad'} onPress={() => { setFormData({ ...formData, sleepQuality: 'bad' }) }} />
            <EmoteButton emote='normal' isSelected={formData.sleepQuality === 'normal'} onPress={() => { setFormData({ ...formData, sleepQuality: 'normal' }) }} />
            <EmoteButton emote='good' isSelected={formData.sleepQuality === 'good'} onPress={() => { setFormData({ ...formData, sleepQuality: 'good' }) }} />
            <EmoteButton emote='amazing' isSelected={formData.sleepQuality === 'amazing'} onPress={() => { setFormData({ ...formData, sleepQuality: 'amazing' }) }} />
          </View>
          <View style={styles.selectedContainer}>
            <Emote size='large' name={formData.sleepQuality} />
            <Text style={styles.selectedText}>{formData.sleepQuality}</Text>
          </View>
        </View>
        <View style={globalStyles.screenContainer}>
          <Text style={styles.headerText}>How clear was your dream ?</Text>
          <View style={styles.emoteContainer}>
            <EmoteButton emote='cloudy' isSelected={formData.dreamClarity === 'cloudy'} onPress={() => { setFormData({ ...formData, dreamClarity: 'cloudy' }) }} />
            <EmoteButton emote='normalCloud' isSelected={formData.dreamClarity === 'normalCloud'} onPress={() => { setFormData({ ...formData, dreamClarity: 'normal' }) }} />
            <EmoteButton emote='clear' isSelected={formData.dreamClarity === 'clear'} onPress={() => { setFormData({ ...formData, dreamClarity: 'clear' }) }} />
            <EmoteButton emote='superClear' isSelected={formData.dreamClarity === 'superClear'} onPress={() => { setFormData({ ...formData, dreamClarity: 'superClear' }) }} />
          </View>
          <View style={styles.selectedContainer}>
            <Emote size='large' name={formData.dreamClarity === 'normal' ? 'normalCloud' : formData.dreamClarity} />
            <Text style={styles.selectedText}>{formData.dreamClarity}</Text>
          </View>
        </View>
        <View style={globalStyles.screenContainer}>
          <Text style={styles.headerText}>Are you ready to save your dream ?</Text>
          <Button
            onPress={() => {
              saveDream()
            }} title='Yes'
          />
        </View>
      </ScrollView>
      <View style={styles.indicator}>
        <Text style={styles.headerText}>test</Text>
      </View>
    </View>
  )
}

export default createDreamScreen
