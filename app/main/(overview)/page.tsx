import {
  AdjustmentsHorizontalIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home - The Sims Manager',
};

export default async function Page() {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'Manage Sims',
      description:
        'Create and organize your Sims with detailed profiles and aspirations',
      href: '/main/sims',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: SparklesIcon,
      title: 'Aspirations',
      description: 'Set and track Sim aspirations and life goals',
      href: '/main/database/aspirations',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Customize',
      description: 'Manage game settings and Sim configurations',
      href: '/main/database',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <main className='w-full flex gap-5 flex-col p-8'>
      {/* Hero Section */}
      <section className='mb-12'>
        <div className='rounded-lg bg-gradient-to-r from-green-600 to-green-700 p-8 text-white shadow-lg'>
          <h1 className='mb-2 text-4xl font-bold'>
            Welcome to The Sims Manager
          </h1>
          <p className='text-lg text-green-50'>
            Your comprehensive tool to manage and organize all your Sims
            gameplay data
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className='group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg'
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />
                <div className='relative'>
                  <div
                    className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.color} p-3`}
                  >
                    <Icon className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='mb-2 font-semibold text-gray-900'>
                    {feature.title}
                  </h3>
                  <p className='text-sm text-gray-600'>{feature.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Stats */}
      <section className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
        <div className='rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow'>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100'>
            <UserGroupIcon className='h-6 w-6 text-blue-600' />
          </div>
          <p className='text-sm text-gray-600'>Total Sims</p>
          <p className='text-3xl font-bold text-gray-900'>—</p>
        </div>
        <div className='rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow'>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100'>
            <SparklesIcon className='h-6 w-6 text-purple-600' />
          </div>
          <p className='text-sm text-gray-600'>Active Round</p>
          <p className='text-3xl font-bold text-gray-900'>—</p>
        </div>
        <div className='rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow'>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100'>
            <BuildingOfficeIcon className='h-6 w-6 text-amber-600' />
          </div>
          <p className='text-sm text-gray-600'>Number of Households</p>
          <p className='text-3xl font-bold text-gray-900'>—</p>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className='mt-12 rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8'>
        <h2 className='mb-4 text-xl font-bold text-gray-900'>
          Getting Started
        </h2>
        <ul className='space-y-3 text-gray-700'>
          <li className='flex items-start gap-2 pt-2'>
            <span className='mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white'>
              1
            </span>
            <p>
              Visit the <span className='font-semibold'>Sims</span> section to
              create and manage your Sim characters
            </p>
          </li>
          <li className='flex items-start gap-2 pt-2'>
            <span className='mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white'>
              2
            </span>
            <p>
              Browse <span className='font-semibold'>Badges</span> and{' '}
              <span className='font-semibold'>Aspirations</span> in the Database
              section
            </p>
          </li>
          <li className='flex items-start gap-2 pt-2'>
            <span className='mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white'>
              3
            </span>
            <p>Track your Sims progress and achievements as you play</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
