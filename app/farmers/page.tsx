"use client";

import { useState } from "react";
import { Building2, CalendarDays, CheckCircle2, Leaf, Mail, MapPin, PhoneCall } from "lucide-react";
import { company } from "@/lib/data";

export default function FarmersPage() {
  const [form, setForm] = useState({
    farmerName: "",
    mobile: "",
    state: "",
    district: "",
    village: "",
    fruitType: "",
    quantity: "",
    harvestDate: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/farmer-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.message || "Thank you for registering your harvest.");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">For Farmers</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Partner With a Reliable Export Network</h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Register your farm produce and get connected to buyers who value freshness, traceability, and timely payments.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Leaf, label: "Transparent pricing" },
              { icon: Building2, label: "Export support" },
              { icon: CheckCircle2, label: "Fast follow-up" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                <Icon className="h-5 w-5 text-[#2E7D32]" />
                <p className="mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl bg-[#2E7D32] p-8 text-white shadow-lg">
          <h2 className="text-2xl font-semibold">Farmer Registration</h2>
          <div className="mt-5 space-y-3 text-sm text-white/90">
            <p className="flex items-center gap-3"><PhoneCall className="h-4 w-4" /> {company.phone}</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> {company.email}</p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> {company.address}</p>
          </div>
          <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-6">
            Share your harvest details and our team will contact you with buyer interest, pricing guidance, and shipment support.
          </div>
        </aside>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Harvest Inquiry</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Farmer Details Form</h2>
          <p className="mt-2 text-slate-600">Please fill in the information below so we can understand your produce and expected supply.</p>
        </div>

        <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Farmer Name</label>
            <input required value={form.farmerName} onChange={(e) => setForm({ ...form, farmerName: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Enter full name" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Mobile Number</label>
            <input required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="e.g. +91 99999 99999" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">State</label>
            <input required value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="State" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">District</label>
            <input required value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="District" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Village / Farm Location</label>
            <input required value={form.village} onChange={(e) => setForm({ ...form, village: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Village or farm area" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Fruit Type</label>
            <input required value={form.fruitType} onChange={(e) => setForm({ ...form, fruitType: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Mango, Banana, Grapes..." />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Quantity Available</label>
            <input required value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="e.g. 500 kg / 10 tons" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Harvest Date</label>
            <div className="relative">
              <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input required type="date" value={form.harvestDate} onChange={(e) => setForm({ ...form, harvestDate: e.target.value })} className="w-full rounded-2xl border border-slate-200 pl-10 pr-4 py-3 outline-none focus:border-[#2E7D32]" />
            </div>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-2xl bg-[#2E7D32] px-5 py-3.5 font-semibold text-white">Submit Farmer Inquiry</button>
          </div>
          {status && <p className="md:col-span-2 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">{status}</p>}
        </form>
      </section>
    </main>
  );
}
