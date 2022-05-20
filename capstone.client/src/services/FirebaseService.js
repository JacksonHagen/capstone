import { AppState } from "../AppState.js"
import { fbAuth, storage } from "../utils/FirebaseProvider"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class FirebaseService {
  async login() {
    try {
      const res = await api.get('account/firebase')
      const token = res.data.token
      await fbAuth.signInWithCustomToken(token)
    } catch (error) {
      logger.error(error)
      Pop.toast(error.message, 'error')
    }
  }
  async upload(image) {
    const collection = storage.ref('Images')
    const resource = collection.child('images').child('badges').child(image.name)
    const snapshot = await resource.put(image, {
      customMetadata: {
        uid: AppState.account.id, size: image.size, type: 'Images'
      }
    })
    const url = await snapshot.ref.getDownloadURL()
    return url
  }
}
export const firebaseService = new FirebaseService()