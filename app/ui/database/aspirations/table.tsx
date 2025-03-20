import { fetchAspirations } from '@/app/lib/aspirations/data';
import AddTile from '../../add-tile';
import Tile from '../../tile';

export default async function AspirationsTable() {
  const aspirations = await fetchAspirations();

  return (
    <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
      {aspirations?.map((aspiration) => (
        <Tile
          key={aspiration.id}
          displayName={aspiration.name}
          url={`/main/database/aspirations/${aspiration.id}/edit`}
          icon_url={aspiration.icon_url}
        />
      ))}
    </div>
  );
}
