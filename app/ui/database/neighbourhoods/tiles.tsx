'use client';

import { useNeighbourhoods } from '@/app/lib/neighbourhoods/useNeighbourhoods';
import Spinner from '../../spinner';
import Tile from '../../tile';

export default function NeighbourhoodsTiles() {
  const { neighbourhoods, isLoading } = useNeighbourhoods();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
      {neighbourhoods?.map((neighbourhood) => (
        <Tile
          key={neighbourhood.id}
          id={neighbourhood.id}
          displayName={neighbourhood.name}
          icon_url={neighbourhood.icon_url}
        />
      ))}
    </div>
  );
}
