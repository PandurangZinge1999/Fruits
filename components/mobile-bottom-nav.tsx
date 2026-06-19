import Link from "next/link";
import { Home, Leaf, ShoppingBag, MessageSquare, MapPin } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: ShoppingBag },
  { href: "/farmers", label: "Farmers", icon: Leaf },
  { href: "/contact", label: "Contact", icon: MessageSquare },
  { href: "/gallery", label: "Map", icon: MapPin },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 shadow-2xl backdrop-blur xl:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1 px-2 py-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium text-slate-500"
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
