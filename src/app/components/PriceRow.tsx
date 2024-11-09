// src/app/components/PriceRow.tsx

import React from "react";
import Link from "next/link";
import { PriceData } from "../../types";
import MobilePriceRow from "./MobilePriceRow";

interface PriceRowProps {
  item: PriceData;
}

const PriceRow: React.FC<PriceRowProps> = ({ item }) => {
  const dailyChangePercent = parseFloat(item.daily_change_percent);
  const isNegativeChange = dailyChangePercent < 0;

  const getDailyChangeClass = () =>
    isNegativeChange ? "text-red-500" : "text-green-500";

  const toPersianDigits = (number: number | string) => {
    return number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  };

  const renderPriceCell = (price: string | number, unit: string) => {
    const formattedPrice = new Intl.NumberFormat("fa-IR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(typeof price === "string" ? parseFloat(price) : price);

    return (
      <td className="price-cell w-[100px] sm:w-[150px] px-3 py-2 text-right">
        <div className="flex justify-end items-center gap-2 font-mono">
          <span className="text-right text-xs sm:text-sm">
            {formattedPrice}
          </span>
          <span className="whitespace-nowrap text-xs">{unit}</span>
        </div>
      </td>
    );
  };

  const renderButton = () => (
    <td className="w-full sm:w-[120px] px-4 py-2 text-center align-middle">
      <div className="flex justify-center">
        <Link
          href={`/currency-info/${item.id}`}
          prefetch={true}
          className="w-full sm:w-[100px] h-[40px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          معامله
        </Link>
      </div>
    </td>
  );

  const renderChangePercentCell = () => (
    <td
      className={`w-[80px] sm:w-[100px] px-4 py-2 text-right font-semibold ${getDailyChangeClass()} font-mono align-middle text-xs sm:text-sm`}
    >
      {isNegativeChange ? "" : "+"}
      {toPersianDigits(dailyChangePercent.toFixed(2))}%
    </td>
  );

  const renderNameCell = () => (
    <td className="w-[120px] sm:w-[180px] px-4 py-2 text-right align-middle">
      <div className="flex items-center gap-2 justify-end text-xs sm:text-sm">
        <span className="inline-block text-center">{item.fa_name}</span>
        <img
          src={item.icon}
          alt={item.fa_name}
          className="w-4 h-4 sm:w-5 sm:h-5 inline-block"
        />
      </div>
    </td>
  );

  return (
    <>
      {/* نمایش MobilePriceRow در موبایل */}
      <div className="sm:hidden">
        <MobilePriceRow item={item} />
      </div>
      {/* نمایش نسخه جدول در دسکتاپ و تبلت */}
      <tr className="hidden sm:table-row hover:bg-gray-50 text-xs sm:text-sm">
        {renderButton()}
        {renderPriceCell(item.sell_irt_price, "تومان")}
        {renderPriceCell(item.buy_irt_price, "تومان")}
        {renderChangePercentCell()}
        {renderPriceCell(item.price, "$")}
        {renderNameCell()}
      </tr>
    </>
  );
};

export default PriceRow;
