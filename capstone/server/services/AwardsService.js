import { dbContext } from "../db/DbContext.js";

class AwardsService {
  async getAwardsByQuery(query = {}) {
    return await dbContext.Awards.find(query).populate('account')
  }
  async createAward(badgeTag, accountId, habit = {}) {
    const badge = await dbContext.Badges.findOne({ badgeTag })
    const body = {
      dateAwarded: new Date(),
      badgeTag,
      img: badge.img,
      badgeId: badge.id,
      accountId,
      habitId: habit.id || null
    }
    const award = await dbContext.Awards.create(body)
    await award.populate('badge habit account')
    return award
  }
  async getAwardsByAccount(accountId) {
    return await dbContext.Awards.find({ accountId }).populate('habit')
  }
}

export const awardsService = new AwardsService();