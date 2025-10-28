import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Navbar from './ui/navbar';
import Sidebar from './ui/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex h-screen'>
          <Navbar />
          <div className='w-full flex-none md:w-40'>
            <Sidebar />
          </div>
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
