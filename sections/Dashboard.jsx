import Image from "next/image";

export default function Dashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Powerful Dashboard & Reports
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["dashboard-1.png", "dashboard-2.png", "dashboard-3.png"].map(
            (img) => (
              <div
                key={img}
                className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <Image
                  src={`/images/${img}`}
                  width={600}
                  height={400}
                  alt="Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
