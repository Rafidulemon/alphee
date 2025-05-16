import Link from "next/link";

export default function SitemapPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold text-primary mb-6">Sitemap</h1>

      <p className="mb-4 text-sm text-gray-300">
        Easily navigate through the sections of our website using the links below:
      </p>

      <ul className="space-y-4 text-sm text-gray-300">
        <li>
          🏠 <Link href="/" className="text-primary underline">Home</Link>
        </li>
        <li>
          🛍️ <Link href="/shop" className="text-primary underline">Shop</Link>
        </li>
        <li>
          🧢 <Link href="/shop?category=tshirts" className="text-primary underline">T-Shirts</Link>
        </li>
        <li>
          👕 <Link href="/shop?category=shirts" className="text-primary underline">Shirts</Link>
        </li>
        <li>
          👖 <Link href="/shop?category=punjabi" className="text-primary underline">Punjabi</Link>
        </li>
        <li>
          ⚡ <Link href="/flash-sale" className="text-primary underline">Flash Sale</Link>
        </li>
        <li>
          🔥 <Link href="/best-selling" className="text-primary underline">Best Selling</Link>
        </li>
        <li>
          🛒 <Link href="/buy-now" className="text-primary underline">Buy Now</Link>
        </li>
        <li>
          📦 <Link href="/order-tracking" className="text-primary underline">Order Tracking</Link>
        </li>
        <li>
          📄 <Link href="/refund-policy" className="text-primary underline">Refund Policy</Link>
        </li>
        <li>
          📬 <Link href="/contact" className="text-primary underline">Contact Us</Link>
        </li>
        <li>
          ⚙️ <Link href="/terms" className="text-primary underline">Terms & Conditions</Link>
        </li>
        <li>
          🔒 <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  );
}
