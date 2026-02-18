import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const trustIndicators = [
  "Trusted by 500+ retail and wholesale businesses",
  "Used across pharmacy, grocery, and fashion stores",
  "Fast onboarding with local support team",
];

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="inline-flex px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-5">
            Modern POS & Inventory Platform
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Professional POS & Inventory Software for Scaling Businesses
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Simplify billing, track stock in real time, manage multiple branches,
            and make better decisions with clear reports — all from one secure,
            cloud-based system.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold shadow hover:bg-indigo-700 transition"
            >
              Start Free Trial
            </a>

            <Link
              href="/contact"
              className="border border-slate-300 bg-white px-7 py-3 rounded-xl font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition"
            >
              Book a Demo
            </Link>
          </div>

          <ul className="mt-8 space-y-3 text-slate-600">
            {trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-indigo-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-100/80 rounded-3xl blur-2xl" />

          <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-slate-100">
            <Image
              src="/images/b1.png"
              width={900}
              height={600}
              alt="ShopX POS dashboard overview"
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
