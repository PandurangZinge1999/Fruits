"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, Search } from "lucide-react";
import { company, navItems } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7D32] text-white">
            <span className="font-semibold">VF</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#F9A825]">Fruit Export</p>
            <h2 className="text-base font-semibold text-slate-900">{company.name}</h2>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive ? "text-[#2E7D32]" : "text-slate-600 hover:text-[#2E7D32]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            <Search className="h-4 w-4" />
            Search
          </button>
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 rounded-full bg-[#2E7D32] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
