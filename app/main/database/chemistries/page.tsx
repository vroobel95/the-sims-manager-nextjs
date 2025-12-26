import Table from '@/app/ui/database/chemistries/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chemistries',
};

export default async function Page() {
  return (
    <div className='max-h-[calc(100vh-88px)] flex flex-col gap-5 pt-5 pr-3'>
      <div className='flex items-center justify-between'>
        <h1 className={`text-2xl`}>Chemistries</h1>
      </div>
      <Table />
    </div>
  );
}
