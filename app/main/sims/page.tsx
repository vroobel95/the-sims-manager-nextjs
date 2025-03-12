import Pagination from '@/app/ui/pagination';
import Table from '@/app/ui/sims/table';
import { SimsTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Sims',
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
  const totalPages = 2; //await fetchSimsPages(query);

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`text-2xl`}>Sims</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        {/* <Search placeholder="Search invoices..." /> */}
        {/* <CreateSim /> */}
      </div>
      <Suspense key={query + currentPage} fallback={<SimsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
