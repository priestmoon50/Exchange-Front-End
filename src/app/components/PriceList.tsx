"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Table from "./Table";

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

const fetchPrices = async (
  page: number,
  search: string = ""
): Promise<PriceData[]> => {
  const response = await axios.post("https://b.wallet.ir/coinlist/list", {
    page: page,
    limit: itemsPerPage,
    search: search,
    currency_code: "",
  });

  return response.data.items || [];
};

const PriceList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const { data = [], isLoading } = useQuery({
    queryKey: ["prices", currentPage, searchTerm],
    queryFn: () => fetchPrices(currentPage, searchTerm),
  });

  const totalPages = 9;

  const headers = [
    <div className="relative w-full sm:w-[244px] h-[48px] mb-2 sm:mb-1">
      <input
        type="text"
        placeholder="... جستجو"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-full border border-gray-300 rounded-lg text-gray-800 pl-4 pr-10 focus:outline-none focus:border-blue-400"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        🔍
      </span>
    </div>,
    "فروش به والت",
    "خرید از والت",
    "تغییر روزانه",
    "ارزش دلاری",
    "نام رمز ارز",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 rtl">
      <div className="container mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-10 mt-4">
          لیست قیمت لحظه‌ای ارزهای دیجیتال
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {[
            "دیفای",
            "حریم خصوصی",
            "متاورس",
            "قابل استخراج",
            "میم کوین",
            "استیبل کوین",
            "توکن",
            "ICO",
          ]
            .reverse()
            .map((category, index) => (
              <button
                key={index}
                className={`w-[130px] h-[47px] rounded-md ${
                  category === "دنیای"
                    ? "bg-[#1652F0] text-white"
                    : "bg-[#F7F7F7] text-gray-800"
                } hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105`}
                onClick={() => console.log(`Filter by: ${category}`)}
              >
                {category}
              </button>
            ))}
        </div>

        <Table headers={headers}>
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
              <tr
                key={item.id}
                className="hover:bg-gray-50 text-xs sm:text-sm md:text-base"
              >
                <td className="px-2 md:px-4 py-1 md:py-2 text-center">
                  <button
                    onClick={() => router.push(`/currency-info/${item.id}`)}
                    style={{ background: "var(--color-main-buttons, #1652F0)" }}
                    className="w-[100px] h-[40px] rounded-md text-white hover:bg-blue-600 shadow transition-transform duration-300 transform hover:scale-105"
                  >
                    معامله
                  </button>
                </td>
                <td className="px-2 md:px-4 py-1 md:py-2 text-center">
                  {item.sell_irt_price} <span>تومان</span>
                </td>
                <td className="px-2 md:px-4 py-1 md:py-2 text-center">
                  {item.buy_irt_price} <span>تومان</span>
                </td>
                <td
                  className={`px-2 md:px-4 py-1 md:py-2 text-center font-semibold ${
                    item.daily_change_percent.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.daily_change_percent.startsWith("-") ? "" : "+"}
                  {item.daily_change_percent}%
                </td>
                <td className="px-2 md:px-4 py-1 md:py-2 text-center">
                  {item.price} <span className="text-gray-500">$</span>
                </td>
                <td className="px-2 py-1 md:px-3 md:py-1 flex items-center justify-center gap-2 text-start align-middle md:pr-8">
                  <span>{item.fa_name}</span>
                  <img src={item.icon} alt={item.fa_name} width={20} />
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
        </Table>

        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              ۱
            </button>
            {currentPage > 3 && <span className="text-gray-500">...</span>}
            {[currentPage - 1, currentPage, currentPage + 1]
              .filter((num) => num > 1 && num < totalPages)
              .map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === num
                      ? "border-2 border-blue-500 text-blue-500"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {num}
                </button>
              ))}
            {currentPage < totalPages - 2 && (
              <span className="text-gray-500">...</span>
            )}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 rounded-full ${
                currentPage === totalPages
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {totalPages}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
