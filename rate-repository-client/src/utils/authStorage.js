import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccessToken() {
    return AsyncStorage.getItem(`${this.namespace}:token`)
  }

  async setAccessToken(accessToken) {
    try {
      return AsyncStorage.setItem(`${this.namespace}:token`, accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  async removeAccestoken() {
    return AsyncStorage.removeItem(`${this.namespace}:token`)
  }
}
export default AuthStorage
