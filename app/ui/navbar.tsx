import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='navbar max-h-[88px] w-full fixed top-0 flex items-center bg-[#3CAAD6] text-white shadow-md z-50'>
      <div className='navbar-logo flex items-center space-x-4'>
        <Image
          className='h-12 w-auto max-h-[88px]'
          src='/plumbob.png'
          alt='Logo'
          width={48}
          height={88}
        />
        <span className='font-sims'>The Sims Manager</span>
      </div>
    </nav>
  );
}
