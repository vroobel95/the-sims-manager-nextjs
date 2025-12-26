'use client';

import { NavLink } from '@/app/lib/definitions';
import {
  AcademicCapIcon,
  BoltIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  FilmIcon,
  HomeIcon,
  HomeModernIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  TableCellsIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import NavLinks from '../nav-links';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/main', icon: HomeIcon },
  {
    name: 'Sims',
    href: '/main/sims',
    icon: UserGroupIcon,
  },
  {
    name: 'Households',
    href: '/households',
    icon: HomeModernIcon,
  },
  {
    name: 'Buildings',
    href: '/buildings',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Notes',
    href: '/notes',
    icon: PencilSquareIcon,
  },
  {
    name: 'Database',
    href: '/main/database',
    icon: TableCellsIcon,
    nestedLinks: [
      {
        name: 'Aspirations',
        href: '/main/database/aspirations',
        icon: SparklesIcon,
      },
      {
        name: 'Badges',
        href: '/main/database/badges',
        icon: ShieldCheckIcon,
      },
      {
        name: 'Careers',
        href: '/main/database/careers',
        icon: BriefcaseIcon,
      },
      {
        name: 'Chemistries',
        href: '/main/database/chemistries',
        icon: BoltIcon,
      },
      {
        name: 'College Majors',
        href: '/main/database/collegeMajors',
        icon: AcademicCapIcon,
      },
      {
        name: 'Hobbies',
        href: '/main/database/hobbies',
        icon: FilmIcon,
      },
      {
        name: 'Lifetime Wants',
        href: '/main/database/lifetimeWants',
        icon: StarIcon,
      },
    ],
  },
] as NavLink[];

export default function AppLinks() {
  return <NavLinks links={links} />;
}
