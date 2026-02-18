import Image from "next/image";

const dashboardHighlights = [
  {
    title: "Executive Overview",
    image: "dashboard-1.png",
    alt: "Executive dashboard showing sales and inventory summary",
  },
  {
    title: "Inventory Intelligence",
    image: "dashboard-2.png",
    alt: "Inventory dashboard with stock movement and low-stock alerts",
  },
  {
    title: "Sales Performance",
    image: "dashboard-3.png",
    alt: "Sales dashboard with branch and product performance metrics",
  },
];

export default function Dashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Decision-Ready Dashboards
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
          Get visual, actionable insights across sales, stock, and branch operations to make confident business decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {dashboardHighlights.map((item) => (
            <div key={item.image} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition">
              <Image
                src={`/images/${item.image}`}
                width={600}
                height={400}
                alt={item.alt}
                className="w-full h-auto"
              />
              <p className="px-5 py-4 text-left font-semibold text-slate-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
