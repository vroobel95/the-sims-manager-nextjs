'use client';

import {
  BuildingOfficeIcon,
  HomeIcon,
  HomeModernIcon,
  PencilSquareIcon,
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
];

export default function AppLinks() {
  return <NavLinks links={links} />;
}
