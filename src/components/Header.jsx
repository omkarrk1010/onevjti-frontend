import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check auth on mount (and on refresh)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/users/current-user"); // getCurrentUser
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/users/logout"); // backend cleanup
    } catch {
      // even if backend fails, frontend logout must proceed
    }

    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/users/login");
  };

  // Prevent flicker while auth is being checked
  if (loading) return null;

  return (
    <header className="text-black px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">OneVJTI</h1>

      <nav className="flex gap-8 text-lg font-medium">
        <Link to="/" className="hover:text-purple-500">
          Home
        </Link>

        {!isLoggedIn ? (
          <>
            <Link
              to="/users/register"
              className="hover:text-purple-500"
            >
              Register
            </Link>
            <Link
              to="/users/login"
              className="hover:text-purple-500"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/users/change-password"
              className="hover:text-purple-500"
            >
              Change Password
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-red-500 transition"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
