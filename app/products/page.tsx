import Image from "next/image";
import { products } from "@/lib/data";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Products</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">Premium Fruit Categories</h1>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-64">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
