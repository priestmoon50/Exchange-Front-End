// src/app/layout.tsx

"use client";

import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // تعیین زمان تاخیر قبل از منقضی شدن داده‌ها در کش
        staleTime: 1000 * 60 * 1, // 1 دقیقه
        // به‌روزرسانی داده‌ها در صورت فوکوس مجدد بر روی پنجره مرورگر
        refetchOnWindowFocus: false,
        // عدم درخواست مجدد هنگام mount دوباره
        refetchOnMount: false,
        // به‌روزرسانی داده‌ها در صورت اتصال مجدد به شبکه
        refetchOnReconnect: true,
        // تعداد دفعات تکرار درخواست در صورت خطا
        retry: 2,
      },
    },
  }));

  return (
    <html lang="fa">
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
