import { Sim } from '@/app/lib/definitions';
import Image from 'next/image';

export default async function SimsTable() {
  // const sims = await fetchFilteredSims(query, currentPage);
  // return (
  //   <div className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
  //     {sims?.map((sim) => (
  //       <div
  //         key={sim.id}
  //         className='rounded-lg bg-white shadow max-w-60 max-h-60'
  //       >
  //         <div className='relative'>
  //           <Image
  //             src={sim.image_url ?? ''}
  //             className='rounded-t-lg'
  //             width={64}
  //             height={64}
  //             layout='responsive'
  //             objectFit='cover'
  //             alt={`${sim.name}'s profile picture`}
  //           />
  //           <div className='absolute bottom-0 w-full bg-light-blue opacity-85 p-2'>
  //             <p className='text-lg font-medium text-white'>{sim.name}</p>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}
