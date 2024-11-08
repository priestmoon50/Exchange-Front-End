// src/app/components/CategoryFilter.tsx
import React from "react";

// ثابت برای دسته‌بندی‌ها
const CATEGORIES = [
  "دیفای",
  "حریم خصوصی",
  "متاورس",
  "قابل استخراج",
  "میم کوین",
  "استیبل کوین",
  "توکن",
  "ICO",
];

// ثابت‌های استایل برای دکمه‌ها
const DEFAULT_BUTTON_STYLE = "w-[130px] h-[47px] rounded-md bg-[#F7F7F7] text-gray-800 hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105";
const ACTIVE_BUTTON_STYLE = "w-[130px] h-[47px] rounded-md bg-[#1652F0] text-white hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105";

const CategoryFilter: React.FC = () => {
  const handleFilterClick = (category: string) => {
    console.log(`Filter by: ${category}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {CATEGORIES.slice().reverse().map((category, index) => (
        <button
          key={index}
          className={category === "دیفای" ? ACTIVE_BUTTON_STYLE : DEFAULT_BUTTON_STYLE}
          onClick={() => handleFilterClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
