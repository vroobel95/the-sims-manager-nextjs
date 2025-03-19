import { fetchAspirations } from '@/app/lib/aspirations/data';

export default async function AspirationsTable() {
  const aspirations = await fetchAspirations();

  return (
    <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
      {aspirations?.map((aspiration) => (
        <div
          key={aspiration.id}
          className='relative flex flex-col items-center overflow-hidden rounded-lg shadow-md bg-gray-100'
        >
          <div className='relative w-full h-40'>
            <img
              src={aspiration.icon_url ?? ''}
              alt={aspiration.name}
              className='absolute inset-0 object-cover w-full h-full'
            />
          </div>
          <div className='w-full p-2 text-center bg-white'>
            <p className='text-sm font-medium text-gray-800'>
              {aspiration.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
