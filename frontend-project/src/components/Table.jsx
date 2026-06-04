import React from 'react';
import { cn } from '../lib/utils';

const Table = ({ columns, data, className = '', caption }) => {
  return (
    <div
      className={cn(
        'overflow-x-auto rounded-lg border border-border bg-card shadow-sm',
        className
      )}
    >
      <table className="min-w-full text-left border-collapse">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="border-b border-border bg-muted/80">
            {columns.map((col, idx) => (
              <th
                key={col.accessor ?? col.header ?? idx}
                className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-low"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={row.id ?? rowIndex}
                className="transition-colors hover:bg-muted/40"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={col.accessor ?? colIndex}
                    className="px-4 py-3 text-sm text-text-high whitespace-nowrap"
                  >
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-10 text-center text-sm text-text-low"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
