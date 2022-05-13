import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { awardsService } from '../services/AwardsService.js'

export class AwardsController extends BaseController {
    constructor() {
        super('api/awards')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createAward)
            .get('', this.getAwardsByQuery)

    }
    async getAwardsByQuery(req, res, next) {
        try {
            const awards = await awardsService.getAwardsByQuery(req.params.query)
            res.send(awards)
        }
        catch (error) {
            next(error)
        }
    }
    async createAward(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const award = await awardsService.createAward(req.body, req.userInfo.id)
            res.send(award)
        }
        catch (error) {
            next(error)
        }
    }


}
