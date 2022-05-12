import { dbContext } from "../db/DbContext.js";

class AwardsService {
  async getAwardsByQuery(query = {}) {

    const awards = await dbContext.Awards.find(query)
  }
  async createAward(body) {
    const award = await dbContext.Awards.create(body)
    return award
  }
  async getAwardsByAccount(accountId) {
    const awards = await dbContext.Awards.find({ accountId: accountId }).populate('habit')
    return awards
  }

}

export const awardsService = new AwardsService();