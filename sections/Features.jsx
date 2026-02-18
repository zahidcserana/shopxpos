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
    title: "Real-Time Inventory",
    desc: "Instant stock updates with barcode, batch, and unit-level tracking.",
    icon: Package,
  },
  {
    title: "Multi-Branch Control",
    desc: "Manage all outlets, users, and permissions from one dashboard.",
    icon: Store,
  },
  {
    title: "POS Billing",
    desc: "Fast, reliable invoicing with automatic stock deduction.",
    icon: Receipt,
  },
  {
    title: "Reports & Analytics",
    desc: "Clear sales, profit, and stock movement insights in real time.",
    icon: BarChart3,
  },
  {
    title: "Expiry & Low-Stock Alerts",
    desc: "Automatic alerts to prevent expired or out-of-stock sales.",
    icon: Bell,
  },
  {
    title: "Customer Due Management",
    desc: "Track outstanding balances and payment history effortlessly.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Everything You Need to Run Your Store
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            ShopX POS gives you full control over inventory, sales, customers,
            and reporting — all in one simple, powerful platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
                              bg-indigo-50 text-indigo-600 mb-6">
                <Icon size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
