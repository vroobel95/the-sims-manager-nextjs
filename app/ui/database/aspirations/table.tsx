'use client';

import { useAspirations } from '@/app/lib/aspirations/useAspirations';
import Spinner from '../../spinner';
import Tile from '../../tile';

export default function AspirationsTable() {
  const { aspirations, isLoading } = useAspirations();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
      {aspirations?.map((aspiration) => (
        <Tile
          key={aspiration.id}
          displayName={aspiration.name}
          icon_url={aspiration.icon_url}
        />
      ))}
    </div>
  );
}
