// src/api.ts
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

// API جدید برای دریافت اطلاعات ارز خاص بر اساس id
export const fetchPriceById = async (id: string): Promise<PriceData> => {
  const response = await axios.post("https://b.wallet.ir/coinlist/list", {
    page: 1,
    limit: 1,
    search: id,
    currency_code: id, // فیلتر کردن بر اساس id
  });
  return response.data.items[0]; // فرض بر این که اولین آیتم داده مد نظر است
};
