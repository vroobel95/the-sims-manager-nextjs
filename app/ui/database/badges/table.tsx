'use client';

import { useBadges } from '@/app/lib/badges/useBadges';
import Spinner from '../../spinner';
import Tile from '../../tile';

export default function BadgesTable() {
  const { badges, isLoading } = useBadges();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
      {badges?.map((badge) => (
        <Tile
          key={badge.id}
          displayName={`${badge.name} - ${
            badge.badge_rank.charAt(0).toUpperCase() + badge.badge_rank.slice(1)
          }`}
          icon_url={badge.icon_url}
        />
      ))}
    </div>
  );
}
