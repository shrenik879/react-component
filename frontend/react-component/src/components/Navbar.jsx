// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="text-xl font-semibold text-white">
//           ReactForge
//         </Link>

//         {/* Links */}
//         <div className="flex items-center gap-6 text-sm text-white/90">
//           <Link to="/components" className="hover:text-white">
//             Components
//           </Link>

//           {isAuthenticated && (
//             <Link to="/ai" className="hover:text-white">
//               AI
//             </Link>
//           )}

//           {/* Developer */}
//           {isAuthenticated && user?.role === "developer" && (
//             <>
//               <Link to="/dashboard" className="hover:text-white">
//                 Dashboard
//               </Link>
//               <Link to="/submit" className="hover:text-white">
//                 Submit
//               </Link>
//             </>
//           )}

//           {/* Admin */}
//           {isAuthenticated && user?.role === "admin" && (
//             <Link to="/admin" className="hover:text-white">
//               Admin
//             </Link>
//           )}
//         </div>

//         {/* Auth buttons */}
//         <div className="flex items-center gap-4">
//           {!isAuthenticated ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-white/90 hover:text-white"
//               >
//                 Sign in
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-white/90 text-slate-900 rounded-full px-5 py-2 text-sm font-medium hover:bg-white"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }





// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const navLinkClass = ({ isActive }) =>
//     `relative font-medium transition
//      ${isActive ? "text-white" : "text-white/90 hover:text-white"}
//      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//      after:w-0 after:bg-white after:transition-all
//      hover:after:w-full`;

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-md">
//       {/* Gradient background + shadow */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 shadow-[0_12px_40px_rgba(99,102,241,0.4)]" />

//       {/* Soft reflection */}
//       <div className="absolute inset-0 bg-white/10 opacity-30 pointer-events-none" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-tight text-white
//                      hover:scale-[1.04] transition-transform"
//         >
//           <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent drop-shadow">
//             ReactForge
//           </span>
//         </Link>

//         {/* DESKTOP NAV LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>
//             Home
//           </NavLink>

//           <NavLink to="/components" className={navLinkClass}>
//             Components
//           </NavLink>

//           <a
//             href="#how-it-works"
//             className="relative font-medium text-white/90 hover:text-white transition
//                        after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//                        after:w-0 after:bg-white after:transition-all
//                        hover:after:w-full"
//           >
//             How it works
//           </a>

//           {/* AI visible to ALL users */}
//           <NavLink to="/ai" className={navLinkClass}>
//             AI Playground
//           </NavLink>

//           {/* Developer-only */}
//           {isAuthenticated && user?.role === "developer" && (
//             <>
//               <NavLink to="/dashboard" className={navLinkClass}>
//                 Dashboard
//               </NavLink>
//               <NavLink to="/submit" className={navLinkClass}>
//                 Submit
//               </NavLink>
//             </>
//           )}

//           {/* Admin-only */}
//           {isAuthenticated && user?.role === "admin" && (
//             <NavLink to="/admin" className={navLinkClass}>
//               Admin
//             </NavLink>
//           )}
//         </div>

//         {/* AUTH BUTTONS (DESKTOP) */}
//         <div className="hidden md:flex items-center gap-4">
//           {!isAuthenticated ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-white/90 hover:text-white transition"
//               >
//                 Sign in
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-6 py-2
//                            text-sm font-semibold
//                            hover:bg-indigo-50 hover:scale-[1.05]
//                            transition-all shadow-md"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-white/90 text-slate-900 rounded-full px-6 py-2
//                          text-sm font-semibold
//                          hover:bg-white hover:scale-[1.05]
//                          transition-all shadow-md"
//             >
//               Logout
//             </button>
//           )}
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white text-2xl"
//         >
//           ☰
//         </button>
//       </nav>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 px-6 pb-6 space-y-4 text-white">
//           <Link to="/" onClick={() => setOpen(false)}>
//             Home
//           </Link>

//           <Link to="/components" onClick={() => setOpen(false)}>
//             Components
//           </Link>

//           <a href="#how-it-works" onClick={() => setOpen(false)}>
//             How it works
//           </a>

//           <Link to="/ai" onClick={() => setOpen(false)}>
//             AI Playground
//           </Link>

//           {isAuthenticated && user?.role === "developer" && (
//             <>
//               <Link to="/dashboard" onClick={() => setOpen(false)}>
//                 Dashboard
//               </Link>
//               <Link to="/submit" onClick={() => setOpen(false)}>
//                 Submit
//               </Link>
//             </>
//           )}

//           {isAuthenticated && user?.role === "admin" && (
//             <Link to="/admin" onClick={() => setOpen(false)}>
//               Admin
//             </Link>
//           )}

//           <div className="pt-4 border-t border-white/20">
//             {!isAuthenticated ? (
//               <>
//                 <Link to="/login" onClick={() => setOpen(false)}>
//                   Sign in
//                 </Link>
//                 <br />
//                 <Link to="/signup" onClick={() => setOpen(false)}>
//                   Get started
//                 </Link>
//               </>
//             ) : (
//               <button onClick={handleLogout}>Logout</button>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }




  // import { Link, NavLink, useNavigate } from "react-router-dom";
  // import { useAuth } from "../context/AuthContext";
  // import { useState } from "react";

  // export default function Navbar() {
  //   const { isAuthenticated, user, logout } = useAuth();
  //   const navigate = useNavigate();
  //   const [profileOpen, setProfileOpen] = useState(false);

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/login");
  //   };

  //   const navLinkClass = ({ isActive }) =>
  //     `relative font-medium transition
  //     ${isActive ? "text-white" : "text-white/90 hover:text-white"}
  //     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
  //     after:w-0 after:bg-white after:transition-all
  //     hover:after:w-full`;

  //   const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";

  //   return (
  //     <header className="sticky top-0 z-50 backdrop-blur-md">
  //       {/* Gradient */}
  //       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 shadow-[0_12px_40px_rgba(99,102,241,0.45)]" />
  //       <div className="absolute inset-0 bg-white/10 pointer-events-none" />

  //       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  //         {/* LOGO */}
  //         <Link to="/" className="text-2xl font-bold text-white">
  //           <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
  //             ReactForge
  //           </span>
  //         </Link>

  //         {/* LINKS */}
  //         <div className="hidden md:flex items-center gap-8 text-sm">
  //           <NavLink to="/" className={navLinkClass}>Home</NavLink>
  //           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
  //           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>
  //         </div>

  //         {/* RIGHT */}
  //         <div className="flex items-center gap-4">
  //           {!isAuthenticated ? (
  //             <>
  //               <Link
  //                 to="/login"
  //                 className="text-sm text-white/90 hover:text-white transition"
  //               >
  //                 Sign in
  //               </Link>

  //               <Link
  //                 to="/signup"
  //                 className="bg-white text-slate-900 rounded-full px-6 py-2
  //                           text-sm font-semibold hover:scale-[1.05]
  //                           transition shadow-md"
  //               >
  //                 Get started
  //               </Link>
  //             </>
  //           ) : (
  //             /* PROFILE DROPDOWN */
  //             <div className="relative">
  //               <button
  //                 onClick={() => setProfileOpen(!profileOpen)}
  //                 className="flex items-center gap-3 bg-white/90 px-3 py-2 rounded-full
  //                           hover:bg-white transition shadow-md"
  //               >
  //                 {/* Avatar */}
  //                 <div className="w-9 h-9 rounded-full bg-gradient-to-br
  //                                 from-indigo-600 to-violet-600
  //                                 text-white flex items-center justify-center
  //                                 font-bold shadow">
  //                   {firstLetter}
  //                 </div>

  //                 <div className="text-left">
  //                   <p className="text-sm font-semibold text-slate-900">
  //                     {user?.name}
  //                   </p>
  //                   <p className="text-xs text-slate-500 capitalize">
  //                     {user?.role}
  //                   </p>
  //                 </div>
  //               </button>

  //               {profileOpen && (
  //                 <div className="absolute right-0 mt-3 w-56 bg-white
  //                                 rounded-xl shadow-xl border overflow-hidden">
  //                   {/* DASHBOARD */}
  //                   <Link
  //                     to="/dashboard"
  //                     className="block px-4 py-3 hover:bg-slate-50"
  //                     onClick={() => setProfileOpen(false)}
  //                   >
  //                     Dashboard
  //                   </Link>

  //                   {/* CHANGE PASSWORD */}
  //                   <Link
  //                     to="/change-password"
  //                     className="block px-4 py-3 hover:bg-slate-50"
  //                     onClick={() => setProfileOpen(false)}
  //                   >
  //                     Change password
  //                   </Link>

  //                   {/* DEVELOPER */}
  //                   {user?.role === "developer" && (
  //                     <Link
  //                       to="/submit"
  //                       className="block px-4 py-3 hover:bg-slate-50"
  //                       onClick={() => setProfileOpen(false)}
  //                     >
  //                       Submit component
  //                     </Link>
  //                   )}

  //                   {/* ADMIN */}
  //                   {user?.role === "admin" && (
  //                     <Link
  //                       to="/admin"
  //                       className="block px-4 py-3 hover:bg-slate-50"
  //                       onClick={() => setProfileOpen(false)}
  //                     >
  //                       Admin panel
  //                     </Link>
  //                   )}

  //                   <div className="border-t">
  //                     <button
  //                       onClick={handleLogout}
  //                       className="w-full text-left px-4 py-3
  //                                 text-red-600 hover:bg-red-50"
  //                     >
  //                       Logout
  //                     </button>
  //                   </div>
  //                 </div>
  //               )}
  //             </div>
  //           )}
  //         </div>
  //       </nav>
  //     </header>
  //   );
  // }




// import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // ✅ ULTRA-SAFE INITIALS (never crashes)
//   const getInitials = (name) => {
//     if (!name || typeof name !== "string") return "U";

//     const parts = name.trim().split(/\s+/);
//     const first = parts[0]?.charAt(0);
//     const second = parts[1]?.charAt(0);

//     return (first + (second || "")).toUpperCase();
//   };

//   const initials = getInitials(user?.name);

//   /* ================= EFFECTS ================= */

//   // Close profile dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Smooth scroll for hash links like #how-it-works
//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   const navLinkClass = ({ isActive }) =>
//     `relative font-medium transition
//      text-white/90 hover:text-white
//      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//      after:w-0 after:bg-white after:transition-all
//      hover:after:w-full`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-md">
//       {/* Gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 shadow-[0_12px_40px_rgba(99,102,241,0.45)]" />
//       <div className="absolute inset-0 bg-white/10 pointer-events-none" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-tight hover:scale-[1.04] transition-transform"
//         >
//           <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent drop-shadow">
//             ReactForge
//           </span>
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>
//             Home
//           </NavLink>

//           <NavLink to="/components" className={navLinkClass}>
//             Components
//           </NavLink>

//           <Link to="/#how-it-works" className={navLinkClass}>
//             How it works
//           </Link>

//           <NavLink to="/ai" className={navLinkClass}>
//             AI Playground
//           </NavLink>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {/* IMPORTANT: loading guard (no hook issues) */}
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-white/90 hover:text-white transition"
//               >
//                 Sign in
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-6 py-2
//                            text-sm font-semibold hover:bg-indigo-50 hover:scale-[1.05]
//                            transition-all shadow-md"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             /* PROFILE */
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen((v) => !v)}
//                 className="flex items-center gap-3 bg-white/90 px-3 py-2 rounded-full
//                            hover:bg-white transition shadow-md"
//               >
//                 {/* Avatar */}
//                 <div
//                   className="w-10 h-10 rounded-full bg-gradient-to-br
//                              from-indigo-600 to-violet-600 text-white
//                              flex items-center justify-center font-bold text-sm
//                              ring-2 ring-white/40 shadow"
//                 >
//                   {initials}
//                 </div>

//                 <div className="hidden sm:block text-left">
//                   <p className="text-sm font-semibold text-slate-900">
//                     {user?.name || "User"}
//                   </p>
//                   <p className="text-xs text-slate-500 capitalize">
//                     {user?.role}
//                   </p>
//                 </div>
//               </button>

//               {/* DROPDOWN */}
//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-2xl border overflow-hidden">
//                   <Link
//                     to="/dashboard"
//                     onClick={() => setProfileOpen(false)}
//                     className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition"
//                   >
//                     📊 Dashboard
//                   </Link>

//                   <Link
//                     to="/change-password"
//                     onClick={() => setProfileOpen(false)}
//                     className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition"
//                   >
//                     🔐 Change password
//                   </Link>

//                   {user?.role === "developer" && (
//                     <Link
//                       to="/submit"
//                       onClick={() => setProfileOpen(false)}
//                       className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition"
//                     >
//                       ➕ Submit component
//                     </Link>
//                   )}

//                   {user?.role === "admin" && (
//                     <Link
//                       to="/admin"
//                       onClick={() => setProfileOpen(false)}
//                       className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition"
//                     >
//                       🛠 Admin panel
//                     </Link>
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition"
//                     >
//                       🚪 Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMobileOpen((v) => !v)}
//             className="md:hidden text-white text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 px-6 pb-6 space-y-4 text-white">
//           <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
//           <Link to="/components" onClick={() => setMobileOpen(false)}>Components</Link>
//           <Link to="/#how-it-works" onClick={() => setMobileOpen(false)}>How it works</Link>
//           <Link to="/ai" onClick={() => setMobileOpen(false)}>AI Playground</Link>

//           {!isAuthenticated ? (
//             <>
//               <Link to="/login" onClick={() => setMobileOpen(false)}>Sign in</Link>
//               <Link to="/signup" onClick={() => setMobileOpen(false)}>Get started</Link>
//             </>
//           ) : (
//             <button onClick={handleLogout}>Logout</button>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }




// import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // 🔒 Ultra-safe initials
//   const getInitials = (name) => {
//     if (!name || typeof name !== "string") return "U";
//     const parts = name.trim().split(/\s+/);
//     return parts
//       .slice(0, 2)
//       .map((p) => p[0]?.toUpperCase())
//       .join("");
//   };

//   const initials = getInitials(user?.name);

//   /* ================= EFFECTS ================= */

//   // Close profile dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Smooth scroll for hash links
//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navLinkClass = ({ isActive }) =>
//     `relative font-medium transition
//      text-white/90 hover:text-white
//      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//      after:w-0 after:bg-white after:transition-all
//      hover:after:w-full
//      ${isActive ? "after:w-full" : ""}`;

//   const hashLinkClass =
//     `relative font-medium transition
//      text-white/90 hover:text-white
//      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//      after:w-0 after:bg-white after:transition-all
//      hover:after:w-full`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-md">
//       {/* Gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 shadow-[0_12px_40px_rgba(99,102,241,0.45)]" />
//       <div className="absolute inset-0 bg-white/10 pointer-events-none" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-tight hover:scale-[1.04] transition-transform"
//         >
//           <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent drop-shadow">
//             ReactForge
//           </span>
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>
//             Home
//           </NavLink>

//           <NavLink to="/components" className={navLinkClass}>
//             Components
//           </NavLink>

//           {/* ✅ FIXED: same hover/underline logic */}
//           <Link to="/#how-it-works" className={hashLinkClass}>
//             How it works
//           </Link>

//           <NavLink to="/ai" className={navLinkClass}>
//             AI Playground
//           </NavLink>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-white/90 hover:text-white transition"
//               >
//                 Sign in
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-6 py-2
//                            text-sm font-semibold
//                            hover:bg-indigo-50 hover:scale-[1.05]
//                            transition-all shadow-md"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             /* PROFILE */
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen((v) => !v)}
//                 className="flex items-center gap-3 bg-white/90 px-3 py-2 rounded-full
//                            hover:bg-white transition-all shadow-md
//                            hover:shadow-lg hover:-translate-y-[1px]"
//               >
//                 {/* Avatar */}
//                 <div
//                   className="w-10 h-10 rounded-full bg-gradient-to-br
//                              from-indigo-600 to-violet-600 text-white
//                              flex items-center justify-center font-bold text-sm
//                              ring-2 ring-white/40 shadow"
//                 >
//                   {initials}
//                 </div>

//                 <div className="hidden sm:block text-left">
//                   <p className="text-sm font-semibold text-slate-900">
//                     {user?.name}
//                   </p>
//                   <p className="text-xs text-slate-500 capitalize">
//                     {user?.role}
//                   </p>
//                 </div>
//               </button>

//               {/* DROPDOWN */}
//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-64 bg-white
//                                 rounded-2xl shadow-[0_25px_80px_rgba(99,102,241,0.35)]
//                                 border overflow-hidden">
//                   <ProfileItem to="/dashboard" label="Dashboard" icon="📊" />
//                   <ProfileItem to="/change-password" label="Change password" icon="🔐" />

//                   {user?.role === "developer" && (
//                     <ProfileItem to="/submit" label="Submit component" icon="➕" />
//                   )}

//                   {user?.role === "admin" && (
//                     <ProfileItem to="/admin" label="Admin panel" icon="🛠" />
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-3
//                                  text-red-600 font-medium
//                                  hover:bg-red-50 transition"
//                     >
//                       🚪 Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMobileOpen((v) => !v)}
//             className="md:hidden text-white text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 px-6 pb-6 space-y-4 text-white">
//           <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
//           <Link to="/components" onClick={() => setMobileOpen(false)}>Components</Link>
//           <Link to="/#how-it-works" onClick={() => setMobileOpen(false)}>How it works</Link>
//           <Link to="/ai" onClick={() => setMobileOpen(false)}>AI Playground</Link>

//           {!isAuthenticated ? (
//             <>
//               <Link to="/login" onClick={() => setMobileOpen(false)}>Sign in</Link>
//               <Link to="/signup" onClick={() => setMobileOpen(false)}>Get started</Link>
//             </>
//           ) : (
//             <button onClick={handleLogout}>Logout</button>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }

// /* ================= REUSABLE DROPDOWN ITEM ================= */

// function ProfileItem({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3
//                  text-slate-700 font-medium
//                  hover:bg-indigo-50 hover:text-indigo-600
//                  transition-all"
//     >
//       <span>{icon}</span>
//       {label}
//     </Link>
//   );
// }



// import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const getInitials = (name) => {
//     if (!name || typeof name !== "string") return "U";
//     return name
//       .trim()
//       .split(/\s+/)
//       .slice(0, 2)
//       .map((p) => p[0]?.toUpperCase())
//       .join("");
//   };

//   const initials = getInitials(user?.name);

//   /* ================= EFFECTS ================= */

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navLinkClass = ({ isActive }) =>
//     `relative font-medium transition
//      text-white/80 hover:text-white
//      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//      after:w-0 after:bg-white after:transition-all
//      hover:after:w-full
//      ${isActive ? "after:w-full text-white" : ""}`;

//   const hashLinkClass =
//     `relative font-medium transition
//      text-white/80 hover:text-white
//      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//      after:w-0 after:bg-white after:transition-all
//      hover:after:w-full`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl">
//       {/* Minimal professional gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-violet-600/90 to-cyan-600/90 shadow-[0_8px_30px_rgba(0,0,0,0.18)]" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-tight hover:scale-[1.03] transition-transform"
//         >
//           <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
//             ReactForge
//           </span>
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={hashLinkClass}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-white/80 hover:text-white transition"
//               >
//                 Sign in
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-6 py-2
//                            text-sm font-semibold
//                            hover:bg-indigo-50 hover:scale-[1.05]
//                            transition-all shadow-md"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             /* PROFILE */
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen((v) => !v)}
//                 className="group flex items-center gap-3 px-3 py-2 rounded-full
//                            bg-white/90 backdrop-blur
//                            transition-all duration-300
//                            hover:bg-white
//                            hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)]
//                            hover:-translate-y-[1px]
//                            active:scale-[0.97]"
//               >
//                 {/* Avatar */}
//                 <div
//                   className="relative w-10 h-10 rounded-full
//                              bg-gradient-to-br from-indigo-600 to-violet-600
//                              text-white flex items-center justify-center
//                              font-bold text-sm
//                              ring-2 ring-white/40
//                              transition-all duration-300
//                              group-hover:ring-indigo-300"
//                 >
//                   {initials}
//                 </div>

//                 <div className="hidden sm:block text-left">
//                   <p className="text-sm font-semibold text-slate-900 leading-tight">
//                     {user?.name}
//                   </p>
//                   <p className="text-xs text-slate-500 capitalize">
//                     {user?.role}
//                   </p>
//                 </div>
//               </button>

//               {/* DROPDOWN */}
//               {profileOpen && (
//                 <div
//                   className="absolute right-0 mt-3 w-64 bg-white rounded-2xl
//                              border shadow-[0_25px_80px_rgba(99,102,241,0.35)]
//                              overflow-hidden
//                              animate-[scaleIn_0.15s_ease-out]"
//                 >
//                   <ProfileItem to="/dashboard" label="Dashboard" icon="📊" />
//                   <ProfileItem to="/change-password" label="Change password" icon="🔐" />

//                   {user?.role === "developer" && (
//                     <ProfileItem to="/submit" label="Submit component" icon="➕" />
//                   )}

//                   {user?.role === "admin" && (
//                     <ProfileItem to="/admin" label="Admin panel" icon="🛠" />
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-3
//                                  text-red-600 font-medium
//                                  hover:bg-red-50 transition"
//                     >
//                       🚪 Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* MOBILE MENU */}
//           <button
//             onClick={() => setMobileOpen((v) => !v)}
//             className="md:hidden text-white text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 px-6 pb-6 space-y-4 text-white">
//           <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
//           <Link to="/components" onClick={() => setMobileOpen(false)}>Components</Link>
//           <Link to="/#how-it-works" onClick={() => setMobileOpen(false)}>How it works</Link>
//           <Link to="/ai" onClick={() => setMobileOpen(false)}>AI Playground</Link>

//           {!isAuthenticated ? (
//             <>
//               <Link to="/login" onClick={() => setMobileOpen(false)}>Sign in</Link>
//               <Link to="/signup" onClick={() => setMobileOpen(false)}>Get started</Link>
//             </>
//           ) : (
//             <button onClick={handleLogout}>Logout</button>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }

// /* ================= PROFILE ITEM ================= */

// function ProfileItem({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3
//                  text-slate-700 font-medium
//                  hover:bg-indigo-50 hover:text-indigo-600
//                  transition-all"
//     >
//       <span>{icon}</span>
//       {label}
//     </Link>
//   );
// }









// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const getInitials = (name) => {
//     if (!name || typeof name !== "string") return "U";
//     return name
//       .trim()
//       .split(/\s+/)
//       .slice(0, 2)
//       .map((p) => p[0]?.toUpperCase())
//       .join("");
//   };

//   const initials = getInitials(user?.name);

//   /* ================= EFFECTS ================= */

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Smooth scroll for hash links
//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navItem =
//     "relative font-medium transition text-white/85 hover:text-white " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:transition-all hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl">
//       {/* Minimal professional gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-[0_8px_28px_rgba(0,0,0,0.15)]" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="group flex items-center gap-2
//                      text-2xl font-bold tracking-tight
//                      transition-transform hover:scale-[1.05]"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700
//                           flex items-center justify-center font-extrabold
//                           shadow-sm group-hover:rotate-6 transition">
//             R
//           </div>
//           <span className="text-white">ReactForge</span>
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>
//             Home
//           </NavLink>

//           <NavLink to="/components" className={navLinkClass}>
//             Components
//           </NavLink>

//           {/* ✅ FIXED: same class + color + hover */}
//           <Link to="/#how-it-works" className={navItem}>
//             How it works
//           </Link>

//           <NavLink to="/ai" className={navLinkClass}>
//             AI Playground
//           </NavLink>

//         <button
//   onClick={() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     } else {
//       navigate("/submit");
//     }
//   }}
//   className="ml-4 px-5 py-2 rounded-full text-sm font-semibold
//              bg-white text-indigo-700
//              shadow-md hover:shadow-lg
//              hover:scale-105 transition duration-200"
// >
//   + Create Component
// </button>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link to="/login" className="text-sm text-white/85 hover:text-white">
//                 Sign in
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-6 py-2
//                            text-sm font-semibold hover:scale-[1.05]
//                            transition shadow-md"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             /* PROFILE */
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen((v) => !v)}
//                 className="flex items-center gap-3 px-3 py-2 rounded-full
//                            bg-white/90 hover:bg-white
//                            transition shadow-md hover:shadow-lg"
//               >
//                 <div className="w-10 h-10 rounded-full bg-indigo-600
//                                 text-white flex items-center justify-center
//                                 font-bold">
//                   {initials}
//                 </div>

//                 <div className="hidden sm:block text-left">
//                   <p className="text-sm font-semibold text-slate-900">
//                     {user?.name}
//                   </p>
//                   <p className="text-xs text-slate-500 capitalize">
//                     {user?.role}
//                   </p>
//                 </div>
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-64 bg-white
//                                 rounded-2xl border
//                                 shadow-[0_24px_80px_rgba(99,102,241,0.35)]
//                                 overflow-hidden">
//                   <ProfileItem to="/dashboard" label="Dashboard" icon={<LayoutDashboard size={18} />} />
//                   <ProfileItem to="/change-password" label="Change password" icon={<KeyRound size={18} />} />

//                   {user?.role === "admin" && (
//                     <ProfileItem to="/admin" label="Admin panel" icon={<Shield size={18} />} />
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center gap-3 px-4 py-3
//                                  text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={18} />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* MOBILE */}
//           <button
//             onClick={() => setMobileOpen((v) => !v)}
//             className="md:hidden text-white text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// /* ================= PROFILE ITEM ================= */

// function ProfileItem({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3
//                  text-slate-700 font-medium
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }





// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const getInitials = (email) => {
//     if (!email) return "U";
//     return email[0].toUpperCase();
//   };

//   const initials = getInitials(user?.email);

//   /* ================= EFFECTS ================= */

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navItem =
//     "relative font-medium transition text-white/85 hover:text-white " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:transition-all hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl">
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-[0_8px_28px_rgba(0,0,0,0.15)]" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="group flex items-center gap-2 text-2xl font-bold tracking-tight transition-transform hover:scale-[1.05]"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold shadow-sm group-hover:rotate-6 transition">
//             R
//           </div>
//           <span className="text-white">ReactForge</span>
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() => {
//               if (!isAuthenticated) navigate("/login");
//               else navigate("/submit");
//             }}
//             className="ml-4 px-5 py-2 rounded-full text-sm font-semibold
//                        bg-white text-indigo-700 shadow-md
//                        hover:shadow-lg hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link to="/login" className="text-sm text-white/85 hover:text-white">
//                 Sign in
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-6 py-2
//                            text-sm font-semibold hover:scale-[1.05]
//                            transition shadow-md"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen((v) => !v)}
//                 className="flex items-center gap-3 px-3 py-2 rounded-full
//                            bg-white/90 hover:bg-white transition shadow-md"
//               >
//                 <div className="w-10 h-10 rounded-full bg-indigo-600
//                                 text-white flex items-center justify-center font-bold">
//                   {initials}
//                 </div>

//                 <div className="hidden sm:block text-left">
//                   <p className="text-sm font-semibold text-slate-900">
//                     {user?.email}
//                   </p>
//                   <p className="text-xs text-slate-500 capitalize">
//                     {user?.role}
//                   </p>
//                 </div>
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-64 bg-white
//                                 rounded-2xl border shadow-[0_24px_80px_rgba(99,102,241,0.35)]
//                                 overflow-hidden">

//                   <ProfileItem
//                     to="/dashboard"
//                     label="Dashboard"
//                     icon={<LayoutDashboard size={18} />}
//                   />

//                   {/* ✅ ONLY local users can change password */}
//                   {user?.provider === "local" && (
//                     <ProfileItem
//                       to="/change-password"
//                       label="Change password"
//                       icon={<KeyRound size={18} />}
//                     />
//                   )}

//                   {user?.role === "admin" && (
//                     <ProfileItem
//                       to="/admin"
//                       label="Admin panel"
//                       icon={<Shield size={18} />}
//                     />
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center gap-3 px-4 py-3
//                                  text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={18} />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// /* ================= PROFILE ITEM ================= */

// function ProfileItem({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3
//                  text-slate-700 font-medium
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }


// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   User as UserIcon,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const getAvatarLetter = (email) => {
//     if (!email) return null;
//     return email[0].toUpperCase();
//   };

//   const providerLabel = {
//     local: "Local account",
//     google: "Google account",
//     github: "GitHub account",
//   };

//   /* ================= EFFECTS ================= */

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navItem =
//     "relative font-medium transition text-white/85 hover:text-white " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:transition-all hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl">
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-[0_8px_28px_rgba(0,0,0,0.15)]" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-2xl font-bold text-white"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold shadow-sm">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700 font-semibold shadow-md hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-4">
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link to="/login" className="text-white/85 hover:text-white">
//                 Sign in
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 rounded-full px-6 py-2 font-semibold shadow-md hover:scale-105 transition"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             <div className="relative" ref={profileRef}>
//               {/* PROFILE PILL */}
//               <button
//                 onClick={() => setProfileOpen((v) => !v)}
//                 className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition"
//               >
//                 {/* Avatar */}
//                 <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
//                   {getAvatarLetter(user?.email) || <UserIcon size={18} />}
//                 </div>

//                 {/* Text */}
//                 <div className="hidden sm:block text-left">
//                   <p className="text-sm font-semibold text-slate-900">
//                     {user?.email}
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     {user?.role} • {providerLabel[user?.provider]}
//                   </p>
//                 </div>
//               </button>

//               {/* DROPDOWN */}
//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl border shadow-[0_24px_80px_rgba(99,102,241,0.35)] overflow-hidden">
//                   <ProfileItem
//                     to="/dashboard"
//                     label="Dashboard"
//                     icon={<LayoutDashboard size={18} />}
//                   />

//                   {/* ONLY LOCAL USERS */}
//                   {user?.provider === "local" && (
//                     <ProfileItem
//                       to="/change-password"
//                       label="Change password"
//                       icon={<KeyRound size={18} />}
//                     />
//                   )}

//                   {user?.role === "admin" && (
//                     <ProfileItem
//                       to="/admin"
//                       label="Admin panel"
//                       icon={<Shield size={18} />}
//                     />
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={18} />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// /* ================= PROFILE ITEM ================= */

// function ProfileItem({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3 text-slate-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }






// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const getInitial = (email) =>
//     email ? email[0].toUpperCase() : "U";

//   /* ================= EFFECTS ================= */

//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:transition-all hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl">
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-lg" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-2xl font-bold text-white"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        text-sm font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-4">
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link to="/login" className="text-sm text-white/85">Sign in</Link>
//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 px-6 py-2 rounded-full
//                            text-sm font-semibold shadow hover:scale-105 transition"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             <div className="relative" ref={profileRef}>
//               {/* PROFILE CHIP */}
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-3 px-3 py-2 rounded-full
//                            bg-white/95 shadow hover:bg-white transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center text-sm font-bold">
//                   {getInitial(user?.email)}
//                 </div>

//                 <div className="hidden sm:flex flex-col leading-tight text-left">
//                   <span className="text-sm font-semibold text-slate-900">
//                     {user?.email}
//                   </span>
//                   <span className="text-[11px] text-slate-500">
//                     {user?.role} · {user?.provider} account
//                   </span>
//                 </div>
//               </button>

//               {/* DROPDOWN */}
//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl
//                                 shadow-[0_20px_60px_rgba(99,102,241,0.35)]
//                                 overflow-hidden">
//                   <ProfileItem to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />

//                   {user?.provider === "local" && (
//                     <ProfileItem
//                       to="/change-password"
//                       icon={<KeyRound size={18} />}
//                       label="Change password"
//                     />
//                   )}

//                   {user?.role === "admin" && (
//                     <ProfileItem
//                       to="/admin"
//                       icon={<Shield size={18} />}
//                       label="Admin panel"
//                     />
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center gap-3 px-4 py-3
//                                  text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={18} />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// /* ================= PROFILE ITEM ================= */

// function ProfileItem({ to, icon, label }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3 text-slate-700
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }




// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const getInitial = (email) =>
//     email ? email[0].toUpperCase() : "U";

//   /* ================= EFFECTS ================= */

//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:transition-all hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl">
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-lg" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-2xl font-bold text-white"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        text-sm font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-4">
//           {loading ? null : !isAuthenticated ? (
//             <>
//               <Link to="/login" className="text-sm text-white/85">
//                 Sign in
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-white text-slate-900 px-6 py-2 rounded-full
//                            text-sm font-semibold shadow hover:scale-105 transition"
//               >
//                 Get started
//               </Link>
//             </>
//           ) : (
//             <div className="relative" ref={profileRef}>
//               {/* 🔥 PROFESSIONAL PROFILE TRIGGER */}
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-full
//                            bg-white/95 shadow-sm
//                            hover:shadow-md hover:bg-white
//                            transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center text-sm font-bold">
//                   {getInitial(user?.email)}
//                 </div>
//                 <ChevronDown
//                   size={16}
//                   className={`text-slate-600 transition ${
//                     profileOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* 🔥 DROPDOWN */}
//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl
//                                 shadow-[0_24px_80px_rgba(99,102,241,0.35)]
//                                 overflow-hidden">

//                   {/* HEADER */}
//                   <div className="px-4 py-4 border-b flex items-center gap-3">
//                     <div className="w-11 h-11 rounded-full bg-indigo-600 text-white
//                                     flex items-center justify-center text-lg font-bold">
//                       {getInitial(user?.email)}
//                     </div>
//                     <div className="leading-tight">
//                       <p className="text-sm font-semibold text-slate-900 truncate">
//                         {user?.email}
//                       </p>
//                       <p className="text-xs text-slate-500 capitalize">
//                         {user?.role} · {user?.provider} account
//                       </p>
//                     </div>
//                   </div>

//                   {/* MENU */}
//                   <ProfileItem to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />

//                   {user?.provider === "local" && (
//                     <ProfileItem
//                       to="/change-password"
//                       icon={<KeyRound size={18} />}
//                       label="Change password"
//                     />
//                   )}

//                   {user?.role === "admin" && (
//                     <ProfileItem
//                       to="/admin"
//                       icon={<Shield size={18} />}
//                       label="Admin panel"
//                     />
//                   )}

//                   <div className="border-t">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center gap-3 px-4 py-3
//                                  text-red-600 hover:bg-red-50 transition"
//                     >
//                       <LogOut size={18} />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// /* ================= PROFILE ITEM ================= */

// function ProfileItem({ to, icon, label }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3 text-slate-700
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }


// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const profileRef = useRef(null);

//   /* ================= HELPERS ================= */

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setMobileOpen(false);
//   };

//   const getInitial = (email) =>
//     email ? email[0].toUpperCase() : "U";

//   /* ================= EFFECTS ================= */

//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   /* ================= STYLES ================= */

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:transition-all hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   /* ================= JSX ================= */

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl">
//       {/* NAV BAR */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-lg" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        text-sm font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMobileOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={26} />
//           </button>

//           {/* PROFILE (DESKTOP ONLY) */}
//           {!loading && isAuthenticated && (
//             <div className="relative hidden md:block" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-full
//                            bg-white/95 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center text-sm font-bold">
//                   {getInitial(user?.email)}
//                 </div>
//                 <ChevronDown
//                   size={16}
//                   className={`text-slate-600 transition ${profileOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl
//                                 shadow-[0_24px_80px_rgba(99,102,241,0.35)]
//                                 overflow-hidden">
//                   <ProfileMenu user={user} onLogout={handleLogout} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ================= MOBILE FULLSCREEN MENU ================= */}
//       {mobileOpen && (
//         <div className="fixed inset-0 z-[999] bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-600 text-white">
//           <div className="flex items-center justify-between px-6 py-4">
//             <span className="text-xl font-bold">ReactForge</span>
//             <button onClick={() => setMobileOpen(false)}>
//               <X size={28} />
//             </button>
//           </div>

//           <div className="px-6 pt-10 space-y-6 text-lg font-medium">
//             <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
//             <Link to="/components" onClick={() => setMobileOpen(false)}>Components</Link>
//             <Link to="/#how-it-works" onClick={() => setMobileOpen(false)}>How it works</Link>
//             <Link to="/ai" onClick={() => setMobileOpen(false)}>AI Playground</Link>

//             <button
//               onClick={() => navigate("/submit")}
//               className="mt-6 w-full bg-white text-indigo-700 py-3 rounded-full font-semibold"
//             >
//               + Create Component
//             </button>

//             {isAuthenticated && (
//               <div className="pt-6 border-t border-white/30 space-y-3">
//                 <Link to="/dashboard">Dashboard</Link>
//                 {user?.provider === "local" && (
//                   <Link to="/change-password">Change password</Link>
//                 )}
//                 {user?.role === "admin" && (
//                   <Link to="/admin">Admin panel</Link>
//                 )}
//                 <button onClick={handleLogout} className="text-red-200">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// /* ================= PROFILE MENU ================= */

// function ProfileMenu({ user, onLogout }) {
//   const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

//   return (
//     <>
//       <div className="px-4 py-4 border-b flex items-center gap-3">
//         <div className="w-11 h-11 rounded-full bg-indigo-600 text-white
//                         flex items-center justify-center text-lg font-bold">
//           {getInitial(user?.email)}
//         </div>
//         <div>
//           <p className="text-sm font-semibold text-slate-900 truncate">
//             {user?.email}
//           </p>
//           <p className="text-xs text-slate-500 capitalize">
//             {user?.role} · {user?.provider}
//           </p>
//         </div>
//       </div>

//       <ProfileItem to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
//       {user?.provider === "local" && (
//         <ProfileItem to="/change-password" icon={<KeyRound size={18} />} label="Change password" />
//       )}
//       {user?.role === "admin" && (
//         <ProfileItem to="/admin" icon={<Shield size={18} />} label="Admin panel" />
//       )}

//       <div className="border-t">
//         <button
//           onClick={onLogout}
//           className="w-full flex items-center gap-3 px-4 py-3 text-red-600"
//         >
//           <LogOut size={18} />
//           Logout
//         </button>
//       </div>
//     </>
//   );
// }

// /* ================= PROFILE ITEM ================= */

// function ProfileItem({ to, icon, label }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-4 py-3 text-slate-700
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const profileRef = useRef(null);

//   const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location]);

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "text-white" : ""}`;

//   return (
//     <header className="sticky top-0 z-50">
//       {/* TOP BAR */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-md" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={26} />
//           </button>

//           {/* PROFILE (DESKTOP) */}
//           {!loading && isAuthenticated && (
//             <div className="relative hidden md:block" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-full
//                            bg-white/95 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center font-bold">
//                   {getInitial(user?.email)}
//                 </div>
//                 <ChevronDown size={16} />
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
//                   <ProfileMenu user={user} onLogout={handleLogout} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ================= MOBILE SIDEBAR ================= */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 z-[999] flex">
//           {/* BACKDROP */}
//           <div
//             className="flex-1 bg-black/30"
//             onClick={() => setSidebarOpen(false)}
//           />

//           {/* SIDEBAR */}
//           <aside className="w-[80%] max-w-[320px] bg-white h-full shadow-xl
//                             flex flex-col animate-slideIn">
//             {/* HEADER */}
//             <div className="px-6 py-4 border-b flex items-center justify-between">
//               <div className="flex items-center gap-2 font-bold text-lg">
//                 <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
//                   R
//                 </div>
//                 ReactForge
//               </div>
//               <button onClick={() => setSidebarOpen(false)}>
//                 <X size={22} />
//               </button>
//             </div>

//             {/* NAV */}
//             <nav className="px-4 py-6 space-y-1 text-sm">
//               <SidebarLink label="Home" to="/" />
//               <SidebarLink label="Components" to="/components" />
//               <SidebarLink label="How it works" to="/#how-it-works" />
//               <SidebarLink label="AI Playground" to="/ai" />
//             </nav>

//             {/* CTA */}
//             <div className="px-4">
//               <button
//                 onClick={() => {
//                   setSidebarOpen(false);
//                   navigate("/submit");
//                 }}
//                 className="w-full py-3 rounded-full bg-indigo-600 text-white
//                            font-semibold hover:bg-indigo-700 transition"
//               >
//                 + Create Component
//               </button>
//             </div>

//             {/* ACCOUNT */}
//             {isAuthenticated && (
//               <div className="mt-auto px-4 py-6 border-t space-y-1 text-sm">
//                 <SidebarLink label="Dashboard" to="/dashboard" />
//                 {user?.provider === "local" && (
//                   <SidebarLink label="Change password" to="/change-password" />
//                 )}
//                 {user?.role === "admin" && (
//                   <SidebarLink label="Admin panel" to="/admin" />
//                 )}
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-3 py-2 rounded-lg
//                              text-red-600 hover:bg-red-50 transition"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </aside>
//         </div>
//       )}
//     </header>
//   );
// }

// /* ================= HELPERS ================= */

// function SidebarLink({ to, label }) {
//   return (
//     <Link
//       to={to}
//       className="block px-3 py-2 rounded-lg
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {label}
//     </Link>
//   );
// }

// function ProfileMenu({ user, onLogout }) {
//   return (
//     <>
//       <div className="px-4 py-4 border-b">
//         <p className="font-semibold truncate">{user?.email}</p>
//         <p className="text-xs text-slate-500">{user?.role}</p>
//       </div>
//       <SidebarLink to="/dashboard" label="Dashboard" />
//       {user?.provider === "local" && (
//         <SidebarLink to="/change-password" label="Change password" />
//       )}
//       {user?.role === "admin" && (
//         <SidebarLink to="/admin" label="Admin panel" />
//       )}
//       <button
//         onClick={onLogout}
//         className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
//       >
//         Logout
//       </button>
//     </>
//   );
// }



// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
//   Menu,
//   X,
//   Cpu,
//   Info,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const profileRef = useRef(null);

//   const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location]);

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "text-white" : ""}`;

//   return (
//     <header className="sticky top-0 z-50">
//       {/* TOP BAR */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-md" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-2xl font-bold text-white"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={26} />
//           </button>

//           {/* PROFILE (DESKTOP) */}
//           {!loading && isAuthenticated && (
//             <div className="relative hidden md:block" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-full
//                            bg-white/95 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center font-bold">
//                   {getInitial(user?.email)}
//                 </div>
//                 <ChevronDown size={16} />
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
//                   <ProfileMenu user={user} onLogout={handleLogout} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ================= MOBILE RIGHT SIDEBAR ================= */}
//       <div
//         className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
//           sidebarOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         {/* BACKDROP */}
//         <div
//           className="absolute inset-0 bg-black/30"
//           onClick={() => setSidebarOpen(false)}
//         />

//         {/* SIDEBAR (RIGHT) */}
//         <aside
//           className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px]
//                       bg-white shadow-xl flex flex-col
//                       transform transition-transform duration-300 ease-out
//                       ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
//         >
//           {/* HEADER */}
//           <div className="px-6 py-4 border-b flex items-center justify-between">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
//                 R
//               </div>
//               ReactForge
//             </div>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>

//           {/* NAV */}
//           <nav className="px-4 py-6 space-y-1 text-sm">
//             <SidebarLink icon={<LayoutDashboard size={18} />} label="Home" to="/" />
//             <SidebarLink icon={<Cpu size={18} />} label="Components" to="/components" />
//             <SidebarLink icon={<Info size={18} />} label="How it works" to="/#how-it-works" />
//             <SidebarLink icon={<Shield size={18} />} label="AI Playground" to="/ai" />
//           </nav>

//           {/* CTA */}
//           <div className="px-4">
//             <button
//               onClick={() => {
//                 setSidebarOpen(false);
//                 navigate("/submit");
//               }}
//               className="w-full py-3 rounded-full bg-indigo-600 text-white
//                          font-semibold hover:bg-indigo-700 transition"
//             >
//               + Create Component
//             </button>
//           </div>

//           {/* ACCOUNT */}
//           {isAuthenticated && (
//             <div className="mt-auto px-4 py-6 border-t space-y-1 text-sm">
//               <SidebarLink icon={<LayoutDashboard size={18} />} label="Dashboard" to="/dashboard" />
//               {user?.provider === "local" && (
//                 <SidebarLink icon={<KeyRound size={18} />} label="Change password" to="/change-password" />
//               )}
//               {user?.role === "admin" && (
//                 <SidebarLink icon={<Shield size={18} />} label="Admin panel" to="/admin" />
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-3 px-3 py-2 rounded-lg
//                            text-red-600 hover:bg-red-50 transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           )}
//         </aside>
//       </div>
//     </header>
//   );
// }

// /* ================= HELPERS ================= */

// function SidebarLink({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-3 py-2 rounded-lg
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

// function ProfileMenu({ user, onLogout }) {
//   return (
//     <>
//       <div className="px-4 py-4 border-b">
//         <p className="font-semibold truncate">{user?.email}</p>
//         <p className="text-xs text-slate-500">{user?.role}</p>
//       </div>
//       <SidebarLink icon={<LayoutDashboard size={18} />} to="/dashboard" label="Dashboard" />
//       {user?.provider === "local" && (
//         <SidebarLink icon={<KeyRound size={18} />} to="/change-password" label="Change password" />
//       )}
//       {user?.role === "admin" && (
//         <SidebarLink icon={<Shield size={18} />} to="/admin" label="Admin panel" />
//       )}
//       <button
//         onClick={onLogout}
//         className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
//       >
//         <LogOut size={18} />
//         Logout
//       </button>
//     </>
//   );
// }


// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
//   Menu,
//   X,
//   Cpu,
//   Info,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const profileRef = useRef(null);

//   const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location]);

//   /* ================= SLIDING UNDERLINE STYLE ================= */

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:rounded-full " +
//     "after:transition-all after:duration-300 " +
//     "hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   return (
//     <header className="sticky top-0 z-50">
//       {/* TOP BAR */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-md" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-2xl font-bold text-white"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={26} />
//           </button>

//           {/* PROFILE (DESKTOP) */}
//           {!loading && isAuthenticated && (
//             <div className="relative hidden md:block" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-full
//                            bg-white/95 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center font-bold">
//                   {getInitial(user?.email)}
//                 </div>
//                 <ChevronDown size={16} />
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
//                   <ProfileMenu user={user} onLogout={handleLogout} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ================= MOBILE RIGHT SIDEBAR ================= */}
//       <div
//         className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
//           sidebarOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div
//           className="absolute inset-0 bg-black/30"
//           onClick={() => setSidebarOpen(false)}
//         />

//         <aside
//           className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px]
//                       bg-white shadow-xl flex flex-col
//                       transform transition-transform duration-300 ease-out
//                       ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <div className="px-6 py-4 border-b flex items-center justify-between">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
//                 R
//               </div>
//               ReactForge
//             </div>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>

//           <nav className="px-4 py-6 space-y-1 text-sm">
//             <SidebarLink icon={<LayoutDashboard size={18} />} label="Home" to="/" />
//             <SidebarLink icon={<Cpu size={18} />} label="Components" to="/components" />
//             <SidebarLink icon={<Info size={18} />} label="How it works" to="/#how-it-works" />
//             <SidebarLink icon={<Shield size={18} />} label="AI Playground" to="/ai" />
//           </nav>

//           <div className="px-4">
//             <button
//               onClick={() => {
//                 setSidebarOpen(false);
//                 navigate("/submit");
//               }}
//               className="w-full py-3 rounded-full bg-indigo-600 text-white
//                          font-semibold hover:bg-indigo-700 transition"
//             >
//               + Create Component
//             </button>
//           </div>

//           {isAuthenticated && (
//             <div className="mt-auto px-4 py-6 border-t space-y-1 text-sm">
//               <SidebarLink icon={<LayoutDashboard size={18} />} label="Dashboard" to="/dashboard" />
//               {user?.provider === "local" && (
//                 <SidebarLink icon={<KeyRound size={18} />} label="Change password" to="/change-password" />
//               )}
//               {user?.role === "admin" && (
//                 <SidebarLink icon={<Shield size={18} />} label="Admin panel" to="/admin" />
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-3 px-3 py-2 rounded-lg
//                            text-red-600 hover:bg-red-50 transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           )}
//         </aside>
//       </div>
//     </header>
//   );
// }

// /* ================= HELPERS ================= */

// function SidebarLink({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-3 py-2 rounded-lg
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

// function ProfileMenu({ user, onLogout }) {
//   return (
//     <>
//       <div className="px-4 py-4 border-b">
//         <p className="font-semibold truncate">{user?.email}</p>
//         <p className="text-xs text-slate-500">{user?.role}</p>
//       </div>
//       <SidebarLink icon={<LayoutDashboard size={18} />} to="/dashboard" label="Dashboard" />
//       {user?.provider === "local" && (
//         <SidebarLink icon={<KeyRound size={18} />} to="/change-password" label="Change password" />
//       )}
//       {user?.role === "admin" && (
//         <SidebarLink icon={<Shield size={18} />} to="/admin" label="Admin panel" />
//       )}
//       <button
//         onClick={onLogout}
//         className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
//       >
//         <LogOut size={18} />
//         Logout
//       </button>
//     </>
//   );
// }


// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
//   Menu,
//   X,
//   Cpu,
//   Info,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const profileRef = useRef(null);

//   const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   /* ================= CLOSE PROFILE ON OUTSIDE CLICK ================= */
//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   /* ================= CLOSE SIDEBAR ON ROUTE CHANGE ================= */
//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location.pathname]);

//   /* ================= 🔥 HASH SCROLL FIX (THIS WAS MISSING) ================= */
//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) {
//         el.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }
//   }, [location]);

//   /* ================= SLIDING UNDERLINE STYLE ================= */

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:rounded-full " +
//     "after:transition-all after:duration-300 " +
//     "hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   return (
//     <header className="sticky top-0 z-50">
//       {/* TOP BAR */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-md" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-2xl font-bold text-white"
//         >
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={26} />
//           </button>

//           {/* PROFILE (DESKTOP) */}
//           {!loading && isAuthenticated && (
//             <div className="relative hidden md:block" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-full
//                            bg-white/95 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center font-bold">
//                   {getInitial(user?.email)}
//                 </div>
//                 <ChevronDown size={16} />
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
//                   <ProfileMenu user={user} onLogout={handleLogout} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ================= MOBILE RIGHT SIDEBAR ================= */}
//       <div
//         className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
//           sidebarOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div
//           className="absolute inset-0 bg-black/30"
//           onClick={() => setSidebarOpen(false)}
//         />

//         <aside
//           className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px]
//                       bg-white shadow-xl flex flex-col
//                       transform transition-transform duration-300 ease-out
//                       ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <div className="px-6 py-4 border-b flex items-center justify-between">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
//                 R
//               </div>
//               ReactForge
//             </div>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>

//           <nav className="px-4 py-6 space-y-1 text-sm">
//             <SidebarLink icon={<LayoutDashboard size={18} />} label="Home" to="/" />
//             <SidebarLink icon={<Cpu size={18} />} label="Components" to="/components" />
//             <SidebarLink icon={<Info size={18} />} label="How it works" to="/#how-it-works" />
//             <SidebarLink icon={<Shield size={18} />} label="AI Playground" to="/ai" />
//           </nav>

//           <div className="px-4">
//             <button
//               onClick={() => {
//                 setSidebarOpen(false);
//                 navigate("/submit");
//               }}
//               className="w-full py-3 rounded-full bg-indigo-600 text-white
//                          font-semibold hover:bg-indigo-700 transition"
//             >
//               + Create Component
//             </button>
//           </div>

//           {isAuthenticated && (
//             <div className="mt-auto px-4 py-6 border-t space-y-1 text-sm">
//               <SidebarLink icon={<LayoutDashboard size={18} />} label="Dashboard" to="/dashboard" />
//               {user?.provider === "local" && (
//                 <SidebarLink icon={<KeyRound size={18} />} label="Change password" to="/change-password" />
//               )}
//               {user?.role === "admin" && (
//                 <SidebarLink icon={<Shield size={18} />} label="Admin panel" to="/admin" />
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-3 px-3 py-2 rounded-lg
//                            text-red-600 hover:bg-red-50 transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           )}
//         </aside>
//       </div>
//     </header>
//   );
// }

// /* ================= HELPERS ================= */

// function SidebarLink({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-3 py-2 rounded-lg
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

// function ProfileMenu({ user, onLogout }) {
//   return (
//     <>
//       <div className="px-4 py-4 border-b">
//         <p className="font-semibold truncate">{user?.email}</p>
//         <p className="text-xs text-slate-500">{user?.role}</p>
//       </div>
//       <SidebarLink icon={<LayoutDashboard size={18} />} to="/dashboard" label="Dashboard" />
//       {user?.provider === "local" && (
//         <SidebarLink icon={<KeyRound size={18} />} to="/change-password" label="Change password" />
//       )}
//       {user?.role === "admin" && (
//         <SidebarLink icon={<Shield size={18} />} to="/admin" label="Admin panel" />
//       )}
//       <button
//         onClick={onLogout}
//         className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
//       >
//         <LogOut size={18} />
//         Logout
//       </button>
//     </>
//   );
// }




// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
//   Menu,
//   X,
//   Cpu,
//   Info,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const profileRef = useRef(null);

//   const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   /* ================= CLOSE PROFILE ON OUTSIDE CLICK ================= */
//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   /* ================= CLOSE SIDEBAR ON ROUTE CHANGE ================= */
//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location.pathname]);

//   /* ================= HASH SCROLL FIX ================= */
//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   }, [location]);

//   /* ================= SLIDING UNDERLINE ================= */

//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:rounded-full " +
//     "after:transition-all after:duration-300 " +
//     "hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   return (
//     <header className="sticky top-0 z-50">
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-md" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={26} />
//           </button>

//           {!loading && isAuthenticated && (
//             <div className="relative hidden md:block" ref={profileRef}>
//               <button
//                 onClick={() => setProfileOpen(v => !v)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-full
//                            bg-white/95 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                                 flex items-center justify-center font-bold">
//                   {getInitial(user?.email)}
//                 </div>
//                 <ChevronDown size={16} />
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
//                   <ProfileMenu user={user} onLogout={handleLogout} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ================= MOBILE RIGHT SIDEBAR ================= */}
//       <div
//         className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
//           sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="absolute inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} />

//         <aside
//           className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px]
//                       bg-white shadow-xl flex flex-col
//                       transform transition-transform duration-300 ease-out
//                       ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
//         >
//           {/* HEADER */}
//           <div className="px-6 py-4 border-b flex items-center justify-between">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
//                 R
//               </div>
//               ReactForge
//             </div>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>

//           {/* ✅ USER INFO (MOBILE) */}
//           {isAuthenticated && (
//             <div className="px-6 py-4 border-b flex items-center gap-3">
//               {/* <div className="w-11 h-11 rounded-full bg-indigo-600 text-white
//                               flex items-center justify-center font-bold text-lg">
//                 {getInitial(user?.email)}
//               </div> */}
//               <div
//   className="w-10 h-10 rounded-full bg-indigo-600 text-white
//              flex items-center justify-center
//              font-bold text-sm
//              shrink-0 aspect-square"
// >
//   {getInitial(user?.email)}
// </div>

//               <div className="leading-tight">
//                 <p className="text-sm font-semibold text-slate-900 truncate">
//                   {user?.email}
//                 </p>
//                 <p className="text-xs text-slate-500 capitalize">
//                   {user?.role}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* NAV */}
//           <nav className="px-4 py-6 space-y-1 text-sm">
//             <SidebarLink icon={<LayoutDashboard size={18} />} label="Home" to="/" />
//             <SidebarLink icon={<Cpu size={18} />} label="Components" to="/components" />
//             <SidebarLink icon={<Info size={18} />} label="How it works" to="/#how-it-works" />
//             <SidebarLink icon={<Shield size={18} />} label="AI Playground" to="/ai" />
//           </nav>

//           <div className="px-4">
//             <button
//               onClick={() => {
//                 setSidebarOpen(false);
//                 navigate("/submit");
//               }}
//               className="w-full py-3 rounded-full bg-indigo-600 text-white
//                          font-semibold hover:bg-indigo-700 transition"
//             >
//               + Create Component
//             </button>
//           </div>

//           {isAuthenticated && (
//             <div className="mt-auto px-4 py-6 border-t space-y-1 text-sm">
//               <SidebarLink icon={<LayoutDashboard size={18} />} label="Dashboard" to="/dashboard" />
//               {user?.provider === "local" && (
//                 <SidebarLink icon={<KeyRound size={18} />} label="Change password" to="/change-password" />
//               )}
//               {user?.role === "admin" && (
//                 <SidebarLink icon={<Shield size={18} />} label="Admin panel" to="/admin" />
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-3 px-3 py-2 rounded-lg
//                            text-red-600 hover:bg-red-50 transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           )}
//         </aside>
//       </div>
//     </header>
//   );
// }

// /* ================= HELPERS ================= */

// function SidebarLink({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-3 py-2 rounded-lg
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

// function ProfileMenu({ user, onLogout }) {
//   return (
//     <>
//       <div className="px-4 py-4 border-b flex items-center gap-3">
//         <div className="w-10 h-10 rounded-full bg-indigo-600 text-white
//                         flex items-center justify-center font-bold">
//           {user?.email?.[0]?.toUpperCase()}
//         </div>
//         <div>
//           <p className="font-semibold truncate">{user?.email}</p>
//           <p className="text-xs text-slate-500">{user?.role}</p>
//         </div>
//       </div>

//       <SidebarLink icon={<LayoutDashboard size={18} />} to="/dashboard" label="Dashboard" />
//       {user?.provider === "local" && (
//         <SidebarLink icon={<KeyRound size={18} />} to="/change-password" label="Change password" />
//       )}
//       {user?.role === "admin" && (
//         <SidebarLink icon={<Shield size={18} />} to="/admin" label="Admin panel" />
//       )}
//       <button
//         onClick={onLogout}
//         className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
//       >
//         <LogOut size={18} />
//         Logout
//       </button>
//     </>
//   );
// }





// import {
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   KeyRound,
//   Shield,
//   LogOut,
//   ChevronDown,
//   Menu,
//   X,
//   Cpu,
//   Info,
// } from "lucide-react";

// export default function Navbar() {
//   const { isAuthenticated, user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const profileRef = useRef(null);

//   const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   /* ================= CLOSE PROFILE ON OUTSIDE CLICK ================= */
//   useEffect(() => {
//     const handler = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   /* ================= CLOSE SIDEBAR ON ROUTE CHANGE ================= */
//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location.pathname]);

//   /* ================= HASH SCROLL FIX ================= */
//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [location]);

//   /* ================= SLIDING UNDERLINE ================= */
//   const navItem =
//     "relative font-medium text-white/85 hover:text-white transition " +
//     "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
//     "after:w-0 after:bg-white after:rounded-full " +
//     "after:transition-all after:duration-300 " +
//     "hover:after:w-full";

//   const navLinkClass = ({ isActive }) =>
//     `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

//   return (
//     <header className="sticky top-0 z-50">
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-md" />

//       <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
//           <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
//             R
//           </div>
//           ReactForge
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <NavLink to="/" className={navLinkClass}>Home</NavLink>
//           <NavLink to="/components" className={navLinkClass}>Components</NavLink>
//           <Link to="/#how-it-works" className={navItem}>How it works</Link>
//           <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

//           <button
//             onClick={() =>
//               isAuthenticated ? navigate("/submit") : navigate("/login")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
//                        font-semibold shadow hover:scale-105 transition"
//           >
//             + Create Component
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white">
//             <Menu size={26} />
//           </button>

//           {!loading && isAuthenticated && (
//             <div className="relative hidden md:block" ref={profileRef}>
//               {/* ✅ EXACT LOOK LIKE YOUR SCREENSHOT */}
//              <button
//   onClick={() => setProfileOpen(v => !v)}
//   className="flex items-center gap-2
//              bg-white/95 px-3 py-1.5
//              rounded-full shadow-sm
//              hover:shadow-md transition"
// >
//   <div
//     className="w-11 h-11 aspect-square
//                rounded-full bg-indigo-600 text-white
//                flex items-center justify-center
//                font-bold text-sm leading-none"
//   >
//     {getInitial(user?.email)}
//   </div>

//   <ChevronDown size={18} className="text-slate-700" />
// </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
//                   <ProfileMenu user={user} onLogout={handleLogout} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ================= MOBILE RIGHT SIDEBAR ================= */}
//       <div
//         className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
//           sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="absolute inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} />

//         <aside
//           className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px]
//                       bg-white shadow-xl flex flex-col
//                       transform transition-transform duration-300 ease-out
//                       ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <div className="px-6 py-4 border-b flex items-center justify-between">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
//                 R
//               </div>
//               ReactForge
//             </div>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>

//           {isAuthenticated && (
//             <div className="px-6 py-4 border-b flex items-center gap-3">
//               <div
//                 className="w-10 h-10 aspect-square rounded-full
//                            bg-indigo-600 text-white
//                            flex items-center justify-center
//                            font-bold text-sm"
//               >
//                 {getInitial(user?.email)}
//               </div>
//               <div>
//                 <p className="text-sm font-semibold truncate">{user?.email}</p>
//                 <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
//               </div>
//             </div>
//           )}

//           <nav className="px-4 py-6 space-y-1 text-sm">
//             <SidebarLink icon={<LayoutDashboard size={18} />} label="Home" to="/" />
//             <SidebarLink icon={<Cpu size={18} />} label="Components" to="/components" />
//             <SidebarLink icon={<Info size={18} />} label="How it works" to="/#how-it-works" />
//             <SidebarLink icon={<Shield size={18} />} label="AI Playground" to="/ai" />
//           </nav>

//           <div className="px-4">
//             <button
//               onClick={() => {
//                 setSidebarOpen(false);
//                 navigate("/submit");
//               }}
//               className="w-full py-3 rounded-full bg-indigo-600 text-white
//                          font-semibold hover:bg-indigo-700 transition"
//             >
//               + Create Component
//             </button>
//           </div>

//           {isAuthenticated && (
//             <div className="mt-auto px-4 py-6 border-t space-y-1 text-sm">
//               <SidebarLink icon={<LayoutDashboard size={18} />} label="Dashboard" to="/dashboard" />
//               {user?.provider === "local" && (
//                 <SidebarLink icon={<KeyRound size={18} />} label="Change password" to="/change-password" />
//               )}
//               {user?.role === "admin" && (
//                 <SidebarLink icon={<Shield size={18} />} label="Admin panel" to="/admin" />
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-3 px-3 py-2 rounded-lg
//                            text-red-600 hover:bg-red-50 transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           )}
//         </aside>
//       </div>
//     </header>
//   );
// }

// /* ================= HELPERS ================= */

// function SidebarLink({ to, label, icon }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center gap-3 px-3 py-2 rounded-lg
//                  hover:bg-indigo-50 hover:text-indigo-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

// function ProfileMenu({ user, onLogout }) {
//   return (
//     <>
//       <div className="px-4 py-4 border-b flex items-center gap-3">
//         <div
//           className="w-10 h-10 aspect-square rounded-full
//                      bg-indigo-600 text-white
//                      flex items-center justify-center
//                      font-bold text-sm"
//         >
//           {user?.email?.[0]?.toUpperCase()}
//         </div>
//         <div>
//           <p className="font-semibold truncate">{user?.email}</p>
//           <p className="text-xs text-slate-500">{user?.role}</p>
//         </div>
//       </div>

//       <SidebarLink icon={<LayoutDashboard size={18} />} to="/dashboard" label="Dashboard" />
//       {user?.provider === "local" && (
//         <SidebarLink icon={<KeyRound size={18} />} to="/change-password" label="Change password" />
//       )}
//       {user?.role === "admin" && (
//         <SidebarLink icon={<Shield size={18} />} to="/admin" label="Admin panel" />
//       )}
//       <button
//         onClick={onLogout}
//         className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
//       >
//         <LogOut size={18} />
//         Logout
//       </button>
//     </>
//   );
// }


import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  KeyRound,
  Shield,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Cpu,
  Info,
} from "lucide-react";

export default function Navbar() {
  const { isAuthenticated, user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const profileRef = useRef(null);

  const getInitial = (email) => email?.[0]?.toUpperCase() || "U";

  const handleLogout = () => {
    logout();
    navigate("/login");
    setSidebarOpen(false);
  };

  /* ================= CLOSE PROFILE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ================= CLOSE SIDEBAR ON ROUTE CHANGE ================= */
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  /* ================= HASH SCROLL FIX ================= */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  /* ================= SLIDING UNDERLINE ================= */
  const navItem =
    "relative font-medium text-white/85 hover:text-white transition " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
    "after:w-0 after:bg-white after:rounded-full " +
    "after:transition-all after:duration-300 " +
    "hover:after:w-full";

  const navLinkClass = ({ isActive }) =>
    `${navItem} ${isActive ? "after:w-full text-white" : ""}`;

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 shadow-md" />

      <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-extrabold">
            R
          </div>
          ReactForge
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/components" className={navLinkClass}>Components</NavLink>
          <Link to="/#how-it-works" className={navItem}>How it works</Link>
          <NavLink to="/ai" className={navLinkClass}>AI Playground</NavLink>

          <button
            onClick={() =>
              isAuthenticated ? navigate("/submit") : navigate("/login")
            }
            className="ml-4 px-5 py-2 rounded-full bg-white text-indigo-700
                       font-semibold shadow hover:scale-105 transition"
          >
            + Create Component
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white">
            <Menu size={26} />
          </button>

          {/* ================= NOT LOGGED IN (NEW) ================= */}
          {!loading && !isAuthenticated && (
            <div className="hidden md:flex items-center gap-4">
              {/* Sign in */}
              <button
                onClick={() => navigate("/login")}
                className="text-white/90 font-medium
                           hover:text-white
                           transition
                           relative after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-white
                           after:transition-all hover:after:w-full"
              >
                Sign in
              </button>

              {/* Get started */}
              <button
                onClick={() => navigate("/signup")}
                className="px-6 py-2 rounded-full bg-white text-indigo-700
                           font-semibold shadow
                           hover:shadow-md hover:scale-105
                           transition"
              >
                Get started
              </button>
            </div>
          )}

          {/* ================= LOGGED IN PROFILE ================= */}
          {!loading && isAuthenticated && (
            <div className="relative hidden md:block" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(v => !v)}
                className="flex items-center gap-2
                           bg-white/95 px-3 py-1.5
                           rounded-full shadow-sm
                           hover:shadow-md transition"
              >
                <div
                  className="w-11 h-11 aspect-square
                             rounded-full bg-indigo-600 text-white
                             flex items-center justify-center
                             font-bold text-sm leading-none"
                >
                  {getInitial(user?.email)}
                </div>
                <ChevronDown size={18} className="text-slate-700" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <ProfileMenu user={user} onLogout={handleLogout} />
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* ================= MOBILE SIDEBAR (UNCHANGED) ================= */}
      {/* … your mobile sidebar code remains exactly the same … */}
    </header>
  );
}

/* ================= HELPERS ================= */

function SidebarLink({ to, label, icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-3 py-2 rounded-lg
                 hover:bg-indigo-50 hover:text-indigo-600 transition"
    >
      {icon}
      {label}
    </Link>
  );
}

function ProfileMenu({ user, onLogout }) {
  return (
    <>
      <div className="px-4 py-4 border-b flex items-center gap-3">
        <div
          className="w-10 h-10 aspect-square rounded-full
                     bg-indigo-600 text-white
                     flex items-center justify-center
                     font-bold text-sm"
        >
          {user?.email?.[0]?.toUpperCase()}
        </div>
        <div>
          <p className="font-semibold truncate">{user?.email}</p>
          <p className="text-xs text-slate-500">{user?.role}</p>
        </div>
      </div>

      <SidebarLink icon={<LayoutDashboard size={18} />} to="/dashboard" label="Dashboard" />
      {user?.provider === "local" && (
        <SidebarLink icon={<KeyRound size={18} />} to="/change-password" label="Change password" />
      )}
      {user?.role === "admin" && (
        <SidebarLink icon={<Shield size={18} />} to="/admin" label="Admin panel" />
      )}
      <button
        onClick={onLogout}
        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
      >
        <LogOut size={18} />
        Logout
      </button>
    </>
  );
}
