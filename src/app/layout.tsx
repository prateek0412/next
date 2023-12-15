import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '../store/provider';

import { setGlobalState } from '../store/serverSideState';
import { GlobalKeys, Language } from '../types/global.types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setGlobalState(GlobalKeys.USERS_LANGUAGE, Language.EN);

  return (
    <html>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
