"use client";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 999,
    yearly: 9990,
    description: "For single-store businesses getting started with digital billing.",
    features: ["1 Branch", "Core POS Billing", "Basic Inventory", "Email Support"],
  },
  {
    name: "Business",
    monthly: 1999,
    yearly: 19990,
    description: "For growing teams managing multiple stores and advanced reporting.",
    features: ["Up to 5 Branches", "Advanced Reports", "Due Management", "Priority Support"],
    popular: true,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Transparent Pricing for Every Stage</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
          Choose the plan that fits your operations today and scale with confidence as your business grows.
        </p>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={!yearly ? "font-semibold text-slate-900" : "text-slate-500"}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className="w-14 h-7 bg-indigo-600 rounded-full relative"
            aria-label="Toggle yearly pricing"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition ${
                yearly ? "right-1" : "left-1"
              }`}
            />
          </button>
          <span className={yearly ? "font-semibold text-slate-900" : "text-slate-500"}>Yearly</span>
          <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Save 16%</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white p-8 rounded-2xl border text-left ${
                plan.popular ? "border-indigo-500 shadow-lg" : "border-slate-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-slate-600 mt-2">{plan.description}</p>
              <p className="text-4xl font-extrabold mt-6 text-slate-900">৳{yearly ? plan.yearly : plan.monthly}</p>
              <p className="text-slate-500 mt-2">{yearly ? "per year" : "per month"}</p>

              <ul className="mt-6 space-y-3 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <a
                href="#cta"
                className="inline-block mt-8 w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
