// src/app/components/Pagination.tsx
import React from "react";
import { PaginationProps } from "../../types"; // نوع PaginationProps از types.ts وارد می‌شود

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
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
  );
};

export default Pagination;
