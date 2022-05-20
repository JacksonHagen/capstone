import { AppState } from "../AppState.js";
import { quoteApi } from "./AxiosService.js";

class QuotesService {
  async getOneQuote() {
    const res = await quoteApi.get('api/quotes')
    AppState.quote = res.data
  }
}

export const quotesService = new QuotesService();