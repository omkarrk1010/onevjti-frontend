import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    year: "",
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/current-user");
        const data = res.data.data;

        setUser(data);
        setFormData({
          fullName: data.fullName || "",
          email: data.email || "",
          department: data.department || "",
          year: data.year || "",
        });
      } catch {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update account
  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await api.patch("/users/update-account", formData);
      setMessage("Profile updated successfully");
    } catch (err) {
      setError(err?.response?.data?.message || "Update failed");
    }
  };

  // Update avatar
  const handleAvatarUpload = async (e) => {
    e.preventDefault();
    if (!avatarFile) return;

    setMessage("");
    setError("");

    const form = new FormData();
    form.append("avatar", avatarFile);

    try {
      await api.patch("/users/update-avatar", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Avatar updated successfully");
    } catch (err) {
      setError(err?.response?.data?.message || "Avatar update failed");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10">Not authorized</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center">My Profile</h1>

        {/* Avatar Section */}
        <div className="flex items-center gap-6">
          <img
            src={user.avatar || "/default-avatar.png"}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover border"
          />

          <form onSubmit={handleAvatarUpload} className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatarFile(e.target.files[0])}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-500 text-white rounded-lg"
            >
              Update Avatar
            </button>
          </form>
        </div>

        {/* Success / Error Messages */}
        {message && (
          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg">
            {message}
          </div>
        )}
        {error && (
          <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {/* Profile Form */}
        <form onSubmit={handleUpdateAccount} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Department</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Year</label>
            <input
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg"
          >
            Save Changes
          </button>
        </form>

        {/* Go Home */}
        {message && (
          <div className="text-center">
            <button
              onClick={() => navigate("/")}
              className="text-purple-600 underline"
            >
              Go Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
