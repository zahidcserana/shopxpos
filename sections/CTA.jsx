import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-indigo-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold">Ready to Upgrade Your Store Operations?</h2>
        <p className="mt-4 text-lg text-indigo-100">
          Start your 14-day free trial or book a guided demo with our team to see ShopXPOS in action.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#pricing"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Start Free Trial
          </a>
          <Link
            href="/contact"
            className="inline-block border border-indigo-200 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 transition"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
