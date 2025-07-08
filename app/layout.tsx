import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/components/custom/common/Header';

export const metadata: Metadata = {
  title: 'Lumiday',
  description:
    '소중한 사람들에게 전하는 우리의 첫 시작, Lumiday로 정성껏 준비해보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>
        <Header />
        <div className=" w-[69.5025rem] m-auto bg-[green]"> {children}</div>
      </body>
    </html>
  );
}
