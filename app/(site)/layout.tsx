"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";

import ToasterContext from "../context/ToastContext";
import GoogleAnalytics from "@/app/(site)/GoogleAnalytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >

            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
