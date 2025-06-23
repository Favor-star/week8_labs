import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StoreProvider from "./hooks/StoreProvider";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile E-commerce",
  description: "E-commerce for the audio listening items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased bg-white flex flex-col justify-center items-center w-full max-w-screen`}
      >
        <StoreProvider>
          <Navbar />
          <div>
            <Toaster />
          </div>
          <main className="w-full flex items-center flex-col  justify-center relative">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
