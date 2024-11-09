import React, { useState } from "react";
import Link from "next/link";
import { PriceData } from "../../types";

interface MobilePriceRowProps {
  item: PriceData;
}

const MobilePriceRow: React.FC<MobilePriceRowProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dailyChangePercent = parseFloat(item.daily_change_percent);
  const isNegativeChange = dailyChangePercent < 0;

  const formatPrice = (price: string | number) =>
    toPersianDigits(
      new Intl.NumberFormat("fa-IR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(typeof price === "string" ? parseFloat(price) : price)
    );

  const toPersianDigits = (number: number | string) =>
    number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:hidden bg-white shadow rounded-lg p-4 mb-2 border border-gray-200 w-full max-w-md mx-auto">
      <div
        className="flex items-center justify-between mb-3 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
        onClick={toggleOpen}
      >
        <div className="text-center font-bold text-base">
          {formatPrice(item.price)}$
        </div>
        <div className={`text-left ${isNegativeChange ? "text-red-500" : "text-green-500"} font-semibold text-sm`}>
          {isNegativeChange ? "" : "+"}
          {toPersianDigits(dailyChangePercent.toFixed(2))}%
        </div>
        <div className="flex items-center gap-2 text-right">
          <img src={item.icon} alt={item.fa_name} className="w-6 h-6 rounded-full" />
          <span className="font-semibold text-sm">{item.fa_name}</span>
        </div>
      </div>
      {isOpen && (
        <div className="text-right text-gray-700">
          <div className="mt-2 flex justify-between">
            <span className="font-medium">{formatPrice(item.sell_irt_price)} تومان</span>
            <span className="text-gray-500 text-sm">:فروش به والت </span>
          </div>
          <div className="mt-1 flex justify-between">
            <span className="font-medium">{formatPrice(item.buy_irt_price)} تومان</span>
            <span className="text-gray-500 text-sm">:خرید از والت </span>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              href={`/currency-info/${item.id}`}
              prefetch={true}
              className="w-full max-w-[120px] h-[40px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-transform duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              معامله
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilePriceRow;
