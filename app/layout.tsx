import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/1-Navbar/Navbar";
import Footer from "@/Components/8-Footer/Footer";
// Fonts

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO

export const metadata: Metadata = {
  title: "Engy Mohamed | Frontend Developer",
  description: "Frontend Developer specialized in React & Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

// Layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* NavBar */}
        <Navbar />
        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
        {/* Footer */}
        <Footer />
        <Toaster toastOptions={{ style: { fontSize: '12px', fontWeight: 'bold'} }} />

      </body>
    </html>
  );
}
