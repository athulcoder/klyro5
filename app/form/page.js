export default function FormPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
        action="/verify"
        method="POST"
      >
        <h2 className="text-xl font-semibold text-center">
          Enter Your Details
        </h2>

        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="1234567890"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
