"use client";

import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar'
import { geistSans, geistMono, montserrat } from '@/fonts'
import "@/styles/globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
