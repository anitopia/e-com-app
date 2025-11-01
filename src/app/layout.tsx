import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Header";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/layout/Footer";

const bubblegumSans = Bubblegum_Sans({
  variable: "--font-bubblegum-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "General Store",
  description: "A simple e-commerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bubblegumSans.variable} antialiased`}>
        <CartProvider>
          <Navigation />
          <main
            style={{
              minHeight: "calc(100vh - 128px)",
            }}
            className="bg-gray-50"
          >
            {children}
          </main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
