'use client';

export default function LoginPage() {
  return (
    <form
      method="POST"
      action="/api/login"
      className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        className="w-full mb-3 border px-3 py-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full mb-3 border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}
