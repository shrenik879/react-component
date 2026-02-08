import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      return setError("New passwords do not match");
    }

    try {
      setLoading(true);

      await apiRequest("/auth/change-password", "POST", {
        currentPassword,
        newPassword,
      });

      setSuccess("Password updated successfully");

      setTimeout(() => {
        logout();
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden
                    bg-gradient-to-br from-indigo-100 via-violet-100 to-cyan-100">

      {/* Soft ambient glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
                      bg-indigo-400/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px]
                      bg-violet-400/30 blur-[160px] rounded-full" />

      {/* Centered card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div
          className="w-full max-w-md bg-white/80 backdrop-blur-xl
                     rounded-3xl p-10
                     shadow-[0_40px_120px_rgba(99,102,241,0.35)]
                     transition-all duration-500
                     hover:-translate-y-1
                     hover:shadow-[0_60px_160px_rgba(99,102,241,0.45)]"
        >
          {/* Branding */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600
                               bg-clip-text text-transparent">
                ReactForge
              </span>
            </h1>
            <p className="text-slate-500 mt-1">Secure your account</p>
          </div>

          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Change password
          </h2>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg animate-pulse">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3
                         focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3
                         focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3
                         focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              disabled={loading}
              className="w-full mt-4 rounded-xl bg-indigo-600 text-white py-3
                         font-medium shadow-md
                         hover:bg-indigo-700 hover:shadow-lg
                         active:scale-[0.97]
                         transition-all duration-300
                         disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update password"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            You’ll be logged out after changing your password
          </p>
        </div>
      </div>
    </div>
  );
}
