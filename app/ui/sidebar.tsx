import AppLinks from './app-actions/app-links';
import UserLinks from './user-actions/user-links';

export default function Sidebar() {
  return (
    <div className='h-[calc(100vh)] w-16 fixed top-[48px] left-0 bg-white text-green transition-all duration-300 hover:w-40 group pl-4 flex flex-col'>
      <AppLinks />
      <UserLinks />
    </div>
  );
}
