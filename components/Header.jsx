export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">ShopXPOS</span>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#faq" className="hover:text-blue-600">FAQ</a>
        </nav>

        <a
          href="#cta"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
        >
          Start Free Trial
        </a>
      </div>
    </header>
  );
}
