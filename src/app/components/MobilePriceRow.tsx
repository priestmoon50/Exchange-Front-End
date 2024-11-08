import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PriceData } from "../../types";

interface MobilePriceRowProps {
  item: PriceData;
}

const MobilePriceRow: React.FC<MobilePriceRowProps> = ({ item }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => router.push(`/currency-info/${item.id}`);
  const dailyChangePercent = parseFloat(item.daily_change_percent);
  const isNegativeChange = dailyChangePercent < 0;

  const getDailyChangeClass = () =>
    isNegativeChange ? "text-red-500" : "text-green-500";

  const toPersianDigits = (number: number | string) =>
    number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

  const formatPrice = (price: string | number) =>
    toPersianDigits(
      new Intl.NumberFormat("fa-IR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(typeof price === "string" ? parseFloat(price) : price)
    );

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden bg-white shadow rounded-lg p-4 mb-2 border border-gray-200 w-full mx-auto">
      {/* ردیف اصلی با درصد تغییر، ارزش دلاری و نام با آیکون در راست */}
      <div
        className="flex items-center justify-between mb-3 cursor-pointer"
        onClick={toggleOpen}
      >
        {/* درصد تغییرات */}
        <div className={`text-left ${getDailyChangeClass()} font-semibold text-sm`}>
          {isNegativeChange ? "" : "+"}
          {toPersianDigits(dailyChangePercent.toFixed(2))}%
        </div>

        {/* ارزش دلاری */}
        <div className="text-center font-bold">
          {formatPrice(item.price)}$
        </div>

        {/* نام و آیکون ارز */}
        <div className="flex items-center gap-2 text-right">
          <img src={item.icon} alt={item.fa_name} className="w-5 h-5" />
          <span className="font-bold">{item.fa_name}</span>
        </div>
      </div>

      {/* بخش جزئیات که فقط در صورت باز بودن نمایش داده می‌شود */}
      {isOpen && (
        <div className="text-right text-gray-700">
          <div className="mt-2">
            <span className="text-gray-500">فروش به والت: </span>
            {formatPrice(item.sell_irt_price)} تومان
          </div>
          <div className="mt-1">
            <span className="text-gray-500">خرید از والت: </span>
            {formatPrice(item.buy_irt_price)} تومان
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleButtonClick}
              className="w-full max-w-[120px] h-[40px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              معامله
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilePriceRow;
