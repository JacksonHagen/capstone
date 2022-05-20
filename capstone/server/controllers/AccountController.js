import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { awardsService } from '../services/AwardsService'
import { habitsService } from '../services/HabitsService'
import BaseController from '../utils/BaseController'
import { firebaseService } from '../services/FirebaseService'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/awards', this.getAwardsByAccount)
      .get('/habits', this.getHabitsByAccount)
      .get('/firebase', this.getFirebaseToken)
      .put('', this.updateAccount)
  }
  
  async getAwardsByAccount(req, res, next) {
    try {
      const awards = await awardsService.getAwardsByAccount(req.userInfo.id)
      res.send(awards)
    } catch (error) {
      next(error)
    }
  }
  async getHabitsByAccount(req, res, next) {
    try {
      const habits = await habitsService.getHabitsByAccount(req.userInfo.id)
      res.send(habits)
    } catch (error) {
      next(error)
    }
  }
  async updateAccount(req, res, next) {
    try {
      const account = await accountService.updateAccount(req.userInfo, req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async getFirebaseToken(req, res, next) {
    try {
      const token = await firebaseService.getToken(req.userInfo.id)
      res.send({ token })
    } catch (error) {
      next(error)
    }
  }
}
