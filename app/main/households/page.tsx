import Tiles from '@/app/ui/households/tiles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Households',
};

export default function Page() {
  return (
    <div className='max-h-[calc(100vh-88px)] flex flex-col gap-5 pt-5 pr-3'>
      <div className='flex items-center justify-between'>
        <h1 className={`text-2xl`}>Households</h1>
      </div>
      <Tiles />
    </div>
  );
}
