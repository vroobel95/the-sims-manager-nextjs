import HouseholdDetail from '@/app/ui/households/detail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Household',
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className='max-h-[calc(100vh-88px)] flex flex-col gap-5 pt-5 pr-3 overflow-y-auto'>
      <HouseholdDetail id={id} />
    </div>
  );
}
