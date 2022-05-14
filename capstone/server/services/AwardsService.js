import { dbContext } from "../db/DbContext.js";

class AwardsService {
  async getAwardsByQuery(query = {}) {
    const awards = await dbContext.Awards.find(query).populate('account')
    return awards
  }
  async createAward(badgeTag, accountId, habit = {}) {
    // NOTE no need for admins because our server host can forbid all requests that do no originate from the program.
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
    const awards = await dbContext.Awards.find({ accountId: accountId }).populate('habit')
    return awards
  }

}

export const awardsService = new AwardsService();