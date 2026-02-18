const testimonials = [
  {
    quote:
      "ShopXPOS helped us reduce stock mismatch and speed up checkout during peak hours.",
    name: "Nabil Ahmed",
    role: "Operations Manager, Fresh Mart",
  },
  {
    quote:
      "The reporting is clear and practical. We now review branch performance daily with confidence.",
    name: "Shanta Roy",
    role: "Director, Urban Fashion Point",
  },
  {
    quote:
      "Onboarding was smooth and the support team was responsive from day one.",
    name: "Mahmud Hasan",
    role: "Owner, Medico Pharmacy",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Trusted by Growing Businesses</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Teams across Bangladesh rely on ShopXPOS for daily operations and long-term growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
              <p className="text-slate-700 leading-relaxed">“{item.quote}”</p>
              <footer className="mt-5">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
