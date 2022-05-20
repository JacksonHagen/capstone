import firebaseAdmin from "firebase-admin";
import { firebaseAccount } from'../../firebase.js'

class FirebaseService {
  constructor() {
    firebaseAdmin.initializeApp({
      // @ts-ignore
      credential: firebaseAdmin.credential.cert(firebaseAccount)
    })

  }
  async getToken(id) {
    const token = await firebaseAdmin.auth().createCustomToken(id)
    return token
  }
}

export const firebaseService = new FirebaseService()