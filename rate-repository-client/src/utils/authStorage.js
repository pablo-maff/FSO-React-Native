import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccesToken() {
    try {
      return AsyncStorage.getItem(`${this.namespace}:token`)
    } catch (error) {
      console.error(error)
    }
  }

  async setAccessToken(accessToken) {
    try {
      return AsyncStorage.setItem(`${this.namespace}:token`, accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  async removeAccestoken() {
    try {
      return AsyncStorage.removeItem(`${this.namespace}:token`)
    } catch (error) {
      console.error(error)
    }
  }
}
export default AuthStorage
