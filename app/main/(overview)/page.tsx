import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Main Page',
};

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Main Page</h1>
    </main>
  );
}
