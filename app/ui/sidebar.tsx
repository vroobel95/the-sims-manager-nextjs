'use client';

import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import AppLinks from './app-actions/app-links';
import UserLinks from './user-actions/user-links';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    // Set CSS variable for sidebar width on desktop
    if (typeof window !== 'undefined') {
      const width = isExpanded ? '256px' : '80px';
      document.documentElement.style.setProperty('--sidebar-width', width);
    }
  }, [isExpanded]);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className='md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors'
        aria-label='Toggle menu'
      >
        {isMobileOpen ? (
          <XMarkIcon className='w-6 h-6' />
        ) : (
          <Bars3Icon className='w-6 h-6' />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-30 md:hidden'
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Desktop */}
      <aside
        className={`hidden md:fixed md:flex md:top-[48px] md:left-0 md:h-[calc(100vh-48px)] md:bg-white md:text-gray-900 md:flex-col md:shadow-lg md:transition-all md:duration-300 md:z-40 md:border-r md:border-gray-200 ${
          isExpanded ? 'md:w-64' : 'md:w-20'
        }`}
        data-sidebar-expanded={isExpanded}
      >
        {/* Toggle Button */}
        <div className='flex items-center justify-center px-4 py-4 border-b border-gray-200'>
          {isExpanded && (
            <h2 className='font-semibold text-gray-900 flex-1'>Menu</h2>
          )}
          <button
            onClick={toggleExpand}
            className='p-1 hover:bg-gray-100 rounded transition-colors'
            aria-label='Toggle sidebar'
          >
            {isExpanded ? (
              <ChevronLeftIcon className='w-5 h-5 text-green-600' />
            ) : (
              <ChevronRightIcon className='w-5 h-5 text-green-600' />
            )}
          </button>
        </div>

        {/* Navigation Content */}
        <div className='flex-1 flex flex-col justify-between py-6 px-4 overflow-y-auto'>
          <div className={isExpanded ? '' : 'flex flex-col items-center gap-2'}>
            <AppLinks />
          </div>
          <div className={isExpanded ? '' : 'flex flex-col items-center gap-2'}>
            <UserLinks />
          </div>
        </div>
      </aside>

      {/* Sidebar Mobile */}
      <aside
        className={`md:hidden fixed top-[48px] left-0 h-[calc(100vh-48px)] w-64 bg-white text-gray-900 flex flex-col shadow-lg transition-all duration-300 z-40 border-r border-gray-200 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex-1 flex flex-col space-y-8 py-6 px-4 overflow-y-auto'>
          <AppLinks />
          <UserLinks />
        </div>
      </aside>
    </>
  );
}
