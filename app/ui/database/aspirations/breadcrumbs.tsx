import { clsx } from 'clsx';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label='Breadcrumb' className='mb-8 mt-4 px-4 md:px-0'>
      <ol className='flex flex-wrap items-center gap-2 text-sm md:text-base max-w-screen-xl mx-auto'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className='flex items-center'
          >
            <Link
              href={breadcrumb.href}
              className={clsx(
                'transition-all duration-200 rounded-lg px-4 py-2',
                'focus:outline-none focus:ring-2 focus:ring-blue-500/40',
                index === 0 && 'flex items-center gap-1.5',
                breadcrumb.active
                  ? 'bg-blue-50 text-blue-700 font-medium shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 active:bg-blue-50'
              )}
            >
              {index === 0 && (
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              )}
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <svg
                className='h-5 w-5 flex-none text-gray-400 mx-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
