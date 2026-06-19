"use client";

import { useState } from "react";
import { Building2, CheckCircle2, Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { company } from "@/lib/data";

export default function BuyersPage() {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    country: "",
    email: "",
    mobile: "",
    fruitRequired: "",
    quantityRequired: "",
    destinationPort: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/buyer-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.message || "Your inquiry has been sent successfully.");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">For Buyers</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Trusted Fruit Supply for Importers & Retailers</h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Share your sourcing needs and receive qualified fruit proposals, quality standards, and export support.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Building2, label: "Custom sourcing plans" },
              { icon: CheckCircle2, label: "Quality assurance" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Icon className="h-5 w-5 text-[#2E7D32]" />
                <p className="mt-2 text-sm font-medium text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-semibold">Buyer Inquiry Desk</h2>
          <p className="mt-3 text-sm text-slate-300">Connect with our team for shipment plans, grades, packaging, and documentation.</p>
          <div className="mt-5 space-y-3 text-sm text-slate-200">
            <p className="flex items-center gap-3"><PhoneCall className="h-4 w-4" /> {company.phone}</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> {company.email}</p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> {company.address}</p>
          </div>
        </aside>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Inquiry Form</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Buyer Request Details</h2>
          <p className="mt-2 text-slate-600">Please share your requirements so we can prepare the best sourcing and shipping proposal.</p>
        </div>

        <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Company Name</label>
            <input required value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Your company name" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Contact Person</label>
            <input required value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Full name" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Country</label>
            <input required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Importing country" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Mobile Number</label>
            <input required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Phone number" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Fruit Required</label>
            <input required value={form.fruitRequired} onChange={(e) => setForm({ ...form, fruitRequired: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Mango, Banana, Grapes..." />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Quantity Required</label>
            <input required value={form.quantityRequired} onChange={(e) => setForm({ ...form, quantityRequired: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="e.g. 20 tons / 100 boxes" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Destination Port</label>
            <input required value={form.destinationPort} onChange={(e) => setForm({ ...form, destinationPort: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Port / destination" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Tell us about your preferred grade, packaging, timeline, and delivery requirements." />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2E7D32] px-5 py-3.5 font-semibold text-white">
              <Send className="h-4 w-4" /> Submit Buyer Inquiry
            </button>
          </div>
          {status && <p className="md:col-span-2 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">{status}</p>}
        </form>
      </section>
    </main>
  );
}
