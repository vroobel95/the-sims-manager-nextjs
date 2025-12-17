'use client';

export default function Spinner() {
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 pointer-events-auto'>
      <div className='flex flex-col items-center gap-4 pointer-events-none'>
        <div className='relative w-16 h-16'>
          <div className='absolute inset-0 border-4 border-gray-400 rounded-full'></div>
          <div className='absolute inset-0 border-4 border-transparent border-t-green-600 rounded-full animate-spin'></div>
        </div>
        <p className='text-white font-medium'>Loading...</p>
      </div>
    </div>
  );
}
