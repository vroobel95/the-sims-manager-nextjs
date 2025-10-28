// import { DatabaseTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/database/aspirations/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Aspirations',
};

export default async function Page() {
  // Uncomment when implementing search functionality
  // const searchParams = await props.searchParams;
  // These will be used when implementing search and pagination
  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className='max-h-[calc(100vh-88px)] flex flex-col gap-5 pt-5 pr-3'>
      <div className='flex items-center justify-between'>
        <h1 className={`text-2xl`}>Aspirations</h1>
      </div>
      {/* <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder="Search invoices..." />
        <CreateSim />
      </div> */}
      {/* <Suspense
        key={query + currentPage}
        fallback={<DatabaseTableSkeleton />}
      > */}
      <Table />
      {/* query={query} currentPage={currentPage} */}
      {/* </Suspense> */}
    </div>
  );
}
