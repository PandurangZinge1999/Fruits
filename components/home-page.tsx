"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, Leaf, MapPin, MessageCircle, PhoneCall, Star } from "lucide-react";
import { company, galleryItems, products, testimonials, whyChooseUs } from "@/lib/data";
import { useState } from "react";

export function HomePage() {
  const [farmerForm, setFarmerForm] = useState({
    farmerName: "",
    mobile: "",
    state: "",
    district: "",
    village: "",
    fruitType: "",
    quantity: "",
    harvestDate: "",
  });
  const [buyerForm, setBuyerForm] = useState({
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
  const [status, setStatus] = useState<string>("");

  const handleFarmerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/farmer-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(farmerForm),
    });
    const data = await res.json();
    setStatus(data.message || "Thanks for sharing your details.");
  };

  const handleBuyerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/buyer-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buyerForm),
    });
    const data = await res.json();
    setStatus(data.message || "We have received your request.");
  };

  return (
    <div className="pb-24">
      <section className="relative overflow-hidden bg-slate-900">
        <Image
          src="/photos/banana-1.jpg"
          alt="Fresh banana harvest"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-[#1b5e20]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,168,37,0.15),transparent_18%)]" />
        <div className="relative mx-auto grid min-h-[700px] max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 inline-flex w-fit rounded-full bg-[#F9A825]/20 px-4 py-2 text-sm font-semibold text-[#F9A825]">
              {company.tagline}
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {company.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              We source premium fruits directly from farmers and supply domestic and international markets with guaranteed quality.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/farmers" className="inline-flex items-center justify-center rounded-full bg-[#2E7D32] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#2E7D32]/30">
                Sell Your Fruits
              </Link>
              <Link href="/buyers" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white bg-white/5 backdrop-blur-sm">
                Request Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2"><CheckCircle2 className="h-4 w-4 text-[#F9A825]" /> Traceable sourcing</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2"><CheckCircle2 className="h-4 w-4 text-[#F9A825]" /> On-time shipments</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-center"
          >
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-3xl bg-white p-6 text-slate-900">
                <p className="text-sm font-semibold text-[#2E7D32]">Quick Export Snapshot</p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <span className="text-slate-600">Weekly Capacity</span>
                    <strong className="text-slate-900">240 Tons</strong>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <span className="text-slate-600">Export Markets</span>
                    <strong className="text-slate-900">18 Countries</strong>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <span className="text-slate-600">Farmer Partners</span>
                    <strong className="text-slate-900">128+</strong>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32]">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Featured Products</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Fresh Fruits for Every Market</h2>
          </div>
          <Link href="/products" className="hidden text-sm font-semibold text-[#2E7D32] md:inline-flex">View all products</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1">
              <div className="relative h-64">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32]">
                  Explore <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Farmer Registration</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">List Your Harvest</h2>
            <form className="mt-6 space-y-4" onSubmit={handleFarmerSubmit}>
              {[
                ["farmerName", "Farmer Name"],
                ["mobile", "Mobile Number"],
                ["state", "State"],
                ["district", "District"],
                ["village", "Village"],
                ["fruitType", "Fruit Type"],
                ["quantity", "Quantity Available"],
                ["harvestDate", "Harvest Date"],
              ].map(([name, label]) => (
                <div key={name}>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
                  <input
                    type={name === "harvestDate" ? "date" : "text"}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-[#2E7D32]"
                    value={farmerForm[name as keyof typeof farmerForm]}
                    onChange={(e) => setFarmerForm({ ...farmerForm, [name]: e.target.value })}
                  />
                </div>
              ))}
              <button className="w-full rounded-2xl bg-[#2E7D32] px-5 py-3.5 font-semibold text-white">Submit</button>
              {status && <p className="text-sm text-green-700">{status}</p>}
            </form>
          </div>
          <div className="rounded-3xl bg-[#2E7D32] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Buyer Inquiry</p>
            <h2 className="mt-2 text-3xl font-semibold">Request a Quote</h2>
            <form className="mt-6 space-y-4" onSubmit={handleBuyerSubmit}>
              {[
                ["companyName", "Company Name"],
                ["contactPerson", "Contact Person"],
                ["country", "Country"],
                ["email", "Email"],
                ["mobile", "Mobile"],
                ["fruitRequired", "Fruit Required"],
                ["quantityRequired", "Quantity Required"],
                ["destinationPort", "Destination Port"],
              ].map(([name, label]) => (
                <div key={name}>
                  <label className="mb-1.5 block text-sm font-medium text-white/90">{label}</label>
                  <input
                    type={name === "email" ? "email" : "text"}
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#F9A825]"
                    value={buyerForm[name as keyof typeof buyerForm]}
                    onChange={(e) => setBuyerForm({ ...buyerForm, [name]: e.target.value })}
                  />
                </div>
              ))}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/90">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#F9A825]"
                  value={buyerForm.message}
                  onChange={(e) => setBuyerForm({ ...buyerForm, message: e.target.value })}
                />
              </div>
              <button className="w-full rounded-2xl bg-[#F9A825] px-5 py-3.5 font-semibold text-slate-950">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Gallery</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">From Farm to Export</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative h-64">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4 text-center text-sm font-semibold text-slate-800">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F7F7F3] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Testimonials</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">What Farmers & Buyers Say</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="flex items-center gap-1 text-[#F9A825]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-slate-700">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-900">{item.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-slate-900 p-8 text-white lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Contact Us</p>
            <h2 className="mt-2 text-3xl font-semibold">Let’s Grow Together</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#F9A825]" /> {company.address}</p>
              <p className="flex items-center gap-3"><PhoneCall className="h-5 w-5 text-[#F9A825]" /> {company.phone}</p>
              <p className="flex items-center gap-3"><Building2 className="h-5 w-5 text-[#F9A825]" /> {company.email}</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 text-slate-900">
            <iframe
              src={company.mapUrl}
              title="Office Location"
              className="h-72 w-full rounded-2xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl xl:bottom-8"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
