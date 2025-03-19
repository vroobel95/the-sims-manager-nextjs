// import { DatabaseTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/database/aspirations/table';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Aspirations',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`text-2xl`}>Aspirations</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        {/* <Search placeholder="Search invoices..." /> */}
        {/* <CreateSim /> */}
      </div>
      <Suspense
        key={query + currentPage}
        // fallback={<DatabaseTableSkeleton />}
      >
        <Table />
        {/* query={query} currentPage={currentPage} */}
      </Suspense>
    </div>
  );
}
