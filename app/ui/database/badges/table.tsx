import { fetchBadges } from '@/app/lib/badges/data';
import Tile from '../../tile';

export default async function BadgesTable() {
  const badges = await fetchBadges();

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
