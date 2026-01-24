import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import { useState } from "react";

const Header = () => {
  const { user, setUser, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/users/logout");
    } catch {}

    setUser(null);
    setMenuOpen(false);
    localStorage.removeItem("accessToken")
    navigate("/");
  };

  if (loading) return null;

  return (
    <header className="text-black px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">OneVJTI</h1>

      <nav className="flex gap-8 text-lg font-medium">
        {!user ? (
          <>
            <Link to="/users/register">Register</Link>
            <Link to="/users/login">Login</Link>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
            >
              <span className="w-6 h-0.5 bg-black" />
              <span className="w-6 h-0.5 bg-black" />
              <span className="w-6 h-0.5 bg-black" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg">
                <div className="px-4 py-3 border-b">
                  <p className="font-semibold">{user.fullName}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <button onClick={() => navigate("/users/profile")}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition rounded-md">
                  Profile
                </button>

                <button onClick={() => navigate("/users/change-password")}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition rounded-md">
                  Change Password
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-red-500 hover:bg-gray-100 hover:text-gray-900 transition rounded-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
