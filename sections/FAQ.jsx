"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is ShopXPOS cloud-based?",
    a: "Yes. You can securely access your data from anywhere with internet access and role-based permissions.",
  },
  {
    q: "Can I manage multiple branches?",
    a: "Absolutely. You can monitor inventory, sales, and staff activity across branches from one central dashboard.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day free trial so you can evaluate workflows and reports before subscribing.",
  },
  {
    q: "Do you support barcode and thermal printers?",
    a: "Yes. ShopXPOS supports common barcode scanners and thermal printers used by retail and pharmacy stores.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-slate-600 mb-10">
          Everything you need to know before getting started with ShopXPOS.
        </p>

        {faqs.map((item, i) => (
          <div key={item.q} className="border border-slate-200 rounded-xl mb-4 bg-slate-50">
            <button
              type="button"
              className="w-full text-left p-5 font-semibold text-slate-900"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {item.q}
            </button>
            {open === i && <p className="px-5 pb-5 text-slate-600 leading-relaxed">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
