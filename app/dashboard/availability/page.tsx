export default function AvailabilityPage() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-slate-900">
          Availability
        </h1>

        <p className="mt-2 text-slate-500">
          Set the days and hours customers can book appointments.
        </p>

        <form className="mt-8 space-y-6">
          {days.map((day, index) => (
            <div
              key={day}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked={index < 5}
                  className="h-5 w-5 accent-indigo-600"
                />

                <span className="font-semibold">{day}</span>
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="mb-1 block text-sm text-slate-500">
                    From
                  </label>

                  <input
                    type="time"
                    defaultValue="09:00"
                    className="rounded-lg border border-slate-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm text-slate-500">
                    To
                  </label>

                  <input
                    type="time"
                    defaultValue="17:00"
                    className="rounded-lg border border-slate-300 px-3 py-2"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-slate-200 p-4">
            <label className="mb-2 block font-semibold">
              Appointment Length
            </label>

            <select className="w-full rounded-lg border border-slate-300 px-3 py-2">
              <option>15 minutes</option>
              <option defaultValue="30">30 minutes</option>
              <option>45 minutes</option>
              <option>60 minutes</option>
              <option>90 minutes</option>
              <option>120 minutes</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}