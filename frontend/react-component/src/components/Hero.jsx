// export default function Hero() {
//   return (
//     <section className="relative pt-28 pb-40">
//       {/* soft glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-300/30 blur-[140px]" />

//       <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
//         {/* LEFT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-12 shadow-[0_30px_80px_rgba(99,102,241,0.25)]">
//           <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
//             ⚡ AI-powered React components
//           </span>

//           <h1 className="text-5xl font-semibold text-slate-900 leading-tight">
//             Build React components
//             <br /> faster with AI
//           </h1>

//           <p className="mt-6 text-lg text-slate-600">
//             Discover, customize, and ship production-ready React components
//             using AI and developer-built templates.
//           </p>

//           <div className="mt-10 flex gap-4">
//             <button className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
//               Start building
//             </button>
//             <button className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 transition">
//               Browse components
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-10 animate-float shadow-[0_40px_100px_rgba(99,102,241,0.3)]">
//           <div className="space-y-4">
//             <div className="h-4 w-32 bg-slate-200 rounded" />
//             <div className="h-3 bg-slate-200 rounded" />
//             <div className="h-3 bg-slate-200 rounded w-5/6" />
//             <div className="h-3 bg-slate-200 rounded w-4/6" />
//           </div>
//           <button className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white">
//             Use component
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useNavigate } from "react-router-dom";

// export default function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative pt-28 pb-40 mb-40 overflow-hidden">
//       {/* soft glow (absolute, but now contained safely) */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-300/30 blur-[140px]" />

//       <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
//         {/* LEFT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-12 shadow-[0_30px_80px_rgba(99,102,241,0.25)]">
//           <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
//             ⚡ AI-powered React components
//           </span>

//           <h1 className="text-5xl font-semibold text-slate-900 leading-tight">
//             Build React components
//             <br /> faster with AI
//           </h1>

//           <p className="mt-6 text-lg text-slate-600">
//             Discover, customize, and ship production-ready React components
//             using AI and developer-built templates.
//           </p>

//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => navigate("/components")}
//               className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
//             >
//               Start building
//             </button>

//             <button
//               onClick={() => navigate("/components")}
//               className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 transition"
//             >
//               Browse components
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-10 shadow-[0_40px_100px_rgba(99,102,241,0.3)]">
//           <div className="space-y-4">
//             <div className="h-4 w-32 bg-slate-200 rounded" />
//             <div className="h-3 bg-slate-200 rounded" />
//             <div className="h-3 bg-slate-200 rounded w-5/6" />
//             <div className="h-3 bg-slate-200 rounded w-4/6" />
//           </div>

//           <button
//             onClick={() => navigate("/components")}
//             className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
//           >
//             Use component
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }








// import { useNavigate } from "react-router-dom";

// export default function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative pt-28 pb-40 min-h-screen">
      
//       {/* 🔥 BACKGROUND GLOW (SAFE) */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[600px] h-[600px] bg-indigo-300/30 blur-[140px]" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
//         {/* LEFT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-12 shadow-[0_30px_80px_rgba(99,102,241,0.25)]">
//           <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
//             ⚡ AI-powered React components
//           </span>

//           <h1 className="text-5xl font-semibold text-slate-900 leading-tight">
//             Build React components
//             <br /> faster with AI
//           </h1>

//           <p className="mt-6 text-lg text-slate-600">
//             Discover, customize, and ship production-ready React components
//             using AI and developer-built templates.
//           </p>

//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => navigate("/submit")}
//               className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
//             >
//               Start building
//             </button>

//             <button
//               onClick={() => navigate("/components")}
//               className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 transition"
//             >
//               Browse components
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-10 shadow-[0_40px_100px_rgba(99,102,241,0.3)]">
//           <div className="space-y-4">
//             <div className="h-4 w-32 bg-slate-200 rounded" />
//             <div className="h-3 bg-slate-200 rounded" />
//             <div className="h-3 bg-slate-200 rounded w-5/6" />
//             <div className="h-3 bg-slate-200 rounded w-4/6" />
//           </div>

//           <button
//             onClick={() => navigate("/components")}
//             className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
//           >
//             Use component
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }






// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components"); // public (approved)
//         setComponents(data.slice(0, 3)); // quick access (top 3)
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchComponents();
//   }, []);

//   return (
//     <section className="relative pt-28 pb-40 min-h-screen">
      
//       {/* 🔥 BACKGROUND GLOW (SAFE) */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[600px] h-[600px] bg-indigo-300/30 blur-[140px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
//         {/* LEFT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-12 shadow-[0_30px_80px_rgba(99,102,241,0.25)]">
//           <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
//             ⚡ AI-powered React components
//           </span>

//           <h1 className="text-5xl font-semibold text-slate-900 leading-tight">
//             Build React components
//             <br /> faster with AI
//           </h1>

//           <p className="mt-6 text-lg text-slate-600">
//             Discover, customize, and ship production-ready React components
//             using AI and developer-built templates.
//           </p>

//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => navigate("/submit")}
//               className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
//             >
//               Start building
//             </button>

//             <button
//               onClick={() => navigate("/components")}
//               className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 transition"
//             >
//               Browse components
//             </button>
//           </div>
//         </div>

//         {/* RIGHT – USE COMPONENT (QUICK ACCESS) */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-10 shadow-[0_40px_100px_rgba(99,102,241,0.3)]">
          
//           <h3 className="text-lg font-semibold text-slate-900 mb-4">
//             Use component
//           </h3>

//           {/* LIST */}
//           <div className="space-y-4">
//             {loading && (
//               <p className="text-sm text-slate-500">Loading components...</p>
//             )}

//             {!loading && components.length === 0 && (
//               <p className="text-sm text-slate-500">
//                 No components available yet
//               </p>
//             )}

//             {components.map((comp) => (
//               <div
//                 key={comp._id}
//                 className="p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
//               >
//                 <h4 className="font-medium text-slate-900">
//                   {comp.title}
//                 </h4>
//                 <p className="text-sm text-slate-600 mt-1">
//                   {comp.category}
//                 </p>

//                 <button
//                   onClick={() => navigate(`/components/${comp._id}`)}
//                   className="mt-3 text-sm text-indigo-600 hover:underline"
//                 >
//                   Use this component →
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* EXPLORE MORE */}
//           <button
//             onClick={() => navigate("/components")}
//             className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
//           >
//             Explore more components
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }





// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components");
//         setComponents(data.slice(0, 3)); // quick access
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchComponents();
//   }, []);

//   return (
//     <section className="relative pt-28 pb-40 min-h-screen">
//       {/* background glow */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[600px] h-[600px] bg-indigo-300/30 blur-[140px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        
//         {/* LEFT */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-12 shadow-[0_30px_80px_rgba(99,102,241,0.25)]">
//           <span className="inline-flex items-center gap-2 mb-5 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
//             ⚡ AI-powered React components
//           </span>

//           <h1 className="text-5xl font-semibold text-slate-900 leading-tight">
//             Build React components
//             <br />
//             <span className="text-indigo-600">faster with AI</span>
//           </h1>

//           <p className="mt-6 text-lg text-slate-600 max-w-xl">
//             Discover, customize, and ship production-ready React components
//             using AI and developer-crafted templates.
//           </p>

//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => navigate("/submit")}
//               className="px-7 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm"
//             >
//               Start building
//             </button>

//             <button
//               onClick={() => navigate("/components")}
//               className="px-7 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
//             >
//               Browse components
//             </button>
//           </div>
//         </div>

//         {/* RIGHT – QUICK ACCESS */}
//         <div className="bg-white/75 backdrop-blur border border-slate-200 rounded-3xl p-10 shadow-[0_40px_100px_rgba(99,102,241,0.3)]">
          
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-slate-900">
//               Use a component
//             </h3>
//             <p className="text-sm text-slate-500 mt-1">
//               Quick access to popular, ready-to-use components
//             </p>
//           </div>

//           <div className="space-y-4">
//             {loading && (
//               <p className="text-sm text-slate-500">
//                 Loading components…
//               </p>
//             )}

//             {!loading && components.length === 0 && (
//               <p className="text-sm text-slate-500">
//                 No components available yet
//               </p>
//             )}

//             {components.map((comp) => (
//               <div
//                 key={comp._id}
//                 className="group p-4 rounded-2xl border border-slate-200 bg-white/60
//                            hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5
//                            transition cursor-pointer"
//                 onClick={() => navigate(`/components/${comp._id}`)}
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h4 className="font-medium text-slate-900">
//                       {comp.title}
//                     </h4>
//                     <p className="text-sm text-slate-600 mt-1">
//                       {comp.category}
//                     </p>
//                   </div>

//                   <span className="text-sm text-indigo-600 opacity-0 group-hover:opacity-100 transition">
//                     →
//                   </span>
//                 </div>

//                 <p className="mt-3 text-sm text-indigo-600 font-medium group-hover:underline">
//                   Use this component
//                 </p>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => navigate("/components")}
//             className="mt-8 w-full py-3 rounded-xl
//                        bg-indigo-600 text-white
//                        hover:bg-indigo-700 transition shadow-sm"
//           >
//             Explore all components
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components"); // public, approved
//         setComponents(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComponents();
//   }, []);

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;
//     const amount = direction === "left" ? -320 : 320;
//     scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
//   };

//   return (
//     <section className="relative pt-28 pb-40">
//       {/* 🌈 BACKGROUND GLOW */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[750px] h-[750px] bg-indigo-300/30 blur-[160px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-28">

//         {/* ================= HERO BOX ================= */}
//         <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-[2.5rem] p-14 shadow-[0_40px_100px_rgba(99,102,241,0.3)]">
          
//           <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
//             ⚡ AI-powered React components
//           </span>

//           <h1 className="text-6xl font-semibold text-slate-900 leading-tight max-w-3xl">
//             Build React components
//             <br />
//             <span className="text-indigo-600">faster with AI</span>
//           </h1>

//           <p className="mt-8 text-lg text-slate-600 max-w-2xl">
//             Discover, customize, and ship production-ready React components
//             using AI and developer-crafted templates.
//           </p>

//           {/* 🔹 CREATIVE INFO BLOCK */}
//           <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-3xl">
//             <div className="flex gap-3">
//               <span className="text-indigo-600">⚙️</span>
//               <p className="text-sm text-slate-600">
//                 Clean, developer-approved components you can trust
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <span className="text-indigo-600">🧠</span>
//               <p className="text-sm text-slate-600">
//                 AI-assisted customization for faster development
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <span className="text-indigo-600">🚀</span>
//               <p className="text-sm text-slate-600">
//                 Ready to plug directly into production apps
//               </p>
//             </div>
//           </div>

//           <div className="mt-14 flex gap-5">
//             <button
//               onClick={() => navigate("/submit")}
//               className="px-8 py-4 rounded-full bg-indigo-600 text-white
//                          hover:bg-indigo-700 transition text-base shadow-md"
//             >
//               Start building
//             </button>

//             <button
//               onClick={() => navigate("/components")}
//               className="px-8 py-4 rounded-full border border-slate-300
//                          text-slate-700 hover:bg-slate-50 transition text-base"
//             >
//               Browse components
//             </button>
//           </div>
//         </div>

//         {/* ================= USE A COMPONENT (HORIZONTAL) ================= */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">
//                 Use a component
//               </h2>
//               <p className="text-slate-500">
//                 Quick access to ready-to-use components
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => scroll("left")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition"
//               >
//                 ←
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition"
//               >
//                 →
//               </button>
//             </div>
//           </div>

//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
//           >
//             {components.map((comp) => (
//               <div
//                 key={comp._id}
//                 onClick={() => navigate(`/components/${comp._id}`)}
//                 className="min-w-[300px] bg-white/70 backdrop-blur
//                            border border-slate-200 rounded-2xl p-6
//                            hover:shadow-lg hover:-translate-y-1
//                            transition cursor-pointer"
//               >
//                 <h3 className="font-medium text-slate-900 text-lg">
//                   {comp.title}
//                 </h3>
//                 <p className="text-slate-600 mt-1">
//                   {comp.category}
//                 </p>

//                 <p className="mt-4 text-indigo-600 font-medium">
//                   Use this component →
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <button
//               onClick={() => navigate("/components")}
//               className="px-10 py-3 rounded-full
//                          bg-indigo-600 text-white
//                          hover:bg-indigo-700 transition shadow"
//             >
//               Explore all components
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components");
//         setComponents(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComponents();
//   }, []);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative pt-28 pb-40">
//       {/* 🌈 BACKGROUND GLOW */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[900px] h-[900px] bg-indigo-300/30 blur-[180px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* ================= HERO BOX ================= */}
//         <div className="bg-white/85 backdrop-blur border border-slate-200 rounded-[2.5rem]
//                         p-14 shadow-[0_40px_100px_rgba(99,102,241,0.3)]">

//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT */}
//             <div>
//               <span className="inline-flex items-center gap-2 mb-6 px-4 py-1
//                                text-sm rounded-full bg-indigo-100 text-indigo-700">
//                 ⚡ AI-powered React components
//               </span>

//               <h1 className="text-6xl font-semibold text-slate-900 leading-tight">
//                 Build React components
//                 <br />
//                 <span className="text-indigo-600">faster with AI</span>
//               </h1>

//               <p className="mt-8 text-lg text-slate-600 max-w-xl">
//                 Discover, customize, and ship production-ready React components
//                 using AI and developer-crafted templates.
//               </p>

//               <div className="mt-12 flex gap-5">
//                 <button
//                   onClick={() => navigate("/submit")}
//                   className="px-8 py-4 rounded-full bg-indigo-600 text-white
//                              hover:bg-indigo-700 transition shadow-md">
//                   Start building
//                 </button>

//                 <button
//                   onClick={() => navigate("/components")}
//                   className="px-8 py-4 rounded-full border border-slate-300
//                              text-slate-700 hover:bg-slate-50 transition">
//                   Browse components
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT VALUE CONTENT */}
//             <div className="space-y-8">
//               <div>
//                 <p className="text-sm uppercase tracking-wide text-slate-500">
//                   Available right now
//                 </p>
//                 <p className="mt-2 text-5xl font-bold">
//                   <span className="bg-gradient-to-r from-indigo-600 to-violet-600
//                                    bg-clip-text text-transparent">
//                     {components.length}+
//                   </span>
//                   <span className="text-slate-900 ml-2">
//                     React components
//                   </span>
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-semibold text-slate-900">
//                   Powered by{" "}
//                   <span className="text-indigo-600">
//                     AI-driven customization
//                   </span>
//                 </p>
//                 <p className="mt-2 text-slate-600">
//                   Modify components using natural language prompts and adapt
//                   them instantly to your project needs.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-indigo-600" />
//                   <p className="text-slate-700 font-medium">
//                     Clean, developer-approved codebase
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-violet-600" />
//                   <p className="text-slate-700 font-medium">
//                     Integrated marketplace with AI playground
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-blue-600" />
//                   <p className="text-slate-700 font-medium">
//                     Designed for real-world production apps
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= USE A COMPONENT (AFTER HERO BOX) ================= */}
//         <div className="mt-28">

//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">
//                 Use a component
//               </h2>
//               <p className="text-slate-500">
//                 Quick access to ready-to-use components
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => scroll("left")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 ←
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 →
//               </button>
//             </div>
//           </div>

//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">

//             {components.map((c) => (
//               <div
//                 key={c._id}
//                 onClick={() => navigate(`/components/${c._id}`)}
//                 className="min-w-[300px] bg-white/80 backdrop-blur
//                            border border-slate-200 rounded-2xl p-6
//                            hover:shadow-lg hover:-translate-y-1
//                            transition cursor-pointer">
//                 <h3 className="font-medium text-slate-900 text-lg">
//                   {c.title}
//                 </h3>
//                 <p className="text-slate-600 mt-1">
//                   {c.category}
//                 </p>
//                 <p className="mt-4 text-indigo-600 font-medium">
//                   Use this component →
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 flex justify-center">
//             <button
//               onClick={() => navigate("/components")}
//               className="px-10 py-4 rounded-full bg-indigo-600 text-white
//                          hover:bg-indigo-700 transition shadow-md">
//               Explore all components
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components");
//         setComponents(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComponents();
//   }, []);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative pt-24 pb-24">
//       {/* 🌈 BACKGROUND GLOW */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[850px] h-[850px] bg-indigo-300/30 blur-[160px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* ================= HERO BOX ================= */}
//         <div className="bg-white/85 backdrop-blur border border-slate-200 rounded-[2.5rem]
//                         p-14 shadow-[0_40px_100px_rgba(99,102,241,0.3)]">

//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT */}
//             <div>
//               <span className="inline-flex items-center gap-2 mb-6 px-4 py-1
//                                text-sm rounded-full bg-indigo-100 text-indigo-700">
//                 ⚡ AI-powered React components
//               </span>

//               <h1 className="text-6xl font-semibold text-slate-900 leading-tight">
//                 Build React components
//                 <br />
//                 <span className="text-indigo-600">faster with AI</span>
//               </h1>

//               <p className="mt-8 text-lg text-slate-600 max-w-xl">
//                 Discover, customize, and ship production-ready React components
//                 using AI and developer-crafted templates.
//               </p>

//               <div className="mt-12 flex gap-5">
//                 <button
//                   onClick={() => navigate("/submit")}
//                   className="px-8 py-4 rounded-full bg-indigo-600 text-white
//                              hover:bg-indigo-700 transition shadow-md">
//                   Start building
//                 </button>

//                 <button
//                   onClick={() => navigate("/components")}
//                   className="px-8 py-4 rounded-full border border-slate-300
//                              text-slate-700 hover:bg-slate-50 transition">
//                   Browse components
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-8">
//               <div>
//                 <p className="text-sm uppercase tracking-wide text-slate-500">
//                   Available right now
//                 </p>
//                 <p className="mt-2 text-5xl font-bold">
//                   <span className="bg-gradient-to-r from-indigo-600 to-violet-600
//                                    bg-clip-text text-transparent">
//                     {components.length}+
//                   </span>
//                   <span className="text-slate-900 ml-2">
//                     React components
//                   </span>
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-semibold text-slate-900">
//                   Powered by{" "}
//                   <span className="text-indigo-600">
//                     AI-driven customization
//                   </span>
//                 </p>
//                 <p className="mt-2 text-slate-600">
//                   Modify components using natural language prompts and adapt
//                   them instantly to your project needs.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-indigo-600" />
//                   <p className="text-slate-700 font-medium">
//                     Clean, developer-approved codebase
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-violet-600" />
//                   <p className="text-slate-700 font-medium">
//                     Integrated marketplace with AI playground
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-blue-600" />
//                   <p className="text-slate-700 font-medium">
//                     Designed for real-world production apps
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= USE A COMPONENT ================= */}
//         <div className="mt-20">

//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">
//                 Use a component
//               </h2>
//               <p className="text-slate-500">
//                 Quick access to ready-to-use components
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => scroll("left")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 ←
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 →
//               </button>
//             </div>
//           </div>

//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
//             {components.map((c) => (
//               <div
//                 key={c._id}
//                 onClick={() => navigate(`/components/${c._id}`)}
//                 className="min-w-[300px] bg-white/80 backdrop-blur
//                            border border-slate-200 rounded-2xl p-6
//                            hover:shadow-lg hover:-translate-y-1
//                            transition cursor-pointer">
//                 <h3 className="font-medium text-slate-900 text-lg">
//                   {c.title}
//                 </h3>
//                 <p className="text-slate-600 mt-1">
//                   {c.category}
//                 </p>
//                 <p className="mt-4 text-indigo-600 font-medium">
//                   Use this component →
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 flex justify-center">
//             <button
//               onClick={() => navigate("/components")}
//               className="px-10 py-4 rounded-full bg-indigo-600 text-white
//                          hover:bg-indigo-700 transition shadow-md">
//               Explore all components
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components");
//         setComponents(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComponents();
//   }, []);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative pt-24 pb-12 -mb-10">
//       {/* 🌈 BACKGROUND GLOW */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[850px] h-[850px] bg-indigo-300/30 blur-[160px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* ================= HERO BOX ================= */}
//         <div
//           className="group bg-white/85 backdrop-blur border border-slate-200
//                      rounded-[2.5rem] p-14
//                      shadow-[0_40px_100px_rgba(99,102,241,0.3)]
//                      transition-all duration-700 ease-out
//                      hover:-translate-y-3
//                      hover:shadow-[0_65px_160px_rgba(99,102,241,0.45)]
//                      hover:[transform:perspective(1400px)_rotateX(2.5deg)_rotateY(-2deg)_translateZ(8px)]
//                      active:scale-[0.97]
//                      active:rotate-[0.6deg]"
//         >
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT */}
//             <div>
//               <span className="inline-flex items-center gap-2 mb-6 px-4 py-1
//                                text-sm rounded-full bg-indigo-100 text-indigo-700">
//                 ⚡ AI-powered React components
//               </span>

//               <h1 className="text-6xl font-semibold text-slate-900 leading-tight">
//                 Build React components
//                 <br />
//                 <span className="text-indigo-600">faster with AI</span>
//               </h1>

//               <p className="mt-8 text-lg text-slate-600 max-w-xl">
//                 Discover, customize, and ship production-ready React components
//                 using AI and developer-crafted templates.
//               </p>

//               <div className="mt-12 flex gap-5">
//                 <button
//                   onClick={() => navigate("/submit")}
//                   className="px-8 py-4 rounded-full bg-indigo-600 text-white
//                              hover:bg-indigo-700 transition shadow-md">
//                   Start building
//                 </button>

//                 <button
//                   onClick={() => navigate("/components")}
//                   className="px-8 py-4 rounded-full border border-slate-300
//                              text-slate-700 hover:bg-slate-50 transition">
//                   Browse components
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-8">
//               <div>
//                 <p className="text-sm uppercase tracking-wide text-slate-500">
//                   Available right now
//                 </p>
//                 <p className="mt-2 text-5xl font-bold">
//                   <span className="bg-gradient-to-r from-indigo-600 to-violet-600
//                                    bg-clip-text text-transparent">
//                     {components.length}+
//                   </span>
//                   <span className="text-slate-900 ml-2">
//                     React components
//                   </span>
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-semibold text-slate-900">
//                   Powered by{" "}
//                   <span className="text-indigo-600">
//                     AI-driven customization
//                   </span>
//                 </p>
//                 <p className="mt-2 text-slate-600">
//                   Modify components using natural language prompts and adapt
//                   them instantly to your project needs.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-indigo-600" />
//                   <p className="text-slate-700 font-medium">
//                     Clean, developer-approved codebase
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-violet-600" />
//                   <p className="text-slate-700 font-medium">
//                     Integrated marketplace with AI playground
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-blue-600" />
//                   <p className="text-slate-700 font-medium">
//                     Designed for real-world production apps
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= USE A COMPONENT ================= */}
//         <div className="mt-16">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">
//                 Use a component
//               </h2>
//               <p className="text-slate-500">
//                 Quick access to ready-to-use components
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => scroll("left")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 ←
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 →
//               </button>
//             </div>
//           </div>

//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
//             {components.map((c) => (
//               <div
//                 key={c._id}
//                 onClick={() => navigate(`/components/${c._id}`)}
//                 className="min-w-[300px] bg-white/80 backdrop-blur
//                            border border-slate-200 rounded-2xl p-6
//                            hover:shadow-lg hover:-translate-y-1
//                            transition cursor-pointer">
//                 <h3 className="font-medium text-slate-900 text-lg">
//                   {c.title}
//                 </h3>
//                 <p className="text-slate-600 mt-1">
//                   {c.category}
//                 </p>
//                 <p className="mt-4 text-indigo-600 font-medium">
//                   Use this component →
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-10 flex justify-center">
//             <button
//               onClick={() => navigate("/components")}
//               className="px-10 py-4 rounded-full bg-indigo-600 text-white
//                          hover:bg-indigo-700 transition shadow-md">
//               Explore all components
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components");
//         setComponents(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComponents();
//   }, []);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       className="
//         relative pt-24 pb-12
//         isolate overflow-hidden
//       "
//     >
//       {/* 🌈 BACKGROUND GLOW (LOCKED) */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[850px] h-[850px] bg-indigo-300/30 blur-[160px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* ================= HERO BOX ================= */}
//         <div
//           className="
//             relative overflow-hidden
//             bg-white/85 backdrop-blur
//             border border-slate-200
//             rounded-[2.5rem] p-14
//             shadow-[0_40px_100px_rgba(99,102,241,0.3)]

//             transition-all duration-700 ease-out
//             will-change-transform transform-gpu
//             contain-paint

//             hover:-translate-y-3
//             hover:shadow-[0_65px_160px_rgba(99,102,241,0.45)]
//             hover:[transform:perspective(1400px)_rotateX(2.5deg)_rotateY(-2deg)_translateZ(8px)]

//             active:scale-[0.97]
//           "
//         >
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT */}
//             <div>
//               <span className="inline-flex items-center gap-2 mb-6 px-4 py-1
//                                text-sm rounded-full bg-indigo-100 text-indigo-700">
//                 ⚡ AI-powered React components
//               </span>

//               <h1 className="text-6xl font-semibold text-slate-900 leading-tight">
//                 Build React components
//                 <br />
//                 <span className="text-indigo-600">faster with AI</span>
//               </h1>

//               <p className="mt-8 text-lg text-slate-600 max-w-xl">
//                 Discover, customize, and ship production-ready React components
//                 using AI and developer-crafted templates.
//               </p>

//               <div className="mt-12 flex gap-5">
//                 <button
//                   onClick={() => navigate("/submit")}
//                   className="px-8 py-4 rounded-full bg-indigo-600 text-white
//                              hover:bg-indigo-700 transition shadow-md">
//                   Start building
//                 </button>

//                 <button
//                   onClick={() => navigate("/components")}
//                   className="px-8 py-4 rounded-full border border-slate-300
//                              text-slate-700 hover:bg-slate-50 transition">
//                   Browse components
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-8">
//               <div>
//                 <p className="text-sm uppercase tracking-wide text-slate-500">
//                   Available right now
//                 </p>
//                 <p className="mt-2 text-5xl font-bold">
//                   <span className="bg-gradient-to-r from-indigo-600 to-violet-600
//                                    bg-clip-text text-transparent">
//                     {components.length}+
//                   </span>
//                   <span className="text-slate-900 ml-2">
//                     React components
//                   </span>
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-semibold text-slate-900">
//                   Powered by{" "}
//                   <span className="text-indigo-600">
//                     AI-driven customization
//                   </span>
//                 </p>
//                 <p className="mt-2 text-slate-600">
//                   Modify components using natural language prompts and adapt
//                   them instantly to your project needs.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-indigo-600" />
//                   <p className="text-slate-700 font-medium">
//                     Clean, developer-approved codebase
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-violet-600" />
//                   <p className="text-slate-700 font-medium">
//                     Integrated marketplace with AI playground
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-2 h-2 rounded-full bg-blue-600" />
//                   <p className="text-slate-700 font-medium">
//                     Designed for real-world production apps
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= USE A COMPONENT ================= */}
//         <div className="mt-16">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-900">
//                 Use a component
//               </h2>
//               <p className="text-slate-500">
//                 Quick access to ready-to-use components
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => scroll("left")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 ←
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 →
//               </button>
//             </div>
//           </div>

//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
//             {components.map((c) => (
//               <div
//                 key={c._id}
//                 onClick={() => navigate(`/components/${c._id}`)}
//                 className="min-w-[300px] bg-white/80 backdrop-blur
//                            border border-slate-200 rounded-2xl p-6
//                            hover:shadow-lg hover:-translate-y-1
//                            transition cursor-pointer">
//                 <h3 className="font-medium text-slate-900 text-lg">
//                   {c.title}
//                 </h3>
//                 <p className="text-slate-600 mt-1">
//                   {c.category}
//                 </p>
//                 <p className="mt-4 text-indigo-600 font-medium">
//                   Use this component →
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-10 flex justify-center">
//             <button
//               onClick={() => navigate("/components")}
//               className="px-10 py-4 rounded-full bg-indigo-600 text-white
//                          hover:bg-indigo-700 transition shadow-md">
//               Explore all components
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     const fetchComponents = async () => {
//       try {
//         const data = await apiRequest("/components");
//         setComponents(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComponents();
//   }, []);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative pt-16 md:pt-24 pb-12 isolate overflow-hidden">
//       {/* 🌈 BACKGROUND GLOW */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
//         <div className="w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-indigo-300/30 blur-[140px] md:blur-[160px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

//         {/* ================= HERO BOX ================= */}
//         <div
//           className="
//             relative overflow-hidden
//             bg-white/85 backdrop-blur
//             border border-slate-200
//             rounded-3xl
//             p-6 sm:p-10 md:p-14
//             shadow-[0_30px_80px_rgba(99,102,241,0.25)]
//             transition-all duration-700 ease-out
//           "
//         >
//           <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

//             {/* LEFT */}
//             <div>
//               <span className="inline-flex items-center gap-2 mb-4 px-4 py-1
//                                text-xs sm:text-sm rounded-full
//                                bg-indigo-100 text-indigo-700">
//                 ⚡ AI-powered React components
//               </span>

//               <h1 className="text-4xl sm:text-5xl md:text-6xl
//                              font-semibold text-slate-900 leading-tight">
//                 Build React components
//                 <br />
//                 <span className="text-indigo-600">
//                   faster with AI
//                 </span>
//               </h1>

//               <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 max-w-xl">
//                 Discover, customize, and ship production-ready React components
//                 using AI and developer-crafted templates.
//               </p>

//               <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
//                 <button
//                   onClick={() => navigate("/submit")}
//                   className="px-8 py-4 rounded-full bg-indigo-600 text-white
//                              hover:bg-indigo-700 transition shadow-md">
//                   Start building
//                 </button>

//                 <button
//                   onClick={() => navigate("/components")}
//                   className="px-8 py-4 rounded-full border border-slate-300
//                              text-slate-700 hover:bg-slate-50 transition">
//                   Browse components
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-6 sm:space-y-8">
//               <div>
//                 <p className="text-xs sm:text-sm uppercase tracking-wide text-slate-500">
//                   Available right now
//                 </p>
//                 <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
//                   <span className="bg-gradient-to-r from-indigo-600 to-violet-600
//                                    bg-clip-text text-transparent">
//                     {components.length}+
//                   </span>
//                   <span className="text-slate-900 ml-2">
//                     React components
//                   </span>
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xl sm:text-2xl font-semibold text-slate-900">
//                   Powered by{" "}
//                   <span className="text-indigo-600">
//                     AI-driven customization
//                   </span>
//                 </p>
//                 <p className="mt-2 text-slate-600 text-sm sm:text-base">
//                   Modify components using natural language prompts and adapt
//                   them instantly to your project needs.
//                 </p>
//               </div>

//               <div className="space-y-3 sm:space-y-4">
//                 {[
//                   "Clean, developer-approved codebase",
//                   "Integrated marketplace with AI playground",
//                   "Designed for real-world production apps",
//                 ].map((text, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <span className="w-2 h-2 rounded-full bg-indigo-600" />
//                     <p className="text-slate-700 font-medium text-sm sm:text-base">
//                       {text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= USE A COMPONENT ================= */}
//         <div className="mt-14 sm:mt-16">
//           <div className="flex items-center justify-between mb-6 sm:mb-8">
//             <div>
//               <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
//                 Use a component
//               </h2>
//               <p className="text-slate-500 text-sm sm:text-base">
//                 Quick access to ready-to-use components
//               </p>
//             </div>

//             <div className="hidden sm:flex gap-2">
//               <button
//                 onClick={() => scroll("left")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 ←
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 className="w-10 h-10 rounded-full border border-slate-300
//                            hover:bg-slate-100 transition">
//                 →
//               </button>
//             </div>
//           </div>

//           <div
//             ref={scrollRef}
//             className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
//           >
//             {components.map((c) => (
//               <div
//                 key={c._id}
//                 onClick={() => navigate(`/components/${c._id}`)}
//                 className="min-w-[260px] sm:min-w-[300px]
//                            bg-white/80 backdrop-blur
//                            border border-slate-200 rounded-2xl p-6
//                            hover:shadow-lg hover:-translate-y-1
//                            transition cursor-pointer">
//                 <h3 className="font-medium text-slate-900 text-lg">
//                   {c.title}
//                 </h3>
//                 <p className="text-slate-600 mt-1">
//                   {c.category}
//                 </p>
//                 <p className="mt-4 text-indigo-600 font-medium">
//                   Use this component →
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-10 flex justify-center">
//             <button
//               onClick={() => navigate("/components")}
//               className="px-10 py-4 rounded-full bg-indigo-600 text-white
//                          hover:bg-indigo-700 transition shadow-md">
//               Explore all components
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

export default function Hero() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const data = await apiRequest("/components");
        setComponents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComponents();
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pt-16 md:pt-24 pb-12 isolate overflow-hidden">
      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
        <div className="w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-indigo-300/30 blur-[140px] md:blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= HERO BOX ================= */}
        <div
          className="
            relative overflow-hidden
            bg-white/85 backdrop-blur
            border border-slate-200
            rounded-3xl
            p-6 sm:p-10 md:p-14

            shadow-[0_30px_80px_rgba(99,102,241,0.25)]
            transition-all duration-700 ease-out
            will-change-transform transform-gpu

            md:hover:-translate-y-3
            md:hover:shadow-[0_65px_160px_rgba(99,102,241,0.45)]
            md:hover:[transform:perspective(1400px)_rotateX(2.5deg)_rotateY(-2deg)_translateZ(8px)]

            active:scale-[0.97]
          "
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* LEFT */}
            <div>
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-1
                               text-xs sm:text-sm rounded-full
                               bg-indigo-100 text-indigo-700">
                ⚡ AI-powered React components
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl
                             font-semibold text-slate-900 leading-tight">
                Build React components
                <br />
                <span className="text-indigo-600">
                  faster with AI
                </span>
              </h1>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 max-w-xl">
                Discover, customize, and ship production-ready React components
                using AI and developer-crafted templates.
              </p>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <button
                  onClick={() => navigate("/submit")}
                  className="px-8 py-4 rounded-full bg-indigo-600 text-white
                             hover:bg-indigo-700 transition shadow-md">
                  Start building
                </button>

                <button
                  onClick={() => navigate("/components")}
                  className="px-8 py-4 rounded-full border border-slate-300
                             text-slate-700 hover:bg-slate-50 transition">
                  Browse components
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wide text-slate-500">
                  Available right now
                </p>
                <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600
                                   bg-clip-text text-transparent">
                    {components.length}+
                  </span>
                  <span className="text-slate-900 ml-2">
                    React components
                  </span>
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Powered by{" "}
                  <span className="text-indigo-600">
                    AI-driven customization
                  </span>
                </p>
                <p className="mt-2 text-slate-600 text-sm sm:text-base">
                  Modify components using natural language prompts and adapt
                  them instantly to your project needs.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Clean, developer-approved codebase",
                  "Integrated marketplace with AI playground",
                  "Designed for real-world production apps",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    <p className="text-slate-700 font-medium text-sm sm:text-base">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= USE A COMPONENT ================= */}
        <div className="mt-14 sm:mt-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Use a component
              </h2>
              <p className="text-slate-500 text-sm sm:text-base">
                Quick access to ready-to-use components
              </p>
            </div>

            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-slate-300
                           hover:bg-slate-100 transition">
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-slate-300
                           hover:bg-slate-100 transition">
                →
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
          >
            {components.map((c) => (
              <div
                key={c._id}
                onClick={() => navigate(`/components/${c._id}`)}
                className="min-w-[260px] sm:min-w-[300px]
                           bg-white/80 backdrop-blur
                           border border-slate-200 rounded-2xl p-6
                           hover:shadow-lg hover:-translate-y-1
                           transition cursor-pointer">
                <h3 className="font-medium text-slate-900 text-lg">
                  {c.title}
                </h3>
                <p className="text-slate-600 mt-1">
                  {c.category}
                </p>
                <p className="mt-4 text-indigo-600 font-medium">
                  Use this component →
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => navigate("/components")}
              className="px-10 py-4 rounded-full bg-indigo-600 text-white
                         hover:bg-indigo-700 transition shadow-md">
              Explore all components
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
