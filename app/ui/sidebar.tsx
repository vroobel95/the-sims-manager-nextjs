import AppLinks from './app-actions/app-links';
import UserLinks from './user-actions/user-links';

export default function Sidebar() {
  return (
    <div className='h-[calc(100vh)] w-16 group relative flex top-[48px] left-0 bg-white text-green group pl-4 flex-col shadow-md hover:w-40 transition-all duration-300'>
      <div className='w-40 flex flex-col space-y-4 py-4 justify-between h-[calc(100vh - 88px)]'>
        <AppLinks />
        <UserLinks />
      </div>
    </div>
  );
}
