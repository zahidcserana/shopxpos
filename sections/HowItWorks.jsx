const steps = [
  {
    title: "Set Up Your Business",
    desc: "Configure branches, users, products, suppliers, and opening stock in a guided onboarding flow.",
  },
  {
    title: "Sell & Track in Real Time",
    desc: "Process billing quickly while the system automatically updates inventory and customer records.",
  },
  {
    title: "Review Insights & Scale",
    desc: "Use daily performance reports and stock analytics to optimize purchasing and grow profitably.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">How ShopXPOS Works</h2>
          <p className="mt-4 text-slate-600 text-lg">
            A simple workflow designed for teams that need speed, accuracy, and visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <p className="text-indigo-600 font-bold text-sm">STEP {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
