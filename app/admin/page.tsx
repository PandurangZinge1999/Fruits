"use client";

import { useRouter } from "next/navigation";
import { dashboardStats } from "@/lib/data";

export default function AdminDashboardPage() {
  const router = useRouter();
  const isAuthenticated =
    typeof window !== "undefined" &&
    localStorage.getItem("admin-auth") === "true";

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-semibold text-slate-900">Access Restricted</h1>
          <p className="mt-2 text-sm text-slate-600">Please log in to view the dashboard.</p>
          <button
            onClick={() => router.push("/admin/login")}
            className="mt-4 rounded-2xl bg-[#2E7D32] px-5 py-3 font-semibold text-white"
          >
            Go to Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F9A825]">Dashboard</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Vignaharta Fruit & Export Admin</h1>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("admin-auth");
            router.push("/admin/login");
          }}
          className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
        >
          Logout
        </button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <h3 className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Manage Farmers</h2>
          <p className="mt-2 text-sm text-slate-600">Review registration requests, verify orchard details, and schedule collection.</p>
        </section>
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Manage Buyers</h2>
          <p className="mt-2 text-sm text-slate-600">Track inquiries, destination ports, and order priorities.</p>
        </section>
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Manage Products</h2>
          <p className="mt-2 text-sm text-slate-600">Update varieties, packaging details, and seasonal availability.</p>
        </section>
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Export to Excel</h2>
          <p className="mt-2 text-sm text-slate-600">Download all customer and sourcing records in one file.</p>
        </section>
      </div>
    </main>
  );
}
