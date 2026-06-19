"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "@/lib/data";

export default function GalleryPage() {
  const [selectedFruit, setSelectedFruit] = useState(galleryItems[0].title);

  const selectedItem =
    galleryItems.find((item) => item.title === selectedFruit) ?? galleryItems[0];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Gallery</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">Fruit Gallery</h1>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedFruit(item.title)}
            className={`overflow-hidden rounded-3xl border bg-white text-left shadow-sm transition ${
              selectedItem.title === item.title
                ? "border-[#2E7D32] ring-2 ring-[#2E7D32]/10"
                : "border-slate-200 hover:border-[#2E7D32]/40"
            }`}
          >
            <div className="relative h-72">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-500">{item.photos.length} photos</p>
            </div>
          </button>
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Selected Fruit</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">{selectedItem.title}</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {selectedItem.photos.map((photo) => (
            <div key={photo} className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="relative h-64">
                <Image src={photo} alt={`${selectedItem.title} photo`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
