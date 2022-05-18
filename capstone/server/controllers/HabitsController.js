import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { habitsService } from '../services/HabitsService.js'





export class HabitsController extends BaseController {
    constructor() {
        super('api/habits')
        this.router
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getHabitsByQuery)
            .get('/:id', this.getHabitById)
            .post('', this.createHabit)
            .put('/:id', this.editHabit)
            .delete('/:id', this.deleteHabit)

    }
    async editHabit(req, res, next) {
        try {
            req.body.id = req.params.id
            req.body.accountId = req.userInfo.id
            const habit = await habitsService.editHabit(req.body)
            res.send(habit)
        } catch (error) {
            next(error)
        }
    }
    async deleteHabit(req, res, next) {
        try {
            const habit = await habitsService.deleteHabit(req.params.id, req.userInfo.id)
            res.send(habit)
        } catch (error) {
            next(error)
        }
    }
    async createHabit(req, res, next) {
        try {

            req.body.accountId = req.userInfo.id
            const habit = await habitsService.createHabit(req.body)
            res.send(habit)
        } catch (error) {
            next(error)
        }
    }
    async getHabitById(req, res, next) {
        try {
            const habit = await habitsService.getHabitById(req.params.id)
            res.send(habit)
        } catch (error) {
            next(error)
        }
    }
    async getHabitsByQuery(req, res, next) {
        try {
            req.query.accountId = req.userInfo.id
            const habits = await habitsService.getAll(req.query)
            res.send(habits)
        } catch (error) {
            next(error)
        }

    }

}
