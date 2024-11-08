// api.ts
import axios from "axios";
import { PriceData } from "./types"; // مسیر صحیح را تنظیم کنید

export const fetchPrices = async (
  page: number,
  search: string = ""
): Promise<PriceData[]> => {
  const response = await axios.post("https://b.wallet.ir/coinlist/list", {
    page,
    limit: 10,
    search,
    currency_code: "",
  });
  return response.data.items || [];
};
