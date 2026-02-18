"use client";
import { useState } from "react";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 999,
      yearly: 9990,
    },
    {
      name: "Business",
      monthly: 1999,
      yearly: 19990,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Simple Pricing</h2>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className="w-14 h-7 bg-indigo-600 rounded-full relative"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition ${
                yearly ? "right-1" : "left-1"
              }`}
            />
          </button>
          <span>Yearly</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-extrabold mt-4">
                ৳{yearly ? plan.yearly : plan.monthly}
              </p>
              <p className="text-slate-500 mt-2">
                {yearly ? "per year" : "per month"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
