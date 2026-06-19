import { company } from "@/lib/data";

export default function FarmersPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">For Farmers</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Partner With a Reliable Export Network</h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Register your farm produce and get connected to buyers who value freshness, traceability, and timely payments.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li>• Transparent pricing and market updates</li>
            <li>• Efficient logistics and documentation support</li>
            <li>• Direct access to domestic and international buyers</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-[#2E7D32] p-8 text-white">
          <h2 className="text-2xl font-semibold">Farmer Registration</h2>
          <div className="mt-4 space-y-3 text-sm text-white/90">
            <p>Phone: {company.phone}</p>
            <p>Email: {company.email}</p>
            <p>Location: {company.address}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
