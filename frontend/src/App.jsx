import { useState } from "react";
import LoginPage from "./components/loginpage";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/Dashboardpage";

function App() {
  const [page, setPage] = useState("login"); // login | register | dashboard
  const [user, setUser] = useState(null); // store user info

  // Simulate login
  const handleLogin = (email) => {
    setUser({ email });
    setPage("dashboard");
  };

  // Simulate logout
  const handleLogout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <>
      {page === "login" && (
        <LoginPage
          switchToRegister={() => setPage("register")}
          onLogin={handleLogin}
        />
      )}
      {page === "register" && (
        <RegisterPage
          switchToLogin={() => setPage("login")}
          onRegister={handleLogin} // after registration, go to dashboard
        />
      )}
      {page === "dashboard" && <DashboardPage user={user} onLogout={handleLogout} />}
    </>
  );
}

export default App;
