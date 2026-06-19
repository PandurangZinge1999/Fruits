import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">About Us</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">About Vignaharta Fruit & Export</h1>
        <p className="mt-4 text-lg leading-7 text-slate-600">
          Vignaharta Fruit & Export is a fruit sourcing and export business that connects farmers and buyers with premium-quality produce and reliable supply support.
        </p>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Owner: Ganesh Bhanwase
        </p>
      </div>
      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-80 w-full">
          <Image src="/photos/banana-5.jpg" alt="Banana export quality" fill className="object-cover" />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          "Traceable sourcing from verified orchards",
          "Strict quality checks before every shipment",
          "Dedicated support across procurement and export",
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
