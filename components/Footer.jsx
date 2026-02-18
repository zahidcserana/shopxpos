export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <p className="text-white text-lg font-semibold">ShopXPOS</p>
          <p className="text-sm text-slate-400 mt-1">POS & Inventory Software for modern retail businesses.</p>
        </div>

        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} ShopXPOS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
