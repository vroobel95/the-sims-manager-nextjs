import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface AddTileProps {
  url: string;
}

export default function AddTile({ url }: AddTileProps) {
  return (
    <Link
      href={url}
      className='relative flex flex-col items-center overflow-hidden rounded-lg shadow-md bg-white cursor-pointer justify-center border border-[#21b96b]'
    >
      <div className='relative w-30 h-30'>
        <PlusIcon stroke={'#21b96b'} />
      </div>
    </Link>
  );
}
