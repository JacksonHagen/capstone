import { fbAuth } from "../utils/FirebaseProvider"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class FirebaseService {
  async login() {
    try {
      const res = await api.get('account/firebase')
      logger.log(res.data, 'firebase login')
      const token = res.data.token
      await fbAuth.signInWithCustomToken(token)
    } catch (error) {
      logger.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}
export const firebaseService = new FirebaseService()