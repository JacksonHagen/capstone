import { dbContext } from "../db/DbContext.js";

class AwardsService {
  async getAwardsByQuery(query = {}) {
    const awards = await dbContext.Awards.find(query).populate('account')
    return awards
  }
  async createAward(badgeTag, habit) {
    const badge = await dbContext.Badges.findOne({badgeTag})
    const body = {
      dateAwarded: new Date(),
      badgeTag,
      img: badge.img,
      badgeId: badge.id,
      habit.accountId,
      habit.id
    }
    const award = await dbContext.Awards.create(body)
    await award.populate('badge habit account')
    return award
  }
  async getAwardsByAccount(accountId) {
    const awards = await dbContext.Awards.find({ accountId: accountId }).populate('habit')
    return awards
  }

}

export const awardsService = new AwardsService();