import React, { useState } from "react";

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

const DEFAULT_BUTTON_STYLE =
  "w-full sm:w-[100px] h-[40px] rounded-md bg-[#F7F7F7] text-gray-800 hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 text-sm md:text-base";
const ACTIVE_BUTTON_STYLE =
  "w-full sm:w-[100px] h-[40px] rounded-md bg-[#1652F0] text-white hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 text-sm md:text-base";

const CategoryFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("دیفای");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // بستن منو پس از انتخاب دسته‌بندی
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mb-4">
      {/* نمایش کشویی برای موبایل */}
      <div className="flex flex-col items-center relative sm:hidden">
        <button
          className={ACTIVE_BUTTON_STYLE}
          onClick={toggleDropdown}
        >
          {selectedCategory}
          <span className="ml-2 transform transition-transform duration-300">
            {isDropdownOpen ? "▲" : "▼"}
          </span>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-md shadow-lg z-10">
            {CATEGORIES.slice(0, 3).filter((category) => category !== selectedCategory).map(
              (category, index) => (
                <button
                  key={index}
                  className={DEFAULT_BUTTON_STYLE}
                  onClick={() => handleFilterClick(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {/* نمایش به‌صورت دکمه‌های عادی برای تبلت و دسکتاپ */}
      <div className="hidden sm:flex flex-wrap justify-center gap-5">
        {CATEGORIES.map((category, index) => (
          <button
            key={index}
            className={
              category === selectedCategory ? ACTIVE_BUTTON_STYLE : DEFAULT_BUTTON_STYLE
            }
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
