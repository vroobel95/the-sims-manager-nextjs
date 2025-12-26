'use client';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

export interface Column {
  key: string;
  label: string;
  icon?: ReactNode;
  iconUrl?: string;
}

export interface Action<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  id: string;
  label: string;
  onClick: (row: T) => void;
  variant?: 'default' | 'danger';
}

interface TableProps<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  columns: Column[];
  data: T[];
  actions?: Action<T>[];
  rowKey?: string;
  showAddButton?: boolean;
  onAdd?: () => void;
}

export default function Table<
  T extends Record<string, unknown> = Record<string, unknown>
>({
  columns,
  data,
  actions = [],
  rowKey = 'id',
  showAddButton = false,
  onAdd,
}: TableProps<T>) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const hasIcon = columns.some((col) => col.icon || col.iconUrl);
  const hasActions = actions.length > 0;

  const handleMenuToggle = (rowId: string) => {
    setOpenMenuId(openMenuId === rowId ? null : rowId);
  };

  const handleAction = (action: Action<T>, row: T) => {
    action.onClick(row);
    setOpenMenuId(null);
  };

  if (data.length === 0) {
    return (
      <div className='mt-6 text-center py-12'>
        <p className='text-gray-500 dark:text-gray-400'>No data available</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      {showAddButton && (
        <div className='flex justify-end'>
          <button
            onClick={onAdd}
            className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500'
          >
            Add
          </button>
        </div>
      )}
      <div className='mt-6 w-full overflow-x-auto rounded-xl border border-gray-100 shadow-sm bg-white'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b border-gray-100 bg-gray-50'>
              {hasIcon && (
                <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>
                  Icon
                </th>
              )}
              {columns.map(
                (col) =>
                  !col.iconUrl && (
                    <th
                      key={col.key}
                      className='px-6 py-4 text-left text-sm font-semibold text-gray-700'
                    >
                      {col.label}
                    </th>
                  )
              )}
              {hasActions && (
                <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => {
              const rowId = row[rowKey]?.toString() || Math.random().toString();
              const iconColumn = columns.find((col) => col.icon || col.iconUrl);
              const isLastRow = rowIndex === data.length - 1;
              const iconUrl = iconColumn?.iconUrl
                ? (row[iconColumn.iconUrl] as string)
                : '';

              return (
                <tr
                  key={rowId}
                  className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                    isLastRow ? '' : ''
                  }`}
                >
                  {hasIcon && (
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {iconColumn && (
                        <div className='flex items-center overflow-hidden'>
                          {iconUrl ? (
                            <Image
                              src={iconUrl}
                              alt='icon'
                              width={40}
                              height={40}
                              className='object-cover'
                            />
                          ) : (
                            <div className='flex items-center w-10 h-10'>
                              {iconColumn.icon}
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  )}
                  {columns.map(
                    (col) =>
                      !col.iconUrl && (
                        <td
                          key={`${rowId}-${col.key}`}
                          className='px-6 py-4 text-sm text-gray-800 font-medium'
                        >
                          {row[col.key] as ReactNode}
                        </td>
                      )
                  )}
                  {hasActions && (
                    <td className='w-5 px-6 py-4 relative'>
                      <button
                        onClick={() => handleMenuToggle(rowId)}
                        className='inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500'
                        aria-label='Actions'
                      >
                        <EllipsisHorizontalIcon className='w-4 h-4' />
                      </button>

                      {openMenuId === rowId && (
                        <div className='absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-lg z-10 border border-gray-100'>
                          {actions.map((action, index) => (
                            <button
                              key={action.id}
                              onClick={() => handleAction(action, row)}
                              className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                                action.variant === 'danger'
                                  ? 'text-red-600 hover:bg-red-50 active:bg-red-100'
                                  : 'text-gray-700 hover:bg-blue-50 active:bg-blue-100'
                              } ${index === 0 ? 'rounded-t-lg' : ''} ${
                                index === actions.length - 1
                                  ? 'rounded-b-lg'
                                  : ''
                              }`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
