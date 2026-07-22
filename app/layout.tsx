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
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
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
      <body className="min-h-full font-sans bg-cream text-bodytext">
        <div className="max-w-7xl mx-auto w-full bg-cream min-h-screen relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
