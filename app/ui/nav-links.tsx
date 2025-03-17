'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '../lib/definitions';

export default function NavLinks({
  links,
  className,
}: {
  links: NavLink[];
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href ?? ''}
            className={clsx(
              className,
              'flex h-[48px] items-center gap-2 text-sm font-medium hover:text-green transition-all duration-300',
              {
                'text-green': pathname === link.href,
              }
            )}
          >
            <LinkIcon className='w-7 h-7 flex items-center justify-center' />
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden'>
              {link.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
