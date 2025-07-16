import type { Metadata } from 'next';
import './globals.css';
import CustomLayout from '@/app/CustomLayout';

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
        <CustomLayout>
          <div className=" w-[69.5025rem] bg-[green]">{children}</div>
        </CustomLayout>
      </body>
    </html>
  );
}
