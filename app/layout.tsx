'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { FC, ReactNode } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useParams } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = props => {
  const { lang } = useParams();

  const { children } = props;

  return (
    <html lang={String(lang)}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={String(inter.className)}>{children}</body>
    </html>
  );
};

export default Layout;
