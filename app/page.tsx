import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold"> BookLocal </div>
          <div className="flex gap-4">
            <a
              href="#features"
              className="text-sm font-medium hover:text-indigo-600"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-indigo-600"
            >
              Pricing
            </a>
            <button className="rounded-lg border px-4 py-2 text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              Built for local businesses
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
              Accept bookings <span className="text-indigo-600">24/7</span>
              without answering the phone
            </h1>
            <p className="mb-8 text-lg text-slate-600">
              Perfect for salons, barbers, tutors, cleaners, personal trainers,
              and service businesses. Let customers book online anytime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
                Start Free Trial
              </button>
              <button className="rounded-xl border px-6 py-3 font-semibold">
                View Demo
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-sm text-slate-600">
              <span>✓ Online booking page</span>
              <span>✓ Email confirmations</span>
              <span>✓ Appointment management</span>
              <span>✓ 14-day free trial</span>
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-bold"> Halifax Hair Studio </h3>
              <p className="text-slate-500"> Upcoming Appointments </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  time: "10:00 AM",
                  service: "Men's Haircut",
                  customer: "John Smith",
                },
                {
                  time: "11:30 AM",
                  service: "Beard Trim",
                  customer: "Mike Jones",
                },
                {
                  time: "2:00 PM",
                  service: "Hair Coloring",
                  customer: "Sarah Brown",
                },
              ].map((booking) => (
                <div
                  key={booking.time}
                  className="rounded-xl border bg-white p-4"
                >
                  <div className="font-semibold"> {booking.time} </div>
                  <div className="text-sm text-slate-600">
                    {booking.service}
                  </div>
                  <div className="text-sm text-slate-500">
                    {booking.customer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Everything you need</h2>
            <p className="text-slate-600">
              Simple tools for busy business owners.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Online Booking", desc: "Customers book anytime." },
              { title: "Email Reminders", desc: "Automatic confirmations." },
              { title: "Service Management", desc: "Add and edit services." },
              {
                title: "Availability Settings",
                desc: "Set your working hours.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-slate-600"> {feature.desc} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold">
            Get Started in Minutes
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Create Account",
              "Add Services",
              "Set Availability",
              "Accept Bookings",
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="font-semibold"> {step} </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
            <h2 className="mb-4 text-4xl font-bold"> Simple Pricing </h2>
            <p className="mb-8 text-slate-600">No contracts. Cancel anytime.</p>
            <div className="mb-6 text-6xl font-bold">
              $29 <span className="text-xl text-slate-500"> /month </span>
            </div>
            <div className="mb-8 space-y-2 text-slate-600">
              <p>✓ Unlimited bookings</p> <p>✓ Online booking page</p>
              <p>✓ Email confirmations</p> <p>✓ Customer management</p>
              <p>✓ Local support</p>
            </div>
            <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700">
              Start 14-Day Free Trial
            </button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Stop Taking Bookings By Phone
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            Let customers book online while you focus on running your business.
          </p>
          <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700">
            Start Free Trial
          </button>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-7xl justify-between px-6">
          <div>
            <div className="font-bold"> BookLocal </div>
            <p className="text-sm text-slate-500">
              Online booking for local businesses.
            </p>
          </div>
          <div className="text-sm text-slate-500"> © 2026 BookLocal </div>
        </div>
      </footer>
    </main>
  );
}
