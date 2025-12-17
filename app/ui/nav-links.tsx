'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  useEffect(() => {
    const checkSidebarState = () => {
      const sidebar = document.querySelector('[data-sidebar-expanded]');
      if (sidebar) {
        const expanded =
          sidebar.getAttribute('data-sidebar-expanded') === 'true';
        setIsSidebarExpanded(expanded);
      }
    };

    checkSidebarState();
    const observer = new MutationObserver(checkSidebarState);
    const sidebar = document.querySelector('[data-sidebar-expanded]');
    if (sidebar) {
      observer.observe(sidebar, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  const toggleNestedLinks = (linkName: string) => {
    setOpenLinks((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  return (
    <div
      className={isSidebarExpanded ? '' : 'flex flex-col items-center gap-2'}
    >
      {links.map((link) => {
        const MainLinkIcon = link.icon;
        const isOpen = openLinks[link.name] || false;

        return (
          <div
            key={link.name}
            className={
              isSidebarExpanded ? 'group' : 'flex items-center justify-center'
            }
          >
            <div
              onClick={() => toggleNestedLinks(link.name)}
              className={clsx(
                className,
                'flex items-center cursor-pointer transition-all duration-300',
                {
                  'h-[48px] p-2 gap-2 text-sm font-medium hover:text-green-700':
                    isSidebarExpanded,
                  'w-20 justify-center': !isSidebarExpanded,
                  'p-2 pl-6': !isSidebarExpanded,
                }
              )}
            >
              <MainLinkIcon className='w-7 h-7 flex items-center justify-center flex-shrink-0 text-green-600' />
              <p
                className='overflow-hidden whitespace-nowrap transition-opacity duration-300'
                style={{ opacity: isSidebarExpanded ? 1 : 0 }}
              >
                {link.name}
              </p>
            </div>
            {isOpen &&
              link.nestedLinks &&
              link.nestedLinks.length > 0 &&
              isSidebarExpanded && (
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
                        <ChildLinkIcon className='w-7 h-7 flex items-center justify-center flex-shrink-0' />
                        <p className='overflow-hidden whitespace-nowrap'>
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
