const DashboardPage = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold text-indigo-600">MyApp</div>
        <nav className="flex-1 px-4 space-y-2">
          <button
            onClick={onLogout}
            className="w-full text-left py-2 px-3 rounded hover:bg-indigo-100 transition"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="text-gray-600">Welcome, {user?.email}</div>
        </header>
        <p className="text-gray-700">This is your dashboard. You can add cards, charts, tables here.</p>
      </main>
    </div>
  );
};

export default DashboardPage;
