import Sidebar from '../ui/sidebar';

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12 flex-1 '>
        {children}
      </div>
    </div>
  );
}
