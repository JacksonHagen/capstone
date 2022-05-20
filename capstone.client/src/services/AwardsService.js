import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";

class AwardsService {

    async getMyAwards() {
        const res = await api.get('/account/awards')
        AppState.myAwards = res.data
    }

    // async checkFirstLog() {
    //     try {
    //         if (AppState.firstLog == false) {
    //             AppState.firstLog = !AppState.firstLog
    //             AppState.myAwards.push({ dateAwarded: AppState.day, badgeTag: 'LI01', img: './assets/img/Badges/CapstoneBadges1st-Login.png', accountId: AppState.account.id })
    //             const res = await api.post('account/awards',)
    //             Pop.toast()
    //         }
    //     } catch (error) {
    //         logger.error(error)
    //         Pop.toast(error.message, 'error')
    //     }
    // }

}

export const awardsService = new AwardsService()