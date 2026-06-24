import Link from "next/link";
import ServicesCard from "./services/componenets/ServicesCard";

export default function Dashboard() {
  return (
    <main className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <Link
          href="/dashboard/services/create"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          + Add Service
        </Link>
      </div>
         <Link href="/dashboard/services">View All Services</Link>
    </main>
  );
}