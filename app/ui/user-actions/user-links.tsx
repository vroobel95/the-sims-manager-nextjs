'use client';

import {
  ArrowLeftStartOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import NavLinks from '../nav-links';

const links = [
  {
    name: 'Your Profile',
    href: '/profile',
    icon: UserCircleIcon,
  },
  {
    name: 'Log Out',
    // href: '/households',
    icon: ArrowLeftStartOnRectangleIcon,
  },
];

export default function UserLinks() {
  return <NavLinks links={links} />;
}
