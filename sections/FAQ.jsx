"use client";
import { useState } from "react";

const faqs = [
  ["Is it cloud-based?", "Yes, access from anywhere."],
  ["Multi-branch supported?", "Yes, fully supported."],
  ["Free trial available?", "Yes, 14 days."],
  ["Barcode supported?", "Yes."],
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        {faqs.map(([q, a], i) => (
          <div
            key={q}
            className="border rounded-lg mb-4 p-4 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3 className="font-semibold">{q}</h3>
            {open === i && <p className="mt-2 text-slate-600">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
