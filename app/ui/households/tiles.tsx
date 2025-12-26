'use client';

import { useHouseholds } from '@/app/lib/households/useHouseholds';
import AddTile from '../add-tile';
import Spinner from '../spinner';
import Tile from '../tile';

export default function HouseholdsTiles() {
  const { households, isLoading } = useHouseholds();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='mt-6 grid grid-cols-4 gap-4'>
      {households?.map((household) => (
        <Tile
          key={household.id}
          id={household.id}
          url={`/main/households/${household.id}`}
          displayName={household.name}
          icon_url={household.image_url}
        />
      ))}
      <AddTile url='/main/households/add' />
    </div>
  );
}
