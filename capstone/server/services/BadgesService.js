import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BadgesService {
    async getBadgesByQuery(query = {}) {
        const badges = await dbContext.Badges.find(query)
        return badges
    }

    async createBadge(body) {
        const badge = await dbContext.Badges.create(body)
        return badge
    }

}

export const badgesService = new BadgesService()
