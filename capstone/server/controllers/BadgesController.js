import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { badgesService } from '../services/BadgesService.js'

export class BadgesController extends BaseController {
    constructor() {
        super('api/badges')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getBadgeByQuery)
            .post('', this.createBadge)
    }
    async createBadge(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const badge = await badgesService.createBadge(req.body)
            res.send(badge)
        } catch (error) {
            next(error)
        }
    }
    async getBadgeByQuery(req, res, next) {
        try {
            const badge = await badgesService.getBadgesByQuery(req.params.query)
            res.send(badge)
        } catch (error) {
            next(error)
        }
    }


}
