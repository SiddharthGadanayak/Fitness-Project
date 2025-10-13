import React, { useState } from "react";

const IsLogin = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");

  // Login handler
  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    });

    const data = await response.json();

    if (response.ok) {
      if (onAuthSuccess) onAuthSuccess({ email: data.email });
    } else {
      alert(data.message || "Login failed");
    }
  } catch {
    alert("Error connecting to server. Check if Flask backend is running.");
  }
};

  // Signup handler
  const handleSignup = async (e) => {
  e.preventDefault();
  if (signupPassword !== signupConfirm) {
    alert("Passwords do not match");
    return;
  }
  try {
    const response = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: signupName, email: signupEmail, password: signupPassword }),
    });

    const data = await response.json();

    if (response.ok) {
      if (onAuthSuccess) onAuthSuccess({ email: signupEmail });
    } else {
      alert(data.message || "Registration failed");
    }
  } catch {
    alert("Error connecting to server. Check if Flask backend is running.");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center gradient-primary">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Tab-style Toggle */}
        <div className="flex bg-green-50 rounded-xl p-1 w-full mb-6">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-semibold rounded-lg transition ${
              isLogin
                ? "bg-white shadow text-green-900"
                : "bg-transparent text-green-600"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-semibold rounded-lg transition ${
              !isLogin
                ? "bg-white shadow text-green-900"
                : "bg-transparent text-green-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Conditional Form Rendering */}
        {isLogin ? (
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-600 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Login
            </button>
            <p className="text-center text-gray-500 text-sm mt-6">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-primary font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="block text-gray-600 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                value={signupConfirm}
                onChange={(e) => setSignupConfirm(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Create Account
            </button>
            <p className="text-center text-gray-500 text-sm mt-6">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-primary font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default IsLogin;