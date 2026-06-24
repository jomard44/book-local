export default function ServiceForm() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Add New Service
        </h1>

        <form className="bg-gray-50 border rounded-xl p-6 space-y-5 shadow-sm">
          <div>
            <label className="block font-medium mb-2">
              Service Name
            </label>

            <input
              type="text"
              placeholder="Men's Haircut"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              placeholder="Short description..."
              rows={4}
              className="w-full border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Duration (minutes)
            </label>

            <input
              type="number"
              placeholder="30"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Price ($)
            </label>

            <input
              type="number"
              placeholder="25"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}