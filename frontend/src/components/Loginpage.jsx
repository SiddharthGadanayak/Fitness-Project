import React from "react";

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <button className="text-blue-600 hover:underline">Register</button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
