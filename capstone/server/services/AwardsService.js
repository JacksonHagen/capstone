import { dbContext } from "../db/DbContext.js";
import { socketProvider } from "../SocketProvider.js";

class AwardsService {
  async getAwardsByQuery(query = {}) {
    return await dbContext.Awards.find(query).populate('account')
  }
  async createAward(badgeTag, accountId, habit = {}) {
    // NOTE no need for admins because our server host can forbid all requests that do no originate from the program.
    const badge = await dbContext.Badges.findOne({ tag: badgeTag })
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
    socketProvider.message("EARNED_BADGE", award)
    return award
  }
  async getAwardsByAccount(accountId) {
    return await dbContext.Awards.find({ accountId }).populate('habit')
  }
}

export const awardsService = new AwardsService();