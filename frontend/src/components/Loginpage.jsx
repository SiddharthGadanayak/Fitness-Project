const LoginPage = ({ switchToRegister, onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Here you would validate credentials with backend
    onLogin(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-xl font-semibold hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <button
            onClick={switchToRegister}
            className="text-indigo-500 font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
