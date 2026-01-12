import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return setError("Enter your name");
    if (!username) return setError("Enter your username");
    if (!email) return setError("Enter your email");
    if (!department) return setError("Enter your department");
    if (!year) return setError("Enter your year");
    if (!password) return setError("Enter your password");

    setError("");
    setSuccess(true);

    // 🔗 API call goes here later
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">

      {/* Glow */}
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
          User Registration
        </h1>

        {!success ? (
          /* 📝 FORM */
          <form onSubmit={handleSubmit} className="space-y-4">
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder="Name" />
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder="Username" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder="Email" />
            <input value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder="Department" />
            <input value={year} onChange={(e) => setYear(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder="Year" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder="Password" />

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
              Register
            </button>

            <Link
              to="/users/login"
              className="block text-center text-emerald-400 hover:underline"
            >
              Already have an account? Log in
            </Link>
          </form>
        ) : (
          /* ✅ SUCCESS STATE */
          <div className="text-center space-y-6">
            <p className="text-emerald-400 text-lg font-semibold">
              🎉 Registration successful!
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

export default Register;
