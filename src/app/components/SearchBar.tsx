// components/SearchBar.tsx
import React from 'react';
import { SearchBarProps } from '../../types'; // نوع SearchBarProps از types.ts وارد می‌شود

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
  <div className="relative w-full max-w-xs mx-auto">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="... جستجو"
      className="w-full px-4 py-2 pr-10 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
      🔍
    </span>
  </div>
);

export default SearchBar;
