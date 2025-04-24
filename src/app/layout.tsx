import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/navigations/Header";
import Footer from "./components/navigations/Footer";

export const metadata: Metadata = {
  title: "Alphee",
  description: "Fusion of Class & Style",
  keywords: [
    "Alphee",
    "Fusion of Class and Style",
    "Alphee T-shirts",
    "Bangladesh fashion",
    "Trendy clothing",
    "Streetwear Bangladesh",
    "Online clothing store",
    "Men's fashion",
    "Women's fashion",
    "Alphee apparel",
    "Online shopping",
    "T-shirts",
    "Shirts",
    "Sweatshirts",
    "Hoodies",
    "Pants",
    "Jeans",
    "Shorts",
    "Skirts",
    "Dresses",
    "Jackets",
    "Coats",
    "Sweaters",
    "Shoes",
    "Accessories",
    "Bags",
    "Hats",
    "Scarves",
    "Belts",
    "Gloves",
    "Socks",
    "Underwear",
    "Cuban Collar",
    "Drop Shoulder",
    "V-Neck",
    "Sleeveless",
    "Sleeve",
    "Long Sleeve",
    "Short Sleeve",
    "Half Sleeve",
    "3/4 Sleeve",
    "Sleeveless",
  ],
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <div className="bg-black min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
