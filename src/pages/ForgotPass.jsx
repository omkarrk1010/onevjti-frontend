import React, { useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success,setSuccess] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError("Both fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

   
    setError("");
    setSuccess(true)

  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">

      <div
        className="
          absolute inset-0 m-auto
          w-[500px] h-[500px]
          bg-emerald-500/15
          blur-3xl
          rounded-full
        "
      />

      <Card>
        <h1 className="text-3xl font-bold text-emerald-200 text-center mb-8 tracking-wide">
          Change password
        </h1>
         
        
         {!success?(
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner"
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="
              w-full mt-2 py-3 rounded-xl
              bg-black text-emerald-400 font-semibold
              border border-emerald-600
              hover:bg-emerald-600 hover:text-black
              hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)]
              active:scale-95
              transition-all
            "
          >
            Submit
          </button>

        </form>

        
  ) : (
    /* ✅ SUCCESS STATE */
    <div className="text-center space-y-6">
      <p className="text-emerald-400 text-lg font-semibold">
        🎉 New password set successfully
      </p>

      <button
        onClick={() => navigate("/users/login")}
        className="
          w-full py-3 rounded-xl
          bg-emerald-600 text-black font-semibold
          hover:bg-emerald-500
          hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)]
          active:scale-95
          transition-all
        "
      >
        Go to Login
      </button>
    </div>
    )}

      </Card>
    </div>
  );
};

export default ForgotPass;
