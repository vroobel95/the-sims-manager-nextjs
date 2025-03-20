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
      className='relative flex flex-col items-center overflow-hidden rounded-lg shadow-md bg-gray-100 cursor-pointer'
      key={key}
    >
      <div className='relative w-40 h-40'>
        <img
          src={icon_url ?? ''}
          alt={displayName}
          className='absolute inset-0 object-cover w-full h-full'
        />
      </div>
      <div className='w-full p-2 text-center bg-white'>
        <p className='text-sm font-medium text-gray-800'>{displayName}</p>
      </div>
    </Link>
  );
}
