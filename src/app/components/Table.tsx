// src/app/components/Table.tsx

import React, { FC } from 'react';
import { TableProps } from '../../types';

const Table: FC<TableProps> = ({ headers, children, searchBar }) => (
  <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-full">
    <table className="min-w-full bg-white">
      <thead className="bg-table-header hidden md:table-header-group">
        <tr>
          <th className="px-4 py-4 text-gray-800 text-center align-middle w-[180px]">
            {searchBar} {/* قرار دادن نوار جستجو در اولین ستون */}
          </th>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-4 py-4 text-gray-800 text-center align-middle w-[180px] text-lg font-semibold text-right"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-sm sm:text-base">{children}</tbody>
    </table>
  </div>
);

export default Table;
