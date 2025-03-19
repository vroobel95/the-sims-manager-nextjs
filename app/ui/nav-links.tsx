'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavLink } from '../lib/definitions';

export default function NavLinks({
  links,
  className,
}: {
  links: NavLink[];
  className?: string;
}) {
  const pathname = usePathname();
  const [openLinks, setOpenLinks] = useState<Record<string, boolean>>({});

  const toggleNestedLinks = (linkName: string) => {
    setOpenLinks((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  return (
    <div>
      {links.map((link) => {
        const MainLinkIcon = link.icon;
        const isOpen = openLinks[link.name] || false;

        return (
          <div key={link.name} className='group'>
            <div
              onClick={() => toggleNestedLinks(link.name)}
              className={clsx(
                className,
                'flex h-[48px] items-center gap-2 text-sm font-medium hover:text-green transition-all duration-300 cursor-pointer',
                {
                  'text-green': pathname === link.href,
                }
              )}
            >
              <MainLinkIcon className='w-7 h-7 flex items-center justify-center' />
              <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden'>
                {link.name}
              </p>
            </div>
            {isOpen && link.nestedLinks && link.nestedLinks.length > 0 && (
              <div className='ml-8 mt-2 p-8 space-y-4 py-4'>
                {link.nestedLinks.map((child) => {
                  const ChildLinkIcon = child.icon;
                  return (
                    <Link
                      key={child.name}
                      href={child.href ?? ''}
                      className={clsx(
                        className,
                        'flex items-center gap-2 text-sm font-medium hover:text-green transition-all duration-300',
                        {
                          'text-green': pathname === child.href,
                        }
                      )}
                    >
                      <ChildLinkIcon className='w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden' />
                      <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden'>
                        {child.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
