// components/PriceRow.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { PriceData } from "../../types";

interface PriceRowProps {
  item: PriceData;
}

const PriceRow: React.FC<PriceRowProps> = ({ item }) => {
  const router = useRouter();

  const handleButtonClick = () => router.push(`/currency-info/${item.id}`);

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
      <td className="price-cell w-[150px] px-3 py-2 text-right">
        <div className="flex justify-end items-center gap-2 font-mono">
          <span className="text-right">{formattedPrice}</span>
          <span className="whitespace-nowrap">{unit}</span>
        </div>
      </td>
    );
  };

  const renderButton = () => (
    <td className="w-[200px] px-6 py-4 text-center align-middle">
      <button
        onClick={handleButtonClick}
        className="w-[130px] h-[47px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow transition-transform duration-300 transform hover:scale-105 opacity-100"
      >
        معامله
      </button>
    </td>
  );

  const renderChangePercentCell = () => (
    <td
      className={`w-[150px] px-6 py-4 text-right font-semibold ${getDailyChangeClass()} font-mono align-middle`}
    >
      {isNegativeChange ? "" : "+"}
      {toPersianDigits(dailyChangePercent.toFixed(2))}%
    </td>
  );

  const renderNameCell = () => (
    <td className="w-[200px] px-6 py-4 text-right align-middle">
      <div className="flex items-center gap-2 justify-end">
        <span className="inline-block text-center">{item.fa_name}</span>
        <img
          src={item.icon}
          alt={item.fa_name}
          className="w-5 h-5 inline-block"
        />
      </div>
    </td>
  );

  return (
    <tr className="hover:bg-gray-50 text-lg sm:text-xl">
      {renderButton()}
      {renderPriceCell(item.sell_irt_price, "تومان")}
      {renderPriceCell(item.buy_irt_price, "تومان")}
      {renderChangePercentCell()}
      {renderPriceCell(item.price, "$")}
      {renderNameCell()}
    </tr>
  );
};

export default PriceRow;
