import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Smart Inventory & POS <br />
            <span className="text-indigo-600">
              Software for Growing Businesses
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Real-time stock tracking, multi-branch control, automated reports,
            and fast billing — all in one cloud-based POS platform.
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
                className="border border-slate-300 px-7 py-3 rounded-xl font-semibold hover:bg-white transition"
                >
                    Book a Demo
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Trusted by <span className="font-semibold">500+</span> businesses in Bangladesh
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl"></div>

          <div className="relative bg-white rounded-2xl shadow-xl p-4">
            <Image
              src="/images/b1.png"
              width={900}
              height={600}
              alt="ShopX POS Dashboard"
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
