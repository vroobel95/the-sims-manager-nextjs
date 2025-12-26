'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  customLabel?: string;
}

const pathSegmentLabels: { [key: string]: string } = {
  main: 'Dashboard',
  households: 'Households',
  database: 'Database',
  aspirations: 'Aspirations',
  badges: 'Badges',
  careers: 'Careers',
  chemistries: 'Chemistries',
  collegeMajors: 'College Majors',
  hobbies: 'Hobbies',
  lifetimeWants: 'Lifetime Wants',
  neighbourhoods: 'Neighbourhoods',
  zodiacSigns: 'Zodiac Signs',
  sims: 'Sims',
};

export default function Breadcrumbs({ customLabel }: BreadcrumbsProps) {
  const pathname = usePathname();

  const getBreadcrumbs = (): Breadcrumb[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: Breadcrumb[] = [];

    let currentPath = '';

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Add label for main/dashboard
      if (segment === 'main') {
        breadcrumbs.push({
          label: 'Menu',
          href: '/main',
        });
      } else if (index === segments.length - 1) {
        // Last segment - use customLabel if provided, otherwise format the segment
        if (customLabel) {
          breadcrumbs.push({
            label: customLabel,
            href: currentPath,
          });
        } else if (pathSegmentLabels[segment]) {
          breadcrumbs.push({
            label: pathSegmentLabels[segment],
            href: currentPath,
          });
        } else {
          // If no label mapping, capitalize the segment (for IDs like household names)
          breadcrumbs.push({
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
            href: currentPath,
          });
        }
      } else if (pathSegmentLabels[segment]) {
        // Middle segments with labels in our mapping
        breadcrumbs.push({
          label: pathSegmentLabels[segment],
          href: currentPath,
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label='breadcrumb' className='mb-6'>
      <ol className='flex items-center space-x-2'>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={breadcrumb.href} className='flex items-center'>
              {index > 0 && (
                <svg
                  className='mx-2 h-4 w-4 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              )}

              {isLast ? (
                <span className='text-sm font-medium text-gray-500'>
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className='text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors'
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
