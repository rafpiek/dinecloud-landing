import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "@/styles/old_style.css";
import "@/styles/style2.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DineCloud",
  description: "Scan, order and enjoy your meal",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon/favicon-196x196.png', sizes: '196x196', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon', url: '/favicon/apple-touch-icon-180x180.png' },
      { rel: 'android-chrome', url: '/favicon/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/favicon/android-chrome-512x512.png', sizes: '512x512' },
      { rel: 'msapplication-TileImage', url: '/favicon/mstile-144x144.png' },
      { rel: 'msapplication-square70x70logo', url: '/favicon/mstile-70x70.png' },
      { rel: 'msapplication-square150x150logo', url: '/favicon/mstile-150x150.png' },
      { rel: 'msapplication-wide310x150logo', url: '/favicon/mstile-310x150.png' },
      { rel: 'msapplication-square310x310logo', url: '/favicon/mstile-310x310.png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased landing`}
      >
        {children}
      </body>
    </html>
  );
}
