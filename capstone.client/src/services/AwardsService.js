import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService";

class AwardsService {

    async getMyAwards() {
        const res = await api.get('/account/awards')
        logger.log(res.data, "res of get my awards")
        AppState.myAwards = res.data
    }

}

export const awardsService = new AwardsService()