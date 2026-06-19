"use client";

import { useState } from "react";
import { Building2, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { company } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setSent(data.message || "We received your message.");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Get in Touch</h1>
          <div className="mt-6 space-y-4 text-slate-600">
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#2E7D32]" /> {company.address}</p>
            <p className="flex items-center gap-3"><PhoneCall className="h-5 w-5 text-[#2E7D32]" /> {company.phone}</p>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#2E7D32]" /> {company.email}</a>
            <p className="flex items-center gap-3"><Building2 className="h-5 w-5 text-[#2E7D32]" /> Export Office • India</p>
          </div>
          <a href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
        <div className="rounded-3xl bg-slate-900 p-8 text-white">
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Name</label>
              <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-[#F9A825]" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <input type="email" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-[#F9A825]" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-[#F9A825]" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button className="w-full rounded-2xl bg-[#F9A825] px-5 py-3.5 font-semibold text-slate-950">Send Message</button>
            {sent && <p className="text-sm text-green-300">{sent}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
