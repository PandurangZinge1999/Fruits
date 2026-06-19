import { company } from "@/lib/data";

export default function BuyersPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">For Buyers</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Trusted Fruit Supply for Importers & Retailers</h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Share your sourcing needs and receive qualified fruit proposals, quality standards, and export support.
          </p>
          <div className="mt-6 rounded-3xl bg-slate-50 p-6 text-sm text-slate-700">
            <p><strong>Phone:</strong> {company.phone}</p>
            <p><strong>Email:</strong> {company.email}</p>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-semibold">Buyer Inquiry Desk</h2>
          <p className="mt-3 text-sm text-slate-300">Connect with our team for shipment plans, grades, packaging, and documentation.</p>
        </div>
      </div>
    </main>
  );
}
