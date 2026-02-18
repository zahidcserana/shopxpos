import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="py-28 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Contact Our Sales Team
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about ShopX POS? Need a demo or custom plan?
            Our team is ready to help your business grow.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Left Info Panel */}
          <div className="space-y-8">
            
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Why Contact Us?
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>✔ Personalized demo for your business</li>
                <li>✔ Multi-branch setup consultation</li>
                <li>✔ Pricing clarification & discounts</li>
                <li>✔ Migration from existing POS</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-slate-900 mb-4">
                Direct Contact
              </h3>

              <p className="text-slate-600">
                📞 +8801970887754
              </p>

              <p className="text-slate-600 mt-2">
                📧 sales@shopxpos.com
              </p>

              <Link
                href="https://wa.me/8801970887754"
                target="_blank"
                className="inline-block mt-4 bg-emerald-500 text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition"
              >
                Chat on WhatsApp
              </Link>
            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border">
            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="+8801XXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Business Type
                </label>
                <select className="w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option>Retail Shop</option>
                  <option>Pharmacy</option>
                  <option>Super Shop</option>
                  <option>Restaurant</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Tell us about your business needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow"
              >
                Request Demo
              </button>

              <p className="text-xs text-slate-500 text-center">
                We typically respond within 1–2 business hours.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
