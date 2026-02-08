// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = await apiRequest("/auth/login", "POST", {
//         email,
//         password,
//       });

//       // Decode minimal user info from token payload (backend sends role)
//       const payload = JSON.parse(atob(data.token.split(".")[1]));

//       login(data.token, {
//         id: payload.id,
//         role: payload.role,
//       });

//       navigate("/");
//     } catch (err) {
//       alert(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.25)] px-8 py-10">
//       <h1 className="text-3xl font-semibold text-slate-900">
//         Welcome back 👋
//       </h1>

//       <p className="mt-2 text-slate-600">
//         Sign in to continue building with ReactForge
//       </p>

//       <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="input"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input"
//         />

//         <button className="btn-primary w-full">
//           {loading ? "Signing in..." : "Sign in"}
//         </button>
//       </form>

//       <p className="mt-6 text-center text-sm text-slate-600">
//         Don’t have an account?{" "}
//         <Link to="/signup" className="text-indigo-600 font-medium">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }




// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const data = await apiRequest("/auth/login", "POST", {
//         email,
//         password,
//       });

//       // ✅ CORRECT: pass full response
//       login(data);

//       navigate("/");
//     } catch (err) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl
//                     shadow-[0_40px_100px_rgba(0,0,0,0.25)] px-8 py-10">
//       <h1 className="text-3xl font-semibold text-slate-900">
//         Welcome back 👋
//       </h1>

//       <p className="mt-2 text-slate-600">
//         Sign in to continue building with ReactForge
//       </p>

//       {error && (
//         <div className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="input"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input"
//         />

//         <button
//           disabled={loading}
//           className="btn-primary w-full disabled:opacity-60"
//         >
//           {loading ? "Signing in..." : "Sign in"}
//         </button>
//       </form>

//       <p className="mt-6 text-center text-sm text-slate-600">
//         Don’t have an account?{" "}
//         <Link to="/signup" className="text-indigo-600 font-medium">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const data = await apiRequest("/auth/login", "POST", {
//         email,
//         password,
//       });

//       login(data);
//       navigate("/");
//     } catch (err) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md bg-white rounded-3xl shadow-xl px-10 py-12">

//       {/* HORIZONTAL LOGO (EXACT NAVBAR STYLE) */}
//       <div className="flex items-center justify-center gap-3 mb-6">

//         {/* Logo Box */}
//         <div className="w-10 h-10 rounded-xl bg-white shadow-md border flex items-center justify-center">
//           <span className="text-indigo-600 font-extrabold text-lg">
//             R
//           </span>
//         </div>

//         {/* Brand Name */}
//         <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
//           ReactForge
//         </h1>
//       </div>

//       {/* TAGLINE */}
//       <p className="text-center text-sm text-slate-600 mb-8">
//         Build and share powerful React components faster with AI.
//       </p>

//       {/* ERROR */}
//       {error && (
//         <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
//           {error}
//         </div>
//       )}

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="space-y-5">

//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full rounded-xl border border-slate-300 px-4 py-3
//                      focus:outline-none focus:ring-2 focus:ring-indigo-500
//                      transition duration-200"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full rounded-xl border border-slate-300 px-4 py-3
//                      focus:outline-none focus:ring-2 focus:ring-indigo-500
//                      transition duration-200"
//         />

//         <button
//           disabled={loading}
//           className="w-full bg-gradient-to-r from-indigo-600 to-violet-600
//                      text-white py-3 rounded-xl font-semibold
//                      shadow-md
//                      hover:shadow-lg hover:scale-[1.02]
//                      transition duration-200 disabled:opacity-60"
//         >
//           {loading ? "Signing in..." : "Sign in"}
//         </button>
//       </form>

//       {/* SIGNUP LINK */}
//       <p className="mt-8 text-center text-sm text-slate-600">
//         Don’t have an account?{" "}
//         <Link
//           to="/signup"
//           className="text-indigo-600 font-semibold hover:underline"
//         >
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }




// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const data = await apiRequest("/auth/login", "POST", {
//         email,
//         password,
//       });

//       login(data);
//       navigate("/");
//     } catch (err) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* 🔐 OAUTH REDIRECTS */
//   const loginWithGoogle = () => {
//     window.location.href = "http://localhost:5000/auth/google";
//   };

//   const loginWithGithub = () => {
//     window.location.href = "http://localhost:5000/auth/github";
//   };

//   return (
//     <div className="w-full max-w-md bg-white rounded-3xl shadow-xl px-10 py-12">

//       {/* LOGO */}
//       <div className="flex items-center justify-center gap-3 mb-6">
//         <div className="w-10 h-10 rounded-xl bg-white shadow-md border flex items-center justify-center">
//           <span className="text-indigo-600 font-extrabold text-lg">R</span>
//         </div>
//         <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
//           ReactForge
//         </h1>
//       </div>

//       <p className="text-center text-sm text-slate-600 mb-6">
//         Build and share powerful React components faster with AI.
//       </p>

//       {/* ERROR */}
//       {error && (
//         <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
//           {error}
//         </div>
//       )}

//       {/* 🔐 SOCIAL LOGIN */}
//       <div className="space-y-3 mb-6">

//         <button
//           onClick={loginWithGoogle}
//           className="w-full flex items-center justify-center gap-3
//                      border border-slate-300 rounded-xl py-3
//                      hover:bg-slate-50 transition"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             alt="Google"
//             className="w-5 h-5"
//           />
//           <span className="font-medium text-slate-700">
//             Continue with Google
//           </span>
//         </button>

//         <button
//           onClick={loginWithGithub}
//           className="w-full flex items-center justify-center gap-3
//                      border border-slate-300 rounded-xl py-3
//                      hover:bg-slate-50 transition"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475654/github-color.svg"
//             alt="GitHub"
//             className="w-5 h-5"
//           />
//           <span className="font-medium text-slate-700">
//             Continue with GitHub
//           </span>
//         </button>

//       </div>

//       {/* DIVIDER */}
//       <div className="flex items-center gap-3 my-6">
//         <div className="flex-1 h-px bg-slate-200" />
//         <span className="text-xs text-slate-500">OR</span>
//         <div className="flex-1 h-px bg-slate-200" />
//       </div>

//       {/* EMAIL LOGIN */}
//       <form onSubmit={handleSubmit} className="space-y-5">

//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full rounded-xl border border-slate-300 px-4 py-3
//                      focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full rounded-xl border border-slate-300 px-4 py-3
//                      focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <button
//           disabled={loading}
//           className="w-full bg-gradient-to-r from-indigo-600 to-violet-600
//                      text-white py-3 rounded-xl font-semibold
//                      shadow-md hover:shadow-lg hover:scale-[1.02]
//                      transition disabled:opacity-60"
//         >
//           {loading ? "Signing in..." : "Sign in"}
//         </button>
//       </form>

//       {/* SIGNUP */}
//       <p className="mt-8 text-center text-sm text-slate-600">
//         Don’t have an account?{" "}
//         <Link
//           to="/signup"
//           className="text-indigo-600 font-semibold hover:underline"
//         >
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await apiRequest("/auth/login", "POST", {
        email,
        password,
      });

      login(data);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  /* 🔐 OAUTH REDIRECTS */
  const loginWithGoogle = () => {
    // window.location.href = "http://localhost:5000/auth/google";

    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;

  };

  const loginWithGithub = () => {
    // window.location.href = "http://localhost:5000/auth/github";
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/github`;

  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl px-10 py-12">

      {/* LOGO */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-white shadow-md border flex items-center justify-center">
          <span className="text-indigo-600 font-extrabold text-lg">R</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          ReactForge
        </h1>
      </div>

      <p className="text-center text-sm text-slate-600 mb-8">
        Build and share powerful React components faster with AI.
      </p>

      {/* ERROR */}
      {error && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      {/* EMAIL LOGIN */}
      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-violet-600
                     text-white py-3 rounded-xl font-semibold
                     shadow-md hover:shadow-lg hover:scale-[1.02]
                     transition disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 my-8">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-500">OR</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* 🔐 SOCIAL LOGIN (BOTTOM) */}
      <div className="space-y-3">

        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center gap-3
                     border border-slate-300 rounded-xl py-3
                     hover:bg-slate-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium text-slate-700">
            Continue with Google
          </span>
        </button>

        <button
          onClick={loginWithGithub}
          className="w-full flex items-center justify-center gap-3
                     border border-slate-300 rounded-xl py-3
                     hover:bg-slate-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475654/github-color.svg"
            alt="GitHub"
            className="w-5 h-5"
          />
          <span className="font-medium text-slate-700">
            Continue with GitHub
          </span>
        </button>

      </div>

      {/* SIGNUP */}
      <p className="mt-8 text-center text-sm text-slate-600">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

