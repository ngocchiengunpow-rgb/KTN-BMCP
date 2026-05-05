import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Cổng Thông Tin | Vietnam Maritime University",
  description: "Hệ thống quản lý đào tạo sinh viên VMU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">{children}</body>
    </html>
  );
}
