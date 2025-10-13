import { useState } from "react";
import IsLogin from "./components/isLogin";
import DashboardPage from "./components/Dashboardpage";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null); // store user info

  const handleAuthSuccess = (userInfo) => {
    setUser(userInfo);
    setPage("dashboard");
  };

  // Simulate logout
  const handleLogout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <>
      {page === "login" && <IsLogin onAuthSuccess={handleAuthSuccess} />}
      {page === "dashboard" && <DashboardPage user={user} onLogout={handleLogout} />}
    </>
  );

}

export default App;
