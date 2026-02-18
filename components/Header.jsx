import Link from "next/link";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="text-xl font-bold text-indigo-700 tracking-tight">
          ShopXPOS
        </Link>

        <nav className="hidden md:flex gap-7 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-indigo-600 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex text-sm font-semibold text-slate-700 hover:text-indigo-600"
          >
            Book a Demo
          </Link>
          <a
            href="#pricing"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}
