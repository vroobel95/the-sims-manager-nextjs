import Link from 'next/link';

interface TileProps {
  key: string;
  url: string;
  displayName: string;
  icon_url?: string;
}

export default function Tile({ key, url, displayName, icon_url }: TileProps) {
  return (
    <Link
      href={url}
      className='group relative flex flex-col items-center overflow-hidden rounded-xl shadow-sm hover:shadow-md bg-white cursor-pointer border border-gray-100 transition-all duration-300 hover:-translate-y-1'
      key={key}
    >
      <div className='relative w-40 h-40 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
        <img
          src={icon_url ?? ''}
          alt={displayName}
          className='absolute inset-0 object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='w-full p-3 text-center bg-white border-t border-gray-50'>
        <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300'>
          {displayName}
        </p>
      </div>
    </Link>
  );
}
