import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { LocaleProvider } from './lib/i18n/LocaleContext';
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
        <LocaleProvider>
          <div className='flex h-screen flex-col'>
            <Navbar />
            <div className='flex flex-1 overflow-hidden'>
              <Sidebar />
              <main
                className='flex-1 overflow-auto md:transition-all md:duration-300'
                style={{ marginLeft: 'var(--sidebar-width, 0px)' }}
              >
                {children}
              </main>
            </div>
          </div>
          <SpeedInsights />
        </LocaleProvider>
      </body>
    </html>
  );
}
