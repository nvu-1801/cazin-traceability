import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trà Tía Tô Túi Lọc CAZIN",
  description: "Tinh hoa trà thảo mộc Gia Lai",
  icons: {
    icon: [
      { url: '/logo/logo.png', type: 'image/png' }
    ],
    apple: [
      { url: '/logo/logo.png', type: 'image/png' }
    ],
  },
  openGraph: {
    images: ['/logo/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo/logo.png" type="image/png" sizes="any" />
      </head>
      <body className="min-h-full font-sans bg-background text-textMain">
        <div className="max-w-7xl mx-auto w-full bg-background min-h-screen relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
