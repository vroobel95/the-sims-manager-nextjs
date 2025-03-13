import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Main Page',
};

export default async function Page() {
  return (
    <main className=''>
      <span>Welcome to The Sims Manager</span>
    </main>
  );
}
