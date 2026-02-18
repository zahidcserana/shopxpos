import {
  Package,
  Store,
  Receipt,
  BarChart3,
  Bell,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Inventory Management",
    desc: "Track stock instantly with barcode support, batch-level visibility, and automated updates after every sale.",
    icon: Package,
  },
  {
    title: "Multi-Branch Operations",
    desc: "Control all outlets, warehouses, and branch-level performance from one centralized management panel.",
    icon: Store,
  },
  {
    title: "Fast & Reliable POS Billing",
    desc: "Complete sales in seconds with optimized billing workflows, discount controls, and invoice generation.",
    icon: Receipt,
  },
  {
    title: "Executive Reporting",
    desc: "Monitor sales, margins, product movement, and branch-wise KPIs with business-ready reporting dashboards.",
    icon: BarChart3,
  },
  {
    title: "Smart Alerts",
    desc: "Receive timely low-stock and expiry alerts to reduce stockouts, wastage, and revenue leakage.",
    icon: Bell,
  },
  {
    title: "Customer & Due Tracking",
    desc: "Maintain detailed customer ledgers, dues, and payment history to improve recovery and retention.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Built for Professional Retail & Distribution Teams
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            ShopXPOS combines inventory, billing, and analytics into a single
            platform so your team can operate faster with greater control and
            fewer manual errors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
