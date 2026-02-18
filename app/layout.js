import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "ShopXPOS – Inventory & POS Software",
  description: "Smart inventory and POS software for retail & pharmacy businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="bg-slate-50 text-slate-800 antialiased">
            {children}
            <WhatsAppButton />
        </body>
    </html>
  );
}
