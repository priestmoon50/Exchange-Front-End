"use client";

import React, { useState } from "react";
import { FaBitcoin, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface PriceData {
  id: number;
  fa_name: string;
  price: string;
  daily_change_percent: string;
  buy_irt_price: string;
  sell_irt_price: string;
  icon: string;
}

const itemsPerPage = 10;

const fetchPrices = async (page: number): Promise<PriceData[]> => {
  const response = await axios.post("https://b.wallet.ir/coinlist/list", {
    page: page,
    limit: itemsPerPage,
    search: "",
    currency_code: "",
  });
  
  return response.data.items || []; 
};

const PriceList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const { data = [], isLoading } = useQuery({
    queryKey: ["prices", currentPage],
    queryFn: () => fetchPrices(currentPage),
  });

  const totalPages = 9; // این عدد را بر اساس کل تعداد صفحات در پاسخ API تنظیم کنید

  const handleNavigateToCurrencyInfo = (currencyId: number) => {
    router.push(`/currency-info/${currencyId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 rtl">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          لیست قیمت لحظه‌ای ارزهای دیجیتال
        </h2>

        <div className="overflow-hidden rounded-lg shadow-lg mb-4">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-gray-800 text-center">نام رمز ارز</th>
                <th className="px-4 py-2 text-gray-800 text-center">ارزش دلاری</th>
                <th className="px-4 py-2 text-gray-800 text-center">تغییر روزانه</th>
                <th className="px-4 py-2 text-gray-800 text-center">خرید از والت</th>
                <th className="px-4 py-2 text-gray-800 text-center">فروش به والت</th>
                <th className="px-4 py-2 text-gray-800 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    <div className="animate-pulse text-gray-400">
                      در حال بارگذاری...
                    </div>
                  </td>
                </tr>
              ) : data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 flex items-center justify-center gap-2">
                      <img src={item.icon} alt={item.fa_name} width={20} /> {item.fa_name}
                    </td>
                    <td className="px-4 py-2 text-center">{item.price}</td>
                    <td
                      className={`px-4 py-2 text-center font-semibold ${
                        item.daily_change_percent.startsWith("-")
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {item.daily_change_percent.startsWith("-") ? (
                        <FaArrowDown />
                      ) : (
                        <FaArrowUp />
                      )}{" "}
                      {item.daily_change_percent}%
                    </td>
                    <td className="px-4 py-2 text-center">{item.buy_irt_price}</td>
                    <td className="px-4 py-2 text-center">{item.sell_irt_price}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleNavigateToCurrencyInfo(item.id)}
                        className="px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow transition-transform duration-300 transform hover:scale-105"
                      >
                        معامله
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    داده‌ای موجود نیست
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* صفحه‌بندی */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-full ${
                  index + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
