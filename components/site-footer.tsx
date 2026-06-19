import Link from "next/link";
import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { company, navItems } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 xl:pb-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{company.name}</h3>
            <p className="mt-3 text-sm text-slate-400">Premium fruit sourcing and export support for farmers, wholesalers, and buyers.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {company.address}</li>
              <li className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> {company.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {company.email}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Need Help?</h4>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F9A825] px-5 py-3 text-sm font-semibold text-slate-950"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
