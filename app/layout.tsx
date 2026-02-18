import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ShopXPOS – POS & Inventory Software",
  description:
    "Professional cloud POS and inventory software for retail, pharmacy, and distribution businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
