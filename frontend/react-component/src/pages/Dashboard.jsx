// import ComponentCard from "../components/ComponentCard";

// export default function Dashboard() {
//   const myComponents = [
//     {
//       _id: "1",
//       name: "Primary Button",
//       description: "Reusable button",
//       avgRating: 4.5,
//       totalRatings: 120,
//       likes: 340,
//       status: "approved",
//     },
//     {
//       _id: "2",
//       name: "Modal",
//       description: "Accessible modal component",
//       avgRating: 0,
//       totalRatings: 0,
//       likes: 0,
//       status: "pending",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-semibold text-slate-900">
//           Developer Dashboard
//         </h1>

//         <p className="mt-2 text-slate-600">
//           Manage your submitted components
//         </p>

//         <div className="mt-10 grid md:grid-cols-3 gap-8">
//           {myComponents.map((component) => (
//             <div key={component._id}>
//               <ComponentCard
//                 component={component}
//                 isLoggedIn={true}
//               />

//               <p className="mt-2 text-sm text-slate-500">
//                 Status:{" "}
//                 <span
//                   className={`font-medium ${
//                     component.status === "approved"
//                       ? "text-green-600"
//                       : "text-orange-500"
//                   }`}
//                 >
//                   {component.status}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchMyComponents = async () => {
//     try {
//       const data = await apiRequest("/components/my");
//       setComponents(data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load your components");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyComponents();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-12">
//           <div>
//             <h1 className="text-3xl font-semibold text-slate-900">
//               Developer Dashboard
//             </h1>
//             <p className="mt-2 text-slate-600">
//               Manage your submitted React components
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/submit")}
//             className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
//           >
//             + Submit Component
//           </button>
//         </div>

//         {/* CONTENT */}
//         {loading ? (
//           <div className="text-slate-600">Loading your components...</div>
//         ) : components.length === 0 ? (
//           <div className="bg-white/70 backdrop-blur rounded-2xl p-12 text-center shadow">
//             <h3 className="text-lg font-medium text-slate-900">
//               No components yet
//             </h3>
//             <p className="mt-2 text-slate-600">
//               Submit your first component to get started.
//             </p>
//             <button
//               onClick={() => navigate("/submit")}
//               className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full"
//             >
//               Submit Component
//             </button>
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {components.map((component) => (
//               <div
//                 key={component._id}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-xl transition"
//               >
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {component.title}
//                 </h3>

//                 <p className="mt-1 text-sm text-slate-600">
//                   {component.category}
//                 </p>

//                 {/* STATUS */}
//                 <div className="mt-4">
//                   <span
//                     className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
//                       component.status === "approved"
//                         ? "bg-green-100 text-green-700"
//                         : component.status === "pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {component.status.toUpperCase()}
//                   </span>
//                 </div>

//                 {/* STATS */}
//                 <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
//                   <span>❤️ {component.likesCount || 0}</span>
//                   <span>⭐ {component.avgRating || "0.0"}</span>
//                 </div>

//                 {/* ACTION */}
//                 <button
//                   onClick={() =>
//                     navigate(`/components/${component._id}`)
//                   }
//                   className="mt-5 text-indigo-600 font-medium hover:underline"
//                 >
//                   View details →
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(atob(token.split(".")[1]));
//   const role = user.role;

//   const [myComponents, setMyComponents] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // fetch developer components only if role = developer
//   const fetchMyComponents = async () => {
//     if (role !== "developer") return;
//     setLoading(true);
//     try {
//       const data = await apiRequest("/components/my");
//       setMyComponents(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyComponents();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto">

//         <h1 className="text-3xl font-semibold text-slate-900">
//           Dashboard
//         </h1>

//         {/* USER */}
//         {role === "user" && (
//           <div className="mt-8 p-6 bg-white/80 backdrop-blur rounded-2xl shadow">
//             <h2 className="text-lg font-medium">
//               Become a Developer
//             </h2>
//             <p className="mt-2 text-slate-600">
//               Apply to publish and sell your React components.
//             </p>
//             <button
//               onClick={() => navigate("/apply-developer")}
//               className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-full"
//             >
//               Apply as Developer
//             </button>
//           </div>
//         )}

//         {/* PENDING */}
//         {role === "pendingDeveloper" && (
//           <div className="mt-8 p-6 bg-yellow-50 rounded-2xl">
//             ⏳ Your developer application is under review
//           </div>
//         )}

//         {/* DEVELOPER */}
//         {role === "developer" && (
//           <>
//             <div className="mt-8 flex justify-between items-center">
//               <h2 className="text-xl font-semibold">
//                 My Components
//               </h2>
//               <button
//                 onClick={() => navigate("/submit")}
//                 className="bg-indigo-600 text-white px-5 py-2 rounded-full"
//               >
//                 + Submit Component
//               </button>
//             </div>

//             {loading ? (
//               <p className="mt-6">Loading...</p>
//             ) : myComponents.length === 0 ? (
//               <p className="mt-6 text-slate-600">
//                 No components submitted yet.
//               </p>
//             ) : (
//               <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {myComponents.map((c) => (
//                   <div
//                     key={c._id}
//                     className="bg-white rounded-xl p-5 shadow"
//                   >
//                     <h3 className="font-semibold">{c.title}</h3>
//                     <p className="text-sm text-slate-500">
//                       {c.category}
//                     </p>
//                     <p className="mt-2 text-xs">
//                       Status:{" "}
//                       <span className="font-medium">
//                         {c.status}
//                       </span>
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </>
//         )}

//         {/* ADMIN */}
//         {role === "admin" && (
//           <div className="mt-8 p-6 bg-red-50 rounded-2xl">
//             <h2 className="font-semibold">
//               Admin Panel
//             </h2>
//             <button
//               onClick={() => navigate("/admin")}
//               className="mt-4 bg-red-600 text-white px-5 py-2 rounded-full"
//             >
//               Open Admin Dashboard
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const fetchMyComponents = async () => {
//     try {
//       const data = await apiRequest("/components/my");
//       setComponents(data);
//     } catch (err) {
//       console.error("Failed to load dashboard", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyComponents();
//   }, []);

//   if (loading) {
//     return <div className="p-20">Loading dashboard...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-20">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-3xl font-semibold">Dashboard</h1>
//             <p className="text-slate-600 mt-1">
//               Manage your submitted components
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/submit")}
//             className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
//           >
//             + Submit Component
//           </button>
//         </div>

//         {/* Empty State */}
//         {components.length === 0 && (
//           <div className="bg-white rounded-xl p-10 text-center shadow">
//             <p className="text-slate-600">
//               You haven’t submitted any components yet.
//             </p>
//           </div>
//         )}

//         {/* Component Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {components.map((component) => {
//             const rating = Math.round(component.avgRating || 0);

//             return (
//               <div
//                 key={component._id}
//                 className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
//               >
//                 <h3 className="text-lg font-semibold">
//                   {component.title}
//                 </h3>

//                 <div className="flex items-center gap-4 mt-3">
//                   <span>❤️ {component.likesCount || 0}</span>

//                   <div className="flex gap-1">
//                     {[1,2,3,4,5].map((star) => (
//                       <span
//                         key={star}
//                         className={
//                           star <= rating
//                             ? "text-yellow-400"
//                             : "text-slate-300"
//                         }
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>

//                   <span className="text-sm text-slate-500">
//                     {component.avgRating?.toFixed(1) || "0.0"}
//                   </span>
//                 </div>

//                 {/* Status */}
//                 <div className="mt-4">
//                   <span
//                     className={`text-sm font-medium ${
//                       component.status === "approved"
//                         ? "text-green-600"
//                         : "text-orange-500"
//                     }`}
//                   >
//                     Status: {component.status}
//                   </span>
//                 </div>

//                 {/* Actions */}
//                 <button
//                   onClick={() =>
//                     navigate(`/components/${component._id}`)
//                   }
//                   className="mt-4 text-indigo-600 font-medium"
//                 >
//                   View →
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch developer components
//   const fetchMyComponents = async () => {
//     try {
//       const data = await apiRequest("/components/my");
//       setComponents(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user?.role === "developer") {
//       fetchMyComponents();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   // Become developer
//   const becomeDeveloper = async () => {
//     try {
//       await apiRequest("/auth/become-developer", "POST");
//       alert("You are now a developer. Please login again.");
//       localStorage.removeItem("token");
//       navigate("/login");
//     } catch (err) {
//       alert("Failed to become developer");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto">

//         <h1 className="text-3xl font-semibold text-slate-900">
//           Dashboard
//         </h1>

//         {/* ================= USER VIEW ================= */}
//         {user?.role === "user" && (
//           <div className="mt-10 bg-white/80 backdrop-blur rounded-2xl p-8 shadow">
//             <h2 className="text-xl font-semibold">
//               Become a Developer
//             </h2>
//             <p className="mt-2 text-slate-600">
//               Publish and sell your React components.
//             </p>

//             <button
//               onClick={becomeDeveloper}
//               className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
//             >
//               Apply as Developer
//             </button>
//           </div>
//         )}

//         {/* ================= DEVELOPER VIEW ================= */}
//         {user?.role === "developer" && (
//           <>
//             <div className="mt-10 flex justify-between items-center">
//               <h2 className="text-2xl font-semibold">
//                 Developer Dashboard
//               </h2>

//               <button
//                 onClick={() => navigate("/submit")}
//                 className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
//               >
//                 + Submit Component
//               </button>
//             </div>

//             {loading ? (
//               <p className="mt-6">Loading...</p>
//             ) : (
//               <div className="mt-8 grid md:grid-cols-2 gap-6">
//                 {components.map((c) => (
//                   <div
//                     key={c._id}
//                     className="bg-white rounded-2xl p-6 shadow"
//                   >
//                     <h3 className="font-semibold text-lg">
//                       {c.title}
//                     </h3>

//                     <div className="mt-3 flex items-center gap-4">
//                       <span>❤️ {c.likesCount || 0}</span>
//                       <span>⭐ {c.avgRating?.toFixed(1) || "0.0"}</span>
//                     </div>

//                     <p className="mt-3 text-sm">
//                       Status:{" "}
//                       <span
//                         className={
//                           c.status === "approved"
//                             ? "text-green-600"
//                             : "text-orange-500"
//                         }
//                       >
//                         {c.status}
//                       </span>
//                     </p>

//                     <button
//                       onClick={() =>
//                         navigate(`/components/${c._id}`)
//                       }
//                       className="mt-4 text-indigo-600 font-medium"
//                     >
//                       View →
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }







// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // const fetchMyComponents = async () => {
//   //   try {
//   //     const data = await apiRequest("/components/my");
//   //     setComponents(data);
//   //   } catch (err) {
//   //     console.error("Failed to load dashboard", err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
// const fetchMyComponents = async () => {
//   try {
//     const data = await apiRequest("/components/my");
//     console.log("MY COMPONENTS:", data); // 👈 ADD THIS
//     setComponents(data);
//   } catch (err) {
//     console.error("Failed to load dashboard", err);
//   } finally {
//     setLoading(false);
//   }
// };

//   useEffect(() => {
//     fetchMyComponents();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-slate-600">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-3xl font-semibold text-slate-900">
//               Dashboard
//             </h1>
//             <p className="text-slate-600 mt-1">
//               Manage your submitted components
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/submit")}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             Submit Component
//           </button>
//         </div>

//         {/* Empty state */}
//         {components.length === 0 && (
//           <div className="bg-white/80 backdrop-blur rounded-2xl p-10 shadow text-center">
//             <p className="text-slate-600">
//               You haven’t submitted any components yet.
//             </p>
//           </div>
//         )}

//         {/* Component Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {components.map((component) => {
//             const rating = Math.round(component.avgRating || 0);

//             return (
//               <div
//                 key={component._id}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-xl transition"
//               >
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {component.title}
//                 </h3>

//                 <p className="text-sm text-slate-500 mt-1">
//                   {component.category}
//                 </p>

//                 {/* Likes & Rating */}
//                 <div className="flex items-center gap-4 mt-4">
//                   <span className="flex items-center gap-1 text-sm">
//                     ❤️ {component.likesCount || 0}
//                   </span>

//                   <div className="flex gap-1">
//                     {[1,2,3,4,5].map((star) => (
//                       <span
//                         key={star}
//                         className={
//                           star <= rating
//                             ? "text-yellow-400"
//                             : "text-slate-300"
//                         }
//                       >
//                         ★
//                       </span>
//                     ))}
//                     <span className="ml-1 text-sm text-slate-500">
//                       {component.avgRating?.toFixed(1) || "0.0"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <p className="mt-4 text-sm">
//                   Status:{" "}
//                   <span
//                     className={
//                       component.status === "approved"
//                         ? "text-green-600 font-medium"
//                         : component.status === "pending"
//                         ? "text-orange-500 font-medium"
//                         : "text-red-500 font-medium"
//                     }
//                   >
//                     {component.status}
//                   </span>
//                 </p>

//                 {/* Actions */}
//                 <button
//                   onClick={() =>
//                     navigate(`/components/${component._id}`)
//                   }
//                   className="mt-4 text-indigo-600 font-medium hover:underline"
//                 >
//                   View →
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchMyComponents = async () => {
//     try {
//       const data = await apiRequest("/components/my");
//       console.log("MY COMPONENTS:", data);
//       setComponents(data);
//     } catch (err) {
//       console.error("Failed to load dashboard", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyComponents();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-slate-600">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-3xl font-semibold text-slate-900">
//               Dashboard
//             </h1>
//             <p className="text-slate-600 mt-1">
//               Manage your submitted components
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/submit")}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             Submit Component
//           </button>
//         </div>

//         {/* Empty state */}
//         {components.length === 0 && (
//           <div className="bg-white/80 backdrop-blur rounded-2xl p-10 shadow text-center">
//             <p className="text-slate-600">
//               You haven’t submitted any components yet.
//             </p>
//           </div>
//         )}

//         {/* Component Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {components.map((component) => {
//             const rating = Math.round(component.avgRating || 0);

//             // 🔥 UI STATUS LOGIC (ONLY CHANGE)
//             const hasPendingUpdate = !!component.draftCode;

//             const statusLabel =
//               component.status === "approved" && hasPendingUpdate
//                 ? "Live · Update under review"
//                 : component.status === "approved"
//                 ? "Live on marketplace"
//                 : component.status === "pending"
//                 ? "Waiting for approval"
//                 : "Rejected by admin";

//             const statusColor =
//               component.status === "approved"
//                 ? "text-green-600"
//                 : component.status === "pending"
//                 ? "text-orange-500"
//                 : "text-red-500";

//             return (
//               <div
//                 key={component._id}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-xl transition"
//               >
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {component.title}
//                 </h3>

//                 <p className="text-sm text-slate-500 mt-1">
//                   {component.category}
//                 </p>

//                 {/* Likes & Rating */}
//                 <div className="flex items-center gap-4 mt-4">
//                   <span className="flex items-center gap-1 text-sm">
//                     ❤️ {component.likesCount || 0}
//                   </span>

//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <span
//                         key={star}
//                         className={
//                           star <= rating
//                             ? "text-yellow-400"
//                             : "text-slate-300"
//                         }
//                       >
//                         ★
//                       </span>
//                     ))}
//                     <span className="ml-1 text-sm text-slate-500">
//                       {component.avgRating?.toFixed(1) || "0.0"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <p className="mt-4 text-sm">
//                   Status:{" "}
//                   <span className={`${statusColor} font-medium`}>
//                     {statusLabel}
//                   </span>
//                 </p>

//                 {/* Actions */}
//                 <button
//                   onClick={() => navigate(`/components/${component._id}`)}
//                   className="mt-4 text-indigo-600 font-medium hover:underline"
//                 >
//                   View →
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchMyComponents = async () => {
//     try {
//       const data = await apiRequest("/components/my");
//       console.log("MY COMPONENTS:", data);
//       setComponents(data);
//     } catch (err) {
//       console.error("Failed to load dashboard", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyComponents();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-slate-600">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-3xl font-semibold text-slate-900">
//               Dashboard
//             </h1>
//             <p className="text-slate-600 mt-1">
//               Manage your submitted components
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/submit")}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             Submit Component
//           </button>
//         </div>

//         {/* Empty state */}
//         {components.length === 0 && (
//           <div className="bg-white/80 backdrop-blur rounded-2xl p-10 shadow text-center">
//             <p className="text-slate-600">
//               You haven’t submitted any components yet.
//             </p>
//           </div>
//         )}

//         {/* Component Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {components.map((component) => {
//             const rating = Math.round(component.avgRating || 0);
//             const hasPendingUpdate = !!component.draftCode;

//             const statusLabel =
//               component.status === "approved" && hasPendingUpdate
//                 ? "Live · Update under review"
//                 : component.status === "approved"
//                 ? "Live on marketplace"
//                 : component.status === "pending"
//                 ? "Waiting for approval"
//                 : "Rejected by admin";

//             const statusColor =
//               component.status === "approved"
//                 ? "text-green-600"
//                 : component.status === "pending"
//                 ? "text-orange-500"
//                 : "text-red-500";

//             const editDisabled = component.status === "pending";

//             return (
//               <div
//                 key={component._id}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-xl transition"
//               >
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {component.title}
//                 </h3>

//                 <p className="text-sm text-slate-500 mt-1">
//                   {component.category}
//                 </p>

//                 {/* Likes & Rating */}
//                 <div className="flex items-center gap-4 mt-4">
//                   <span className="flex items-center gap-1 text-sm">
//                     ❤️ {component.likesCount || 0}
//                   </span>

//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <span
//                         key={star}
//                         className={
//                           star <= rating
//                             ? "text-yellow-400"
//                             : "text-slate-300"
//                         }
//                       >
//                         ★
//                       </span>
//                     ))}
//                     <span className="ml-1 text-sm text-slate-500">
//                       {component.avgRating?.toFixed(1) || "0.0"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <p className="mt-4 text-sm">
//                   Status:{" "}
//                   <span className={`${statusColor} font-medium`}>
//                     {statusLabel}
//                   </span>
//                 </p>

//                 {/* Actions */}
//                 <div className="mt-5 flex items-center gap-4">
//                   <button
//                     onClick={() => navigate(`/components/${component._id}`)}
//                     className="text-indigo-600 font-medium hover:underline"
//                   >
//                     View →
//                   </button>

//                   <button
//                     disabled={editDisabled}
//                     onClick={() =>
//                       navigate(`/submit?edit=${component._id}`)
//                     }
//                     className={`text-sm font-medium ${
//                       editDisabled
//                         ? "text-slate-400 cursor-not-allowed"
//                         : "text-indigo-600 hover:underline"
//                     }`}
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= FETCH MY COMPONENTS ================= */

//   const fetchMyComponents = async () => {
//     try {
//       const data = await apiRequest("/components/my");
//       console.log("MY COMPONENTS:", data);
//       setComponents(data);
//     } catch (err) {
//       console.error("Failed to load dashboard", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyComponents();
//   }, []);

//   /* ================= LOADING ================= */

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-slate-600">
//         Loading dashboard...
//       </div>
//     );
//   }

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-3xl font-semibold text-slate-900">
//               Dashboard
//             </h1>
//             <p className="text-slate-600 mt-1">
//               Manage your submitted components
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/submit")}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             Submit Component
//           </button>
//         </div>

//         {/* EMPTY STATE */}
//         {components.length === 0 && (
//           <div className="bg-white/80 backdrop-blur rounded-2xl p-10 shadow text-center">
//             <p className="text-slate-600">
//               You haven’t submitted any components yet.
//             </p>
//           </div>
//         )}

//         {/* COMPONENT CARDS */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {components.map((component) => {
//             const rating = Math.round(component.avgRating || 0);
//             const hasPendingUpdate = !!component.draftCode;

//             /* 🔥 STATUS LOGIC (UI ONLY) */
//             const statusLabel =
//               component.status === "approved" && hasPendingUpdate
//                 ? "Live · Update under review"
//                 : component.status === "approved"
//                 ? "Live on marketplace"
//                 : component.status === "pending"
//                 ? "Waiting for approval"
//                 : "Rejected by admin";

//             const statusColor =
//               component.status === "approved"
//                 ? "text-green-600"
//                 : component.status === "pending"
//                 ? "text-orange-500"
//                 : "text-red-500";

//             /* 🔒 Disable edit while pending */
//             const editDisabled = component.status === "pending";

//             return (
//               <div
//                 key={component._id}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-xl transition"
//               >
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {component.title}
//                 </h3>

//                 <p className="text-sm text-slate-500 mt-1">
//                   {component.category}
//                 </p>

//                 {/* LIKES & RATING */}
//                 <div className="flex items-center gap-4 mt-4">
//                   <span className="flex items-center gap-1 text-sm">
//                     ❤️ {component.likesCount || 0}
//                   </span>

//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <span
//                         key={star}
//                         className={
//                           star <= rating
//                             ? "text-yellow-400"
//                             : "text-slate-300"
//                         }
//                       >
//                         ★
//                       </span>
//                     ))}
//                     <span className="ml-1 text-sm text-slate-500">
//                       {component.avgRating?.toFixed(1) || "0.0"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* STATUS */}
//                 <p className="mt-4 text-sm">
//                   Status:{" "}
//                   <span className={`${statusColor} font-medium`}>
//                     {statusLabel}
//                   </span>
//                 </p>

//                 {/* ACTIONS */}
//                 <div className="mt-5 flex items-center gap-4">
//                   <button
//                     onClick={() =>
//                       navigate(`/components/${component._id}`)
//                     }
//                     className="text-indigo-600 font-medium hover:underline"
//                   >
//                     View →
//                   </button>

//                   <button
//                     disabled={editDisabled}
//                     onClick={() =>
//                       navigate(`/edit/${component._id}`)
//                     }
//                     className={`text-sm font-medium ${
//                       editDisabled
//                         ? "text-slate-400 cursor-not-allowed"
//                         : "text-indigo-600 hover:underline"
//                     }`}
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  /* ================= FETCH MY COMPONENTS ================= */

  const fetchMyComponents = async () => {
    try {
      const data = await apiRequest("/components/my");
      console.log("MY COMPONENTS:", data);
      setComponents(data);
    } catch (err) {
      console.error("Failed to load dashboard", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyComponents();
  }, []);

  /* ================= DELETE COMPONENT (DASHBOARD ONLY) ================= */

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this component? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await apiRequest(`/components/${id}`, "DELETE");

      // 🔥 Remove from dashboard UI immediately
      setComponents((prev) =>
        prev.filter((component) => component._id !== id)
      );
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete component");
    } finally {
      setDeletingId(null);
    }
  };

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Loading dashboard...
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Dashboard
            </h1>
            <p className="text-slate-600 mt-1">
              Manage your submitted components
            </p>
          </div>

          <button
            onClick={() => navigate("/submit")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
          >
            Submit Component
          </button>
        </div>

        {/* EMPTY STATE */}
        {components.length === 0 && (
          <div className="bg-white/80 backdrop-blur rounded-2xl p-10 shadow text-center">
            <p className="text-slate-600">
              You haven’t submitted any components yet.
            </p>
          </div>
        )}

        {/* COMPONENT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => {
            const rating = Math.round(component.avgRating || 0);
            const hasPendingUpdate = !!component.draftCode;

            /* 🔥 STATUS LOGIC (UI ONLY — UNCHANGED) */
            const statusLabel =
              component.status === "approved" && hasPendingUpdate
                ? "Live · Update under review"
                : component.status === "approved"
                ? "Live on marketplace"
                : component.status === "pending"
                ? "Waiting for approval"
                : "Rejected by admin";

            const statusColor =
              component.status === "approved"
                ? "text-green-600"
                : component.status === "pending"
                ? "text-orange-500"
                : "text-red-500";

            /* 🔒 Disable edit while pending */
            const editDisabled = component.status === "pending";

            return (
              <div
                key={component._id}
                className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {component.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {component.category}
                </p>

                {/* LIKES & RATING */}
                <div className="flex items-center gap-4 mt-4">
                  <span className="flex items-center gap-1 text-sm">
                    ❤️ {component.likesCount || 0}
                  </span>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= rating
                            ? "text-yellow-400"
                            : "text-slate-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-1 text-sm text-slate-500">
                      {component.avgRating?.toFixed(1) || "0.0"}
                    </span>
                  </div>
                </div>

                {/* STATUS */}
                <p className="mt-4 text-sm">
                  Status:{" "}
                  <span className={`${statusColor} font-medium`}>
                    {statusLabel}
                  </span>
                </p>

                {/* ACTIONS */}
                <div className="mt-5 flex items-center gap-4">
                  <button
                    onClick={() =>
                      navigate(`/components/${component._id}`)
                    }
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    View →
                  </button>

                  <button
                    disabled={editDisabled}
                    onClick={() =>
                      navigate(`/edit/${component._id}`)
                    }
                    className={`text-sm font-medium ${
                      editDisabled
                        ? "text-slate-400 cursor-not-allowed"
                        : "text-indigo-600 hover:underline"
                    }`}
                  >
                    Edit
                  </button>

                  <button
                    disabled={deletingId === component._id}
                    onClick={() => handleDelete(component._id)}
                    className="text-sm font-medium text-red-600 hover:underline"
                  >
                    {deletingId === component._id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
