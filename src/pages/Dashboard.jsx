import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/current-user");
        setUser(res.data.data);
      } catch (err) {
        setError("You are not logged in");
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-emerald-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
      <h1 className="text-4xl font-bold text-emerald-400">
        Welcome, {user.fullName} 👋
      </h1>
    </div>
  );
};

export default Home;
