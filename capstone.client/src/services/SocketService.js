import { Modal } from 'bootstrap'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('EARNED_BADGE', this.earnedBadge)
  }

  earnedBadge(payload) {
    AppState.myAwards.push(payload)
    AppState.newAward = payload
    Modal.getOrCreateInstance(document.getElementById(payload.badge.id)).toggle()
    console.log('earned badge', payload)
    // NOTE socket working - just need to handle this payload data
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
