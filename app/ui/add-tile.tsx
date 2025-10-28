import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface AddTileProps {
  url: string;
}

export default function AddTile({ url }: AddTileProps) {
  return (
    <Link
      href={url}
      className='group relative flex flex-col items-center overflow-hidden rounded-xl shadow-sm hover:shadow-md bg-white cursor-pointer border border-green-100 transition-all duration-300 hover:-translate-y-1'
    >
      <div className='flex items-center justify-center w-40 h-40 bg-green-50/50 group-hover:bg-green-50 transition-colors duration-300'>
        <div className='p-4 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300'>
          <PlusIcon className='w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300' />
        </div>
      </div>
      <div className='w-full p-3 text-center bg-white border-t border-gray-50'>
        <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300'>
          Add New
        </p>
      </div>
    </Link>
  );
}
