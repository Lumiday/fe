'use client';

import Header from '@/app/components/custom/common/Header';
import { usePathname } from 'next/navigation';

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldHideHeader = pathname === '/signin';

  return (
    <>
      {!shouldHideHeader && <Header />}
      <div> {children}</div>
    </>
  );
}
