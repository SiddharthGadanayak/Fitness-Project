const RegisterPage = ({ switchToLogin, onRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Here you would save the user to backend
    onRegister(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <button
            onClick={switchToLogin}
            className="text-green-500 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
