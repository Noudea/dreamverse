import AsyncStorage from '@react-native-async-storage/async-storage'

const storeDataAsString = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
}

const getDataAsString = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (e) {
    console.log(e)
  }
}

export { storeDataAsString, getDataAsString }
