// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Signup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await apiRequest("/auth/register", "POST", {
//         name,
//         email,
//         password,
//       });

//       // After successful signup → go to login
//       navigate("/login");
//     } catch (err) {
//       alert(err.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.25)] px-8 py-10 text-slate-900">
//       {/* Title */}
//       <h1 className="text-3xl font-semibold">
//         Create your account <span className="inline-block">✨</span>
//       </h1>

//       <p className="mt-2 text-slate-600">
//         Join ReactForge and start building faster
//       </p>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//         <input
//           type="text"
//           placeholder="Name"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <button
//           disabled={loading}
//           className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 py-3 font-medium text-white shadow-lg hover:opacity-90 transition disabled:opacity-60"
//         >
//           {loading ? "Creating account..." : "Sign up"}
//         </button>
//       </form>

//       {/* Footer */}
//       <p className="mt-6 text-center text-sm text-slate-600">
//         Already have an account?{" "}
//         <Link to="/login" className="font-medium text-indigo-600 hover:underline">
//           Sign in
//         </Link>
//       </p>
//     </div>
//   );
// }





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await apiRequest("/auth/register", "POST", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl px-10 py-12">

      {/* HORIZONTAL LOGO */}
      <div className="flex items-center justify-center gap-3 mb-6">

        <div className="w-10 h-10 rounded-xl bg-white shadow-md border flex items-center justify-center">
          <span className="text-indigo-600 font-extrabold text-lg">
            R
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          ReactForge
        </h1>
      </div>

      {/* TAGLINE */}
      <p className="text-center text-sm text-slate-600 mb-8">
        Create your account and start building faster with AI.
      </p>

      {/* ERROR */}
      {error && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition duration-200"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition duration-200"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition duration-200"
        />

        <button
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-violet-600
                     text-white py-3 rounded-xl font-semibold
                     shadow-md
                     hover:shadow-lg hover:scale-[1.02]
                     transition duration-200 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>

      {/* LOGIN LINK */}
      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
