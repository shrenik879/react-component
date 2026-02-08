// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function OAuthSuccess() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [params] = useSearchParams();

//   useEffect(() => {
//     const token = params.get("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // save token the same way normal login does
//     login({ token });

//     // redirect to home
//     navigate("/");
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-slate-600 text-sm">
//         Signing you in...
//       </p>
//     </div>
//   );
// }


// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { jwtDecode } from "jwt-decode";

// export default function OAuthSuccess() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [params] = useSearchParams();

//   useEffect(() => {
//     const token = params.get("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const decoded = jwtDecode(token);

//       login({
//         token,
//         user: {
//           id: decoded.id,
//           email: decoded.email,
//           provider: decoded.provider,
//           role: decoded.role || "user",
//         },
//       });

//       navigate("/");
//     } catch (err) {
//       console.error("OAuth decode failed", err);
//       navigate("/login");
//     }
//   }, [login, navigate, params]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-slate-600 text-sm">
//         Signing you in…
//       </p>
//     </div>
//   );
// }


// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { jwtDecode } from "jwt-decode";

// export default function OAuthSuccess() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [params] = useSearchParams();

//   useEffect(() => {
//     const token = params.get("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const decoded = jwtDecode(token);

//       const user = {
//         id: decoded.id,
//         email: decoded.email,
//         provider: decoded.provider, // local | google | github
//         role: decoded.role || "user",
//       };

//       // ✅ SAME format as normal login
//       login({ token, user });

//       navigate("/");
//     } catch (err) {
//       console.error("OAuth login failed", err);
//       navigate("/login");
//     }
//   }, [login, navigate, params]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-slate-600 text-sm">Signing you in…</p>
//     </div>
//   );
// }



// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { jwtDecode } from "jwt-decode";

// export default function OAuthSuccess() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [params] = useSearchParams();

//   useEffect(() => {
//     const token = params.get("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     let decoded;
//     try {
//       decoded = jwtDecode(token);
//     } catch (err) {
//       console.error("Invalid token", err);
//       navigate("/login");
//       return;
//     }

//     // ✅ SAFETY FALLBACKS
//     const user = {
//       id: decoded.id,
//       email: decoded.email || "",
//       provider: decoded.provider || "local",
//       role: decoded.role || "user",
//     };

//     login({ token, user });
//     navigate("/");
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-slate-600 text-sm">Signing you in…</p>
//     </div>
//   );
// }


// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function OAuthSuccess() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [params] = useSearchParams();

//   useEffect(() => {
//     const token = params.get("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // ✅ ONLY save token
//     login({ token });

//     navigate("/");
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-slate-600 text-sm">Signing you in…</p>
//     </div>
//   );
// }



// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { jwtDecode } from "jwt-decode";

// export default function OAuthSuccess() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [params] = useSearchParams();

//   useEffect(() => {
//     const token = params.get("token");
//     if (!token) return navigate("/login");

//     let decoded;
//     try {
//       decoded = jwtDecode(token);
//     } catch {
//       return navigate("/login");
//     }

//     const user = {
//       id: decoded.id,
//       email: decoded.email,        // ✅ DO NOT FALLBACK
//       provider: decoded.provider,
//       role: decoded.role || "user",
//     };

//     login({ token, user });
//     navigate("/");
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-slate-600 text-sm">Signing you in…</p>
//     </div>
//   );
// }



import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

export default function OAuthSuccess() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [params] = useSearchParams();

  useEffect(() => {
    const token = params.get("token");
    if (!token) return navigate("/login");

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch {
      return navigate("/login");
    }

    // 🔴 HARD REQUIREMENTS
    if (!decoded.email || !decoded.provider) {
      console.error("OAuth token missing email/provider", decoded);
      return navigate("/login");
    }

    login({
      token,
      user: {
        id: decoded.id,
        email: decoded.email,
        provider: decoded.provider,
        role: decoded.role || "user",
      },
    });

    navigate("/");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-600 text-sm">Signing you in…</p>
    </div>
  );
}
