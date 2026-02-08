// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("token");
//     if (stored) setToken(stored);
//   }, []);

//   const login = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         isAuthenticated: !!token,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);



// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Restore auth on refresh
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const savedUser = localStorage.getItem("user");

//     if (token && savedUser) {
//       setUser(JSON.parse(savedUser));
//     } else {
//       setUser(null);
//     }

//     setLoading(false);
//   }, []);

//   // Login handler
//   const login = (data) => {
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));
//     setUser(data.user);
//   };

//   // Logout handler
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         loading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);





// import { createContext, useContext, useEffect, useState } from "react";
// import {jwtDecode} from
//  "jwt-decode";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔁 Restore auth on refresh
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUser(decoded);
//       } catch (err) {
//         console.error("Invalid token", err);
//         localStorage.removeItem("token");
//         setUser(null);
//       }
//     }

//     setLoading(false);
//   }, []);

//   // ✅ Login (works for email + OAuth)
//   const login = ({ token }) => {
//     localStorage.setItem("token", token);
//     const decoded = jwtDecode(token);
//     setUser(decoded);
//   };

//   // 🚪 Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         loading,
//         login,
//         logout,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);




// import { createContext, useContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   /* ================= RESTORE AUTH ================= */

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const savedUser = localStorage.getItem("user");

//     if (token) {
//       try {
//         if (savedUser) {
//           setUser(JSON.parse(savedUser));
//         } else {
//           // 🔥 OAuth case: rebuild user from token
//           const decoded = jwtDecode(token);

//           const rebuiltUser = {
//             id: decoded.id,
//             email: decoded.email,
//             provider: decoded.provider,
//             role: decoded.role || "user",
//           };

//           localStorage.setItem("user", JSON.stringify(rebuiltUser));
//           setUser(rebuiltUser);
//         }
//       } catch (err) {
//         console.error("Auth restore failed", err);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         setUser(null);
//       }
//     }

//     setLoading(false);
//   }, []);

//   /* ================= LOGIN ================= */

//   const login = ({ token, user }) => {
//     localStorage.setItem("token", token);

//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//       setUser(user);
//     } else {
//       // OAuth fallback safety
//       const decoded = jwtDecode(token);

//       const rebuiltUser = {
//         id: decoded.id,
//         email: decoded.email,
//         provider: decoded.provider,
//         role: decoded.role || "user",
//       };

//       localStorage.setItem("user", JSON.stringify(rebuiltUser));
//       setUser(rebuiltUser);
//     }
//   };

//   /* ================= LOGOUT ================= */

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         loading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   /* ================= RESTORE AUTH ON REFRESH ================= */

//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");

//   //   if (!token) {
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   try {
//   //     const decoded = jwtDecode(token);

//   //     const restoredUser = {
//   //       id: decoded.id,
//   //       email: decoded.email,
//   //       provider: decoded.provider || "local", // 🔒 force safety
//   //       role: decoded.role || "user",
//   //     };

//   //     localStorage.setItem("user", JSON.stringify(restoredUser));
//   //     setUser(restoredUser);
//   //   } catch (err) {
//   //     console.error("Invalid token, clearing auth");
//   //     localStorage.removeItem("token");
//   //     localStorage.removeItem("user");
//   //     setUser(null);
//   //   }

//   //   setLoading(false);
//   // }, []);
//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     setUser(null);
//     setLoading(false);
//     return;
//   }

//   try {
//     const decoded = jwtDecode(token);

//     const rebuiltUser = {
//       id: decoded.id,
//       email: decoded.email,
//       provider: decoded.provider || "local",
//       role: decoded.role || "user",
//     };

//     localStorage.setItem("user", JSON.stringify(rebuiltUser));
//     setUser(rebuiltUser);
//   } catch (err) {
//     console.error("Auth restore failed", err);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   }

//   setLoading(false);
// }, []);


//   /* ================= LOGIN ================= */

//   // Works for BOTH:
//   // 1. Normal login (email/password)
//   // 2. OAuth login (Google / GitHub)
//   const login = ({ token, user }) => {
//     localStorage.setItem("token", token);

//     if (user) {
//       // Normal login
//       const safeUser = {
//         id: user.id,
//         email: user.email,
//         provider: user.provider || "local",
//         role: user.role || "user",
//       };

//       localStorage.setItem("user", JSON.stringify(safeUser));
//       setUser(safeUser);
//     } else {
//       // OAuth login
//       const decoded = jwtDecode(token);

//       const oauthUser = {
//         id: decoded.id,
//         email: decoded.email,
//         provider: decoded.provider, // google | github
//         role: decoded.role || "user",
//       };

//       localStorage.setItem("user", JSON.stringify(oauthUser));
//       setUser(oauthUser);
//     }
//   };

//   /* ================= LOGOUT ================= */

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         loading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= RESTORE AUTH ================= */

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);

      const rebuiltUser = {
        id: decoded.id,
        email: decoded.email,
        provider: decoded.provider, // 🔥 THIS IS THE KEY
        role: decoded.role || "user",
      };

      localStorage.setItem("user", JSON.stringify(rebuiltUser));
      setUser(rebuiltUser);
    } catch (err) {
      console.error("Auth restore failed", err);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }

    setLoading(false);
  }, []);

  /* ================= LOGIN ================= */

  const login = ({ token }) => {
    localStorage.setItem("token", token);

    const decoded = jwtDecode(token);

    const rebuiltUser = {
      id: decoded.id,
      email: decoded.email,
      provider: decoded.provider,
      role: decoded.role || "user",
    };

    localStorage.setItem("user", JSON.stringify(rebuiltUser));
    setUser(rebuiltUser);
  };

  /* ================= LOGOUT ================= */

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
