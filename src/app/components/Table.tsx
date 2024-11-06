// components/Table.tsx
import React, { FC, ReactNode } from 'react';

interface TableProps {
  headers: Array<string | JSX.Element>;
  children: ReactNode;
}

const Table: FC<TableProps> = ({ headers, children }) => (
  <div className="overflow-hidden rounded-lg shadow-lg">
    <table className="min-w-full bg-white">
      <thead className="bg-table-header">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className={`px-2 py-1 sm:px-3 sm:py-2 text-gray-800 text-center align-middle ${
                index === 0 ? 'w-[200px]' : ''
              }`}
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
