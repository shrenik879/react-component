// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const isLoggedIn = !!localStorage.getItem("token");

//   const [liked, setLiked] = useState(false);
//   const [rating, setRating] = useState(0);

//   const requireAuth = (action) => {
//     if (!isLoggedIn) {
//       alert("Please sign in to continue");
//       navigate("/login");
//       return;
//     }
//     action();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT: INFO */}
//         <div>
//           <h1 className="text-3xl font-semibold text-slate-900">
//             Primary Button
//           </h1>

//           <p className="mt-3 text-slate-600">
//             A reusable, accessible button component with Tailwind styling.
//           </p>

//           {/* LIKE & RATING */}
//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() =>
//                 requireAuth(() => setLiked(!liked))
//               }
//               className={`px-4 py-2 rounded-full border transition ${
//                 liked
//                   ? "bg-pink-50 text-pink-600 border-pink-300"
//                   : "bg-white text-slate-600 border-slate-300"
//               }`}
//             >
//               ❤️ {liked ? "Liked" : "Like"}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() => setRating(star))
//                   }
//                   className={`text-xl ${
//                     star <= rating
//                       ? "text-yellow-400"
//                       : "text-slate-300"
//                   }`}
//                 >
//                   ★
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* AI ACTIONS */}
//           <div className="mt-10 flex gap-4">
//             <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
//               Customize with AI
//             </button>
//             <button className="border px-6 py-3 rounded-lg">
//               Explain Code
//             </button>
//           </div>
//         </div>

//         {/* RIGHT: CODE PREVIEW */}
//         <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl text-sm overflow-x-auto">
// {`export default function Button() {
//   return (
//     <button className="px-4 py-2 bg-indigo-600 text-white rounded">
//       Click me
//     </button>
//   );
// }`}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       alert("Please sign in to continue");
//       navigate("/login");
//       return;
//     }
//     await action();
//     fetchComponent();
//   };

//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold text-slate-900">
//             {component.title}
//           </h1>

//           <p className="mt-3 text-slate-600">
//             {component.category}
//           </p>

//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() =>
//                 requireAuth(() => likeComponent(component._id))
//               }
//               className="px-4 py-2 rounded-full border bg-white"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() =>
//                       rateComponent(component._id, star)
//                     )
//                   }
//                   className={
//                     star <= component.avgRating
//                       ? "text-yellow-400 text-xl"
//                       : "text-slate-300 text-xl"
//                   }
//                 >
//                   ★
//                 </button>
//               ))}
//               <span className="ml-2 text-sm text-slate-500">
//                 {component.avgRating?.toFixed(1) || "0.0"}
//               </span>
//             </div>
//           </div>

//           <div className="mt-10 flex gap-4">
//             <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
//               Customize with AI
//             </button>
//             <button className="border px-6 py-3 rounded-lg">
//               Explain Code
//             </button>
//           </div>
//         </div>

//         {/* CODE */}
//         <pre className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl text-sm overflow-x-auto">
//           {component.code}
//         </pre>
//       </div>
//     </div>
//   );
// }



// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [aiLoading, setAiLoading] = useState(false);

//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//     fetchComponent();
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   const rating = Math.round(component.avgRating || 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold text-slate-900">
//             {component.title}
//           </h1>

//           <p className="mt-2 text-slate-600">
//             {component.category}
//           </p>

//           {/* LIKE & RATING */}
//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() =>
//                 requireAuth(() => likeComponent(component._id))
//               }
//               className="px-4 py-2 rounded-full border bg-white"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() =>
//                       rateComponent(component._id, star)
//                     )
//                   }
//                   className={
//                     star <= rating
//                       ? "text-yellow-400 text-xl"
//                       : "text-slate-300 text-xl"
//                   }
//                 >
//                   ★
//                 </button>
//               ))}
//               <span className="ml-2 text-sm text-slate-500">
//                 {component.avgRating?.toFixed(1) || "0.0"}
//               </span>
//             </div>
//           </div>

//           {/* AI ACTIONS */}
//           <div className="mt-10 flex gap-4">
//             <button
//               disabled={aiLoading}
//               onClick={() =>
//                 requireAuth(async () => {
//                   const instruction = prompt(
//                     "How should AI modify this component?"
//                   );
//                   if (!instruction) return;

//                   setAiLoading(true);
//                   try {
//                     const res = await customizeComponent(
//                       component.code,
//                       instruction
//                     );
//                     setComponent({
//                       ...component,
//                       code: res.code,
//                     });
//                   } finally {
//                     setAiLoading(false);
//                   }
//                 })
//               }
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg disabled:opacity-60"
//             >
//               {aiLoading ? "Customizing..." : "Customize with AI"}
//             </button>

//             <button
//               disabled={aiLoading}
//               onClick={() =>
//                 requireAuth(async () => {
//                   setAiLoading(true);
//                   try {
//                     const res = await explainComponent(component.code);
//                     alert(res.explanation);
//                   } finally {
//                     setAiLoading(false);
//                   }
//                 })
//               }
//               className="border px-6 py-3 rounded-lg disabled:opacity-60"
//             >
//               Explain Code
//             </button>
//           </div>
//         </div>

//         {/* CODE PREVIEW */}
//         <pre className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl text-sm overflow-x-auto">
// {component.code}
//         </pre>
//       </div>
//     </div>
//   );
// }




// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   // AI states
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [prompt, setPrompt] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//       setCode(data.code); // 🔥 IMPORTANT
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//     fetchComponent();
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   const rating = Math.round(component.avgRating || 0);

//   // ================= AI HANDLERS =================

//   const handleCustomize = async () => {
//     if (!prompt.trim()) {
//       alert("Please enter instructions for customization");
//       return;
//     }

//     try {
//       setAiLoading(true);
//       const res = await customizeComponent(code, prompt);
//       setCode(res.code); // 🔥 Update code panel
//       setPrompt("");
//       setShowCustomize(false);
//     } catch (err) {
//       console.error("Customize failed:", err.message);
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   const handleExplain = async () => {
//     try {
//       setAiLoading(true);
//       const res = await explainComponent(code);
//       setExplanation(res.explanation);
//     } catch (err) {
//       console.error("Explain failed:", err.message);
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   // =================================================

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold">{component.title}</h1>
//           <p className="mt-2 text-slate-600">{component.category}</p>

//           {/* LIKE & RATING */}
//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() =>
//                 requireAuth(() => likeComponent(component._id))
//               }
//               className="px-4 py-2 rounded-full border bg-white"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1,2,3,4,5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() =>
//                       rateComponent(component._id, star)
//                     )
//                   }
//                   className={
//                     star <= rating
//                       ? "text-yellow-400 text-xl"
//                       : "text-slate-300 text-xl"
//                   }
//                 >
//                   ★
//                 </button>
//               ))}
//               <span className="ml-2 text-sm text-slate-500">
//                 {component.avgRating?.toFixed(1) || "0.0"}
//               </span>
//             </div>
//           </div>

//           {/* AI ACTIONS */}
//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => setShowCustomize(!showCustomize)}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
//             >
//               Customize with AI
//             </button>

//             <button
//               onClick={handleExplain}
//               className="border px-6 py-3 rounded-lg"
//             >
//               Explain Code
//             </button>
//           </div>

//           {/* CUSTOMIZE PANEL */}
//           {showCustomize && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow">
//               <textarea
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 placeholder="e.g. Convert to dark mode, add loading state..."
//                 rows={3}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg"
//               >
//                 {aiLoading ? "Customizing..." : "Apply"}
//               </button>
//             </div>
//           )}

//           {/* EXPLANATION */}
//           {explanation && (
//             <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-slate-700">
//               {explanation}
//             </div>
//           )}
//         </div>

//         {/* CODE PANEL (fixed height, no resize issue) */}
//         <pre className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl text-sm overflow-auto max-h-[600px]">
//           {code}
//         </pre>
//       </div>
//     </div>
//   );
// }


// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= SAFE PREVIEW ENGINE (FIXED) ================= */

// const sanitizeCode = (code = "") => {
//   return code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();
// };

// const autoRegisterFallback = (code) => {
//   const match =
//     code.match(/function\s+([A-Z][A-Za-z0-9_]*)/) ||
//     code.match(/const\s+([A-Z][A-Za-z0-9_]*)\s*=/);

//   return match ? `register(${match[1]});` : "";
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);
//   const fallbackRegister = autoRegisterFallback(safeCode);

//   return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   <style>
//     body {
//       margin: 0;
//       padding: 20px;
//       font-family: system-ui;
//       background: white;
//     }
//     .error {
//       color: red;
//       white-space: pre-wrap;
//       font-family: monospace;
//     }
//   </style>
// </head>
// <body>
//   <div id="root"></div>

//   <script type="text/babel">
//     try {
//       let PreviewComponent = null;

//       function register(Component) {
//         PreviewComponent = Component;
//         return Component;
//       }

//       ${safeCode}

//       ${fallbackRegister}

//       if (!PreviewComponent) {
//         throw new Error("No React component detected.");
//       }

//       ReactDOM.createRoot(document.getElementById("root")).render(
//         React.createElement(PreviewComponent)
//       );
//     } catch (err) {
//       document.getElementById("root").innerHTML =
//         "<pre class='error'>" + err.message + "</pre>";
//     }
//   </script>
// </body>
// </html>
// `;
// };

// /* ================= COMPONENT ================= */

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [view, setView] = useState("code");
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [showExplain, setShowExplain] = useState(false);

//   const [instruction, setInstruction] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   /* ================= FETCH ================= */

//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//       setCode(data.code);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   const rating = Math.round(component.avgRating || 0);

//   /* ================= AI ================= */

//   const handleCustomize = () =>
//     requireAuth(async () => {
//       if (!instruction.trim()) return;

//       try {
//         setAiLoading(true);
//         const res = await customizeComponent(code, instruction);
//         setCode(res.code);
//         setInstruction("");
//         setShowCustomize(false);
//         setView("code");
//       } catch {
//         alert("AI customization failed or limit reached.");
//       } finally {
//         setAiLoading(false);
//       }
//     });

//   const handleExplain = () =>
//     requireAuth(async () => {
//       try {
//         setAiLoading(true);
//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       } catch {
//         setExplanation("Failed to explain code.");
//       } finally {
//         setAiLoading(false);
//       }
//     });

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold">{component.title}</h1>
//           <p className="text-slate-600 mt-1">{component.category}</p>

//           <div className="mt-6 flex gap-6">
//             <button
//               onClick={() => requireAuth(() => likeComponent(component._id))}
//               className="px-4 py-2 rounded-full border bg-white"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1,2,3,4,5].map((s) => (
//                 <button
//                   key={s}
//                   onClick={() => requireAuth(() => rateComponent(component._id, s))}
//                   className={`text-xl ${s <= rating ? "text-yellow-400" : "text-slate-300"}`}
//                 >
//                   ★
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => {
//                 setShowCustomize(v => !v);
//                 setShowExplain(false);
//               }}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
//             >
//               Customize with AI
//             </button>

//             <button
//               onClick={() => {
//                 setShowExplain(true);
//                 setShowCustomize(false);
//                 handleExplain();
//               }}
//               className="border px-6 py-3 rounded-lg"
//             >
//               Explain Code
//             </button>
//           </div>

//           {showCustomize && (
//             <div className="mt-6 bg-white p-4 rounded-xl shadow">
//               <textarea
//                 value={instruction}
//                 onChange={(e) => setInstruction(e.target.value)}
//                 placeholder="Describe changes..."
//                 className="w-full border rounded-lg p-3"
//               />
//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Apply
//               </button>
//             </div>
//           )}

//           {showExplain && explanation && (
//             <div className="mt-6 bg-white p-4 rounded-xl shadow text-sm">
//               {explanation}
//             </div>
//           )}
//         </div>

//         {/* RIGHT */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[520px]">
//           <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
//             <span className="text-slate-300 text-sm">
//               {view === "preview" ? "Live Preview" : "Code"}
//             </span>
//             <div className="flex gap-2">
//               <button onClick={() => setView("code")} className="btn">Code</button>
//               <button onClick={() => setView("preview")} className="btn">Preview</button>
//               <button onClick={() => navigator.clipboard.writeText(code)} className="btn">Copy</button>
//             </div>
//           </div>

//           <div className="flex-1 p-5 overflow-auto text-sm text-slate-100">
//             {view === "preview" ? (
//               <iframe
//                 title="preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="whitespace-pre-wrap">{code}</pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   // UI state
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [showExplain, setShowExplain] = useState(false);

//   // AI state
//   const [instruction, setInstruction] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   /* ================= FETCH COMPONENT ================= */
//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//       setCode(data.code);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//     fetchComponent();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   const rating = Math.round(component.avgRating || 0);

//   /* ================= AI HANDLERS ================= */

// //   const handleCustomize = async () => {
// //     if (!instruction.trim()) return;

// //     try {
// //       setAiLoading(true);
// //       const res = await customizeComponent(code, instruction);
// //       setCode(res.code);
// //       setInstruction("");
// //       setShowCustomize(false);
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setAiLoading(false);
// //     }
// //   };
// const handleCustomize = async () => {
//   if (!instruction.trim()) return;

//   try {
//     setAiLoading(true);
//     const res = await customizeComponent(code, instruction);
//     setCode(res.code);
//     setInstruction("");
//     setShowCustomize(false);
//   } catch (err) {
//     if (err.message.includes("quota") || err.message.includes("429")) {
//       alert(
//         "AI limit reached for today.\nPlease try again later or upgrade AI quota."
//       );
//     } else {
//       alert("AI customization failed. Please try again.");
//     }
//   } finally {
//     setAiLoading(false);
//   }
// };

// //   const handleExplain = async () => {
// //     try {
// //       setAiLoading(true);
// //       const res = await explainComponent(code);
// //       setExplanation(res.explanation);
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setAiLoading(false);
// //     }
// //   };
// const handleExplain = async () => {
//   try {
//     setAiLoading(true);
//     const res = await explainComponent(code);
//     setExplanation(res.explanation);
//   } catch (err) {
//     if (err.message.includes("quota") || err.message.includes("429")) {
//       setExplanation(
//         "AI limit reached for today. Please try again later."
//       );
//     } else {
//       setExplanation("Failed to explain code.");
//     }
//   } finally {
//     setAiLoading(false);
//   }
// };


//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* ================= LEFT ================= */}
//         <div>
//           <h1 className="text-3xl font-semibold text-slate-900">
//             {component.title}
//           </h1>

//           <p className="mt-2 text-slate-600">
//             {component.category}
//           </p>

//           {/* LIKE + RATING */}
//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() =>
//                 requireAuth(() => likeComponent(component._id))
//               }
//               className="px-4 py-2 rounded-full border bg-white hover:bg-slate-50 transition"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() =>
//                       rateComponent(component._id, star)
//                     )
//                   }
//                   className={`text-xl transition ${
//                     star <= rating
//                       ? "text-yellow-400"
//                       : "text-slate-300 hover:text-slate-400"
//                   }`}
//                 >
//                   ★
//                 </button>
//               ))}
//               <span className="ml-2 text-sm text-slate-500">
//                 {component.avgRating?.toFixed(1) || "0.0"}
//               </span>
//             </div>
//           </div>

//           {/* AI ACTION BUTTONS */}
//           <div className="mt-10 flex gap-4">
//             {/* <button
//               onClick={() => {
//                 setShowCustomize((v) => !v);
//                 setShowExplain(false);
//               }}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Customize with AI
//             </button> */}
//             <button
//   onClick={() => {
//     if (aiLoading) return;        // 🔒 prevent clicks during AI call
//     setShowCustomize((v) => !v);  // toggle customize
//     setShowExplain(false);        // close explain
//   }}
//   disabled={aiLoading}
//   className="bg-indigo-600 text-white px-6 py-3 rounded-lg 
//              hover:bg-indigo-700 transition
//              disabled:opacity-50 disabled:cursor-not-allowed"
// >
//   {aiLoading ? "Processing..." : "Customize with AI"}
// </button>


//             <button
//               onClick={() => {
//                 setShowExplain(true);
//                 setShowCustomize(false);
//                 handleExplain();
//               }}
//               className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 hover:border-slate-400 transition"
//             >
//               Explain Code
//             </button>
//           </div>

//           {/* CUSTOMIZE PANEL */}
//           {showCustomize && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow">
//               <textarea
//                 value={instruction}
//                 onChange={(e) => setInstruction(e.target.value)}
//                 placeholder="Describe how you want to modify this component..."
//                 rows="3"
//                 className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />

//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
//               >
//                 {aiLoading ? "Customizing..." : "Apply changes"}
//               </button>
//             </div>
//           )}

//           {/* EXPLANATION PANEL */}
//           {showExplain && explanation && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow text-slate-700 text-sm leading-relaxed">
//               {explanation}
//             </div>
//           )}
//         </div>

//         {/* ================= CODE PANEL ================= */}
//         <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl text-sm overflow-auto max-h-[520px]">
//           <pre className="whitespace-pre-wrap">{code}</pre>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= PREVIEW LOGIC ================= */

// const sanitizeCode = (code = "") => {
//   return code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();
// };

// const autoRegisterFallback = (code) => {
//   const match =
//     code.match(/function\s+([A-Z][A-Za-z0-9_]*)/) ||
//     code.match(/const\s+([A-Z][A-Za-z0-9_]*)\s*=/);

//   return match ? `register(${match[1]});` : "";
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);
//   const fallback = autoRegisterFallback(safeCode);

//   return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   <style>
//     body {
//       margin: 0;
//       padding: 20px;
//       font-family: system-ui;
//       background: white;
//     }
//     .error {
//       color: red;
//       white-space: pre-wrap;
//       font-family: monospace;
//     }
//   </style>
// </head>
// <body>
//   <div id="root"></div>

//   <script type="text/babel">
//     try {
//       let PreviewComponent = null;

//       function register(Component) {
//         PreviewComponent = Component;
//         return Component;
//       }

//       ${safeCode}
//       ${fallback}

//       if (!PreviewComponent) {
//         throw new Error("No React component found.");
//       }

//       ReactDOM.createRoot(document.getElementById("root")).render(
//         React.createElement(PreviewComponent)
//       );
//     } catch (err) {
//       document.getElementById("root").innerHTML =
//         "<pre class='error'>" + err.message + "</pre>";
//     }
//   </script>
// </body>
// </html>
// `;
// };

// /* ================= COMPONENT ================= */

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   // UI
//   const [view, setView] = useState("code"); // code | preview
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [showExplain, setShowExplain] = useState(false);

//   // AI
//   const [instruction, setInstruction] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   /* ================= FETCH ================= */

//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//       setCode(data.code);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//     fetchComponent();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   const rating = Math.round(component.avgRating || 0);

//   /* ================= AI HANDLERS ================= */

//   const handleCustomize = async () => {
//     if (!instruction.trim()) return;

//     try {
//       setAiLoading(true);
//       const res = await customizeComponent(code, instruction);

//       // ✅ Always update code if received
//       if (res?.code) {
//         setCode(res.code);
//       }

//       // ✅ ALWAYS switch to code view after AI
//       setView("code");

//       setInstruction("");
//       setShowCustomize(false);
//     } catch (err) {
//       const msg = err.message || "";

//       // ✅ Even on error, show code view
//       setView("code");

//       if (msg.includes("429") || msg.includes("quota")) {
//         alert(
//           "AI quota exceeded.\nPlease wait about 1 minute before trying again."
//         );
//       } else if (msg.includes("503") || msg.includes("overloaded")) {
//         alert("AI is overloaded. Please try again shortly.");
//       } else {
//         alert("AI customization failed.");
//       }
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   const handleExplain = async () => {
//     try {
//       setAiLoading(true);
//       const res = await explainComponent(code);
//       setExplanation(res.explanation);
//     } catch (err) {
//       const msg = err.message || "";
//       if (msg.includes("429") || msg.includes("quota")) {
//         setExplanation(
//           "AI quota exceeded. Please try again in about a minute."
//         );
//       } else {
//         setExplanation("Failed to explain code.");
//       }
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* ================= LEFT ================= */}
//         <div>
//           <h1 className="text-3xl font-semibold">{component.title}</h1>
//           <p className="mt-2 text-slate-600">{component.category}</p>

//           {/* LIKE + RATING */}
//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() => requireAuth(() => likeComponent(component._id))}
//               className="px-4 py-2 rounded-full border bg-white"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() => rateComponent(component._id, star))
//                   }
//                   className={`text-xl ${
//                     star <= rating
//                       ? "text-yellow-400"
//                       : "text-slate-300"
//                   }`}
//                 >
//                   ★
//                 </button>
//               ))}
//               <span className="ml-2 text-sm text-slate-500">
//                 {component.avgRating?.toFixed(1) || "0.0"}
//               </span>
//             </div>
//           </div>

//           {/* AI BUTTONS */}
//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => {
//                 if (aiLoading) return;
//                 setShowCustomize((v) => !v);
//                 setShowExplain(false);
//               }}
//               disabled={aiLoading}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
//             >
//               {aiLoading ? "Processing..." : "Customize with AI"}
//             </button>

//             <button
//               onClick={() => {
//                 setShowExplain(true);
//                 setShowCustomize(false);
//                 handleExplain();
//               }}
//               className="border px-6 py-3 rounded-lg"
//             >
//               Explain Code
//             </button>
//           </div>

//           {/* CUSTOMIZE PANEL */}
//           {showCustomize && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow">
//               <textarea
//                 value={instruction}
//                 onChange={(e) => setInstruction(e.target.value)}
//                 placeholder="Describe how you want to modify this component..."
//                 rows="3"
//                 className="w-full rounded-lg border px-4 py-3"
//               />
//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
//               >
//                 {aiLoading ? "Customizing..." : "Apply changes"}
//               </button>
//             </div>
//           )}

//           {/* EXPLANATION */}
//           {showExplain && explanation && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow text-sm">
//               {explanation}
//             </div>
//           )}
//         </div>

//         {/* ================= RIGHT (CODE + PREVIEW) ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[520px]">

//           {/* HEADER */}
//           <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
//             <span className="text-slate-300 text-sm">
//               {view === "preview" ? "Live Preview" : "Code"}
//             </span>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setView("code")}
//                 className={`px-3 py-1 text-xs rounded ${
//                   view === "code"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-700 text-slate-200"
//                 }`}
//               >
//                 Code
//               </button>
//               <button
//                 onClick={() => setView("preview")}
//                 className={`px-3 py-1 text-xs rounded ${
//                   view === "preview"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-700 text-slate-200"
//                 }`}
//               >
//                 Preview
//               </button>
//               <button
//                 onClick={() => navigator.clipboard.writeText(code)}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 overflow-auto p-5 text-sm text-slate-100">
//             {view === "preview" && code ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="whitespace-pre-wrap">
//                 {code || "// Code will appear here"}
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= PREVIEW LOGIC (FIXED ONLY) ================= */

// const sanitizeCode = (code = "") => {
//   return code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();
// };

// /**
//  * ✅ Auto-register ONLY if register() does NOT exist
//  */
// const autoRegisterFallback = (code) => {
//   // If register() already exists, do nothing
//   if (/register\s*\(/.test(code)) return "";

//   const matches = [
//     ...code.matchAll(/(function|const)\s+([A-Z][A-Za-z0-9_]*)/g),
//   ];

//   if (matches.length) {
//     const lastComponent = matches[matches.length - 1][2];
//     return `register(${lastComponent});`;
//   }

//   // ✅ FINAL GUARANTEED FALLBACK
//   return `
// function __PreviewWrapper() {
//   return (
//     <React.Fragment>
//       ${code}
//     </React.Fragment>
//   );
// }
// register(__PreviewWrapper);
// `;
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);
//   const fallbackRegister = autoRegisterFallback(safeCode);

//   return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   <style>
//     body {
//       margin: 0;
//       padding: 20px;
//       font-family: system-ui;
//       background: white;
//     }
//     .error {
//       color: red;
//       white-space: pre-wrap;
//       font-family: monospace;
//     }
//   </style>
// </head>
// <body>
//   <div id="root"></div>

//   <script type="text/babel">
//     try {
//       let PreviewComponent = null;

//       function register(Component) {
//         PreviewComponent = Component;
//         return Component;
//       }

//       ${safeCode}

//       ${fallbackRegister}

//       if (!PreviewComponent) {
//         throw new Error("No previewable React component detected.");
//       }

//       ReactDOM.createRoot(document.getElementById("root")).render(
//         React.createElement(PreviewComponent)
//       );
//     } catch (err) {
//       document.getElementById("root").innerHTML =
//         "<pre class='error'>" + err.message + "</pre>";
//     }
//   </script>
// </body>
// </html>
// `;
// };

// /* ================= COMPONENT ================= */

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   // UI
//   const [view, setView] = useState("code"); // code | preview
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [showExplain, setShowExplain] = useState(false);

//   // AI
//   const [instruction, setInstruction] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   /* ================= FETCH ================= */

//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//       setCode(data.code);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//     fetchComponent();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   const rating = Math.round(component.avgRating || 0);

//   /* ================= AI HANDLERS ================= */

//   const handleCustomize = async () => {
//     if (!instruction.trim()) return;

//     try {
//       setAiLoading(true);
//       const res = await customizeComponent(code, instruction);

//       if (res?.code) setCode(res.code);

//       setView("code");
//       setInstruction("");
//       setShowCustomize(false);
//     } catch (err) {
//       setView("code");
//       alert("AI quota exceeded or temporarily unavailable.");
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   const handleExplain = async () => {
//     try {
//       setAiLoading(true);
//       const res = await explainComponent(code);
//       setExplanation(res.explanation);
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold">{component.title}</h1>
//           <p className="mt-2 text-slate-600">{component.category}</p>

//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() => requireAuth(() => likeComponent(component._id))}
//               className="px-4 py-2 rounded-full border bg-white"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() => rateComponent(component._id, star))
//                   }
//                   className={`text-xl ${
//                     star <= rating ? "text-yellow-400" : "text-slate-300"
//                   }`}
//                 >
//                   ★
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => {
//                 if (aiLoading) return;
//                 setShowCustomize((v) => !v);
//                 setShowExplain(false);
//               }}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
//             >
//               Customize with AI
//             </button>

//             <button
//               onClick={() => {
//                 setShowExplain(true);
//                 setShowCustomize(false);
//                 handleExplain();
//               }}
//               className="border px-6 py-3 rounded-lg"
//             >
//               Explain Code
//             </button>
//           </div>

//           {showCustomize && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow">
//               <textarea
//                 value={instruction}
//                 onChange={(e) => setInstruction(e.target.value)}
//                 placeholder="Describe how you want to modify this component..."
//                 rows="3"
//                 className="w-full rounded-lg border px-4 py-3"
//               />
//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Apply changes
//               </button>
//             </div>
//           )}

//           {showExplain && explanation && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow text-sm">
//               {explanation}
//             </div>
//           )}
//         </div>

//         {/* RIGHT (CODE + PREVIEW + COPY) */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[520px]">
//           <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
//             <span className="text-slate-300 text-sm">
//               {view === "preview" ? "Live Preview" : "Code"}
//             </span>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setView("code")}
//                 className={`px-3 py-1 text-xs rounded ${
//                   view === "code"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-700 text-slate-200"
//                 }`}
//               >
//                 Code
//               </button>
//               <button
//                 onClick={() => setView("preview")}
//                 className={`px-3 py-1 text-xs rounded ${
//                   view === "preview"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-700 text-slate-200"
//                 }`}
//               >
//                 Preview
//               </button>
//               <button
//                 onClick={() => navigator.clipboard.writeText(code)}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 overflow-auto p-5 text-sm text-slate-100">
//             {view === "preview" && code ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="whitespace-pre-wrap">{code}</pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= PREVIEW LOGIC ================= */

// const sanitizeCode = (code = "") => {
//   return code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();
// };

// const autoRegisterFallback = (code) => {
//   if (/register\s*\(/.test(code)) return "";

//   const matches = [
//     ...code.matchAll(/(function|const)\s+([A-Z][A-Za-z0-9_]*)/g),
//   ];

//   if (matches.length) {
//     const lastComponent = matches[matches.length - 1][2];
//     return `register(${lastComponent});`;
//   }

//   return `
// function __PreviewWrapper() {
//   return (
//     <React.Fragment>
//       ${code}
//     </React.Fragment>
//   );
// }
// register(__PreviewWrapper);
// `;
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);
//   const fallbackRegister = autoRegisterFallback(safeCode);

//   return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   <style>
//     body {
//       margin: 0;
//       padding: 20px;
//       font-family: system-ui;
//       background: white;
//     }
//     .error {
//       color: red;
//       white-space: pre-wrap;
//       font-family: monospace;
//     }
//   </style>
// </head>
// <body>
//   <div id="root"></div>

//   <script type="text/babel">
//     try {
//       let PreviewComponent = null;

//       function register(Component) {
//         PreviewComponent = Component;
//         return Component;
//       }

//       ${safeCode}
//       ${fallbackRegister}

//       if (!PreviewComponent) {
//         throw new Error("No previewable React component detected.");
//       }

//       ReactDOM.createRoot(document.getElementById("root")).render(
//         React.createElement(PreviewComponent)
//       );
//     } catch (err) {
//       document.getElementById("root").innerHTML =
//         "<pre class='error'>" + err.message + "</pre>";
//     }
//   </script>
// </body>
// </html>
// `;
// };

// /* ================= CODE DISPLAY FORMATTER ================= */
// /* 🔒 DISPLAY ONLY — does NOT affect preview or copy */

// const formatCodeForDisplay = (code = "") => {
//   if (!code) return "";

//   return code
//     .replace(/\s+([a-zA-Z]+)=/g, "\n  $1=")
//     .replace(/\{\{\s*/g, "{{\n    ")
//     .replace(/,\s*/g, ",\n    ")
//     .replace(/\s*\}\}/g, "\n  }}")
//     .replace(/>([^<]+)</g, ">\n  $1\n<")
//     .trim();
// };

// /* ================= COMPONENT ================= */

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   // UI
//   const [view, setView] = useState("code");
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [showExplain, setShowExplain] = useState(false);

//   // AI
//   const [instruction, setInstruction] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   /* ================= FETCH ================= */

//   const fetchComponent = async () => {
//     try {
//       const data = await getComponentById(id);
//       setComponent(data);
//       setCode(data.code);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//     fetchComponent();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   const rating = Math.round(component.avgRating || 0);

//   /* ================= AI HANDLERS ================= */

//   const handleCustomize = async () => {
//     if (!instruction.trim()) return;

//     try {
//       setAiLoading(true);
//       const res = await customizeComponent(code, instruction);
//       if (res?.code) setCode(res.code);
//       setView("code");
//       setInstruction("");
//       setShowCustomize(false);
//     } catch {
//       setView("code");
//       alert("AI quota exceeded or temporarily unavailable.");
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   const handleExplain = async () => {
//     try {
//       setAiLoading(true);
//       const res = await explainComponent(code);
//       setExplanation(res.explanation);
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold">{component.title}</h1>
//           <p className="mt-2 text-slate-600">{component.category}</p>

//           <div className="mt-6 flex items-center gap-6">
//             <button
//               onClick={() => requireAuth(() => likeComponent(component._id))}
//               className="px-4 py-2 rounded-full border bg-white hover:bg-slate-50 transition"
//             >
//               ❤️ {component.likesCount || 0}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() =>
//                     requireAuth(() => rateComponent(component._id, star))
//                   }
//                   className={`text-xl transition ${
//                     star <= rating
//                       ? "text-yellow-400"
//                       : "text-slate-300 hover:text-slate-400"
//                   }`}
//                 >
//                   ★
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => {
//                 if (aiLoading) return;
//                 setShowCustomize((v) => !v);
//                 setShowExplain(false);
//               }}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg
//                          transition-all duration-200
//                          hover:bg-indigo-700 hover:shadow-md
//                          active:scale-95"
//             >
//               Customize with AI
//             </button>

//             <button
//               onClick={() => {
//                 setShowExplain(true);
//                 setShowCustomize(false);
//                 handleExplain();
//               }}
//               className="border px-6 py-3 rounded-lg
//                          transition-all duration-200
//                          hover:bg-slate-100 active:scale-95"
//             >
//               Explain Code
//             </button>
//           </div>

//           {showCustomize && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow">
//               <textarea
//                 value={instruction}
//                 onChange={(e) => setInstruction(e.target.value)}
//                 placeholder="Describe how you want to modify this component..."
//                 rows="3"
//                 className="w-full rounded-lg border px-4 py-3"
//               />
//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg
//                            transition-all duration-200
//                            hover:bg-indigo-700 hover:shadow
//                            active:scale-95
//                            disabled:opacity-50"
//               >
//                 Apply changes
//               </button>
//             </div>
//           )}

//           {showExplain && explanation && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow text-sm">
//               {explanation}
//             </div>
//           )}
//         </div>

//         {/* RIGHT (CODE + PREVIEW + COPY) */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[520px]">
//           <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
//             <span className="text-slate-300 text-sm">
//               {view === "preview" ? "Live Preview" : "Code"}
//             </span>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setView("code")}
//                 className={`px-3 py-1 text-xs rounded transition-all ${
//                   view === "code"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-700 text-slate-200 hover:bg-slate-600"
//                 }`}
//               >
//                 Code
//               </button>

//               <button
//                 onClick={() => setView("preview")}
//                 className={`px-3 py-1 text-xs rounded transition-all ${
//                   view === "preview"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-700 text-slate-200 hover:bg-slate-600"
//                 }`}
//               >
//                 Preview
//               </button>

//               <button
//                 onClick={() => navigator.clipboard.writeText(code)}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded
//                            transition-all duration-200
//                            hover:bg-slate-600 hover:shadow
//                            active:scale-95"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 overflow-auto p-5 text-slate-100">
//             {view === "preview" && code ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="font-mono text-sm leading-relaxed whitespace-pre overflow-auto">
//                 {formatCodeForDisplay(code)}
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= PREVIEW LOGIC (UNCHANGED) ================= */

// const sanitizeCode = (code = "") =>
//   code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();

// const autoRegisterFallback = (code) => {
//   if (/register\s*\(/.test(code)) return "";

//   const matches = [
//     ...code.matchAll(/(function|const)\s+([A-Z][A-Za-z0-9_]*)/g),
//   ];

//   if (matches.length) {
//     return `register(${matches[matches.length - 1][2]});`;
//   }

//   return `
// function __PreviewWrapper() {
//   return (
//     <React.Fragment>
//       ${code}
//     </React.Fragment>
//   );
// }
// register(__PreviewWrapper);
// `;
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);
//   const fallbackRegister = autoRegisterFallback(safeCode);

//   return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   <style>
//     body { margin:0; padding:20px; font-family:system-ui; background:white; }
//     .error { color:red; white-space:pre-wrap; font-family:monospace; }
//   </style>
// </head>
// <body>
// <div id="root"></div>
// <script type="text/babel">
// try {
//   let PreviewComponent = null;
//   function register(Component) {
//     PreviewComponent = Component;
//     return Component;
//   }

//   ${safeCode}
//   ${fallbackRegister}

//   if (!PreviewComponent) {
//     throw new Error("No previewable React component detected.");
//   }

//   ReactDOM.createRoot(document.getElementById("root")).render(
//     React.createElement(PreviewComponent)
//   );
// } catch (err) {
//   document.getElementById("root").innerHTML =
//     "<pre class='error'>" + err.message + "</pre>";
// }
// </script>
// </body>
// </html>
// `;
// };

// /* ================= COMPONENT ================= */

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [view, setView] = useState("code");

//   const [instruction, setInstruction] = useState("");
//   const [showCustomize, setShowCustomize] = useState(false);

//   const [showExplain, setShowExplain] = useState(false);
//   const [explanation, setExplanation] = useState("");

//   const [aiLoading, setAiLoading] = useState(false);

//   const [userRating, setUserRating] = useState(0);
//   const ratingLock = useRef(false);

//   const [copied, setCopied] = useState(false);

//   /* ================= FETCH ================= */

//   const fetchComponent = async () => {
//     const data = await getComponentById(id);
//     setComponent(data);
//     setCode(data.code);

//     // ✅ only set rating on FIRST load
//     if (!ratingLock.current) {
//       setUserRating(data.userRating || 0);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   /* ================= ACTIONS ================= */

//   const handleLike = () =>
//     requireAuth(async () => {
//       await likeComponent(id);
//       fetchComponent();
//     });

//   const handleRate = (value) =>
//     requireAuth(async () => {
//       ratingLock.current = true;
//       const finalValue = value === userRating ? 0 : value;
//       setUserRating(finalValue);
//       await rateComponent(id, finalValue);
//     });

//   const handleCustomize = async () => {
//     if (!instruction.trim()) return;
//     setAiLoading(true);
//     const res = await customizeComponent(code, instruction);
//     if (res?.code) setCode(res.code);
//     setInstruction("");
//     setShowCustomize(false);
//     setAiLoading(false);
//   };

//   const handleExplain = async () => {
//     setShowExplain(true);
//     setAiLoading(true);
//     const res = await explainComponent(code);
//     setExplanation(res.explanation);
//     setAiLoading(false);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold">{component.title}</h1>
//           <p className="mt-2 text-slate-600">{component.category}</p>

//           {/* LIKE + RATING */}
//           <div className="flex items-center gap-6 mt-6">
//             <button
//               onClick={handleLike}
//               className="px-4 py-2 bg-white rounded-lg shadow hover:bg-indigo-50 transition"
//             >
//               ❤️ {component.likesCount}
//             </button>

//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((v) => (
//                 <button
//                   key={v}
//                   onClick={() => handleRate(v)}
//                   className={`text-3xl transition hover:scale-125 ${
//                     v <= userRating ? "text-yellow-400" : "text-gray-300"
//                   }`}
//                 >
//                   ★
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ACTIONS */}
//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={() => {
//                 setShowCustomize((v) => !v);
//                 setShowExplain(false);
//               }}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Customize with AI
//             </button>

//             <button
//               onClick={handleExplain}
//               className="bg-white px-6 py-3 rounded-lg shadow hover:bg-indigo-50 transition"
//             >
//               Explain Code
//             </button>
//           </div>

//           {showCustomize && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow">
//               <textarea
//                 value={instruction}
//                 onChange={(e) => setInstruction(e.target.value)}
//                 rows="3"
//                 className="w-full rounded-lg border px-4 py-3"
//               />
//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//               >
//                 Apply changes
//               </button>
//             </div>
//           )}

//           {showExplain && (
//             <div className="mt-6 bg-white rounded-xl p-5 shadow">
//               <p className="text-sm whitespace-pre-line">{explanation}</p>
//             </div>
//           )}
//         </div>

//         {/* RIGHT */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl flex flex-col h-[520px] relative">
//           {copied && (
//             <div className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded">
//               Copied to clipboard
//             </div>
//           )}

//           <div className="flex justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-slate-300 text-sm">
//               {view === "preview" ? "Live Preview" : "Code"}
//             </span>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setView("code")}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600"
//               >
//                 Code
//               </button>
//               <button
//                 onClick={() => setView("preview")}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600"
//               >
//                 Preview
//               </button>
//               <button
//                 onClick={handleCopy}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 overflow-auto p-5 text-slate-100">
//             {view === "preview" ? (
//               <iframe
//                 key={code} // 🔥 forces refresh
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="font-mono text-sm whitespace-pre-wrap break-words">
//                 {code}
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= PREVIEW LOGIC (UNCHANGED) ================= */

// const sanitizeCode = (code = "") =>
//   code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();

// const autoRegisterFallback = (code) => {
//   if (/register\s*\(/.test(code)) return "";

//   const matches = [
//     ...code.matchAll(/(function|const)\s+([A-Z][A-Za-z0-9_]*)/g),
//   ];

//   if (matches.length) {
//     return `register(${matches[matches.length - 1][2]});`;
//   }

//   return `
// function __PreviewWrapper() {
//   return (
//     <React.Fragment>
//       ${code}
//     </React.Fragment>
//   );
// }
// register(__PreviewWrapper);
// `;
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);
//   const fallbackRegister = autoRegisterFallback(safeCode);

//   return `
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8" />
// <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// <style>
// body { margin:0; padding:20px; font-family:system-ui; background:white; }
// .error { color:red; white-space:pre-wrap; font-family:monospace; }
// </style>
// </head>
// <body>
// <div id="root"></div>
// <script type="text/babel">
// try {
// let PreviewComponent = null;
// function register(Component) {
// PreviewComponent = Component;
// return Component;
// }

// ${safeCode}
// ${fallbackRegister}

// if (!PreviewComponent) {
// throw new Error("No previewable React component detected.");
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
// React.createElement(PreviewComponent)
// );
// } catch (err) {
// document.getElementById("root").innerHTML =
// "<pre class='error'>" + err.message + "</pre>";
// }
// </script>
// </body>
// </html>
// `;
// };

// /* ================= COMPONENT ================= */

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [view, setView] = useState("code");

//   const [instruction, setInstruction] = useState("");
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [showExplain, setShowExplain] = useState(false);
//   const [explanation, setExplanation] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   const [userRating, setUserRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);

//   const [copied, setCopied] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");

//   /* ================= FETCH ================= */

//   const fetchComponent = async () => {
//     const data = await getComponentById(id);
//     setComponent(data);
//     setCode(data.code);

//     // 🔥 Restore rating from localStorage
//     const savedRating = localStorage.getItem(`rating-${id}`);
//     if (savedRating) {
//       setUserRating(Number(savedRating));
//     } else {
//       setUserRating(data.userRating || 0);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   /* ================= ACTIONS ================= */

//   const handleRate = (value) =>
//     requireAuth(async () => {
//       const finalValue = value === userRating ? 0 : value;
//       setUserRating(finalValue);
//       localStorage.setItem(`rating-${id}`, finalValue); // 🔥 persist
//       await rateComponent(id, finalValue);
//     });

//   const handleCustomize = async () => {
//     if (!instruction.trim()) return;
//     setAiLoading(true);
//     setSuccessMsg("");

//     const res = await customizeComponent(code, instruction);
//     if (res?.code) setCode(res.code);

//     setInstruction("");
//     setShowCustomize(false);
//     setAiLoading(false);
//     setSuccessMsg("✅ Changes applied successfully!");

//     setTimeout(() => setSuccessMsg(""), 3000);
//   };

//   const handleExplain = async () => {
//     setShowExplain(true);
//     setAiLoading(true);
//     const res = await explainComponent(code);
//     setExplanation(res.explanation);
//     setAiLoading(false);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-semibold">{component.title}</h1>

//           {/* ⭐ RATING */}
//           <div className="flex items-center gap-4 mt-6">
//             {[1,2,3,4,5].map((v)=>(
//               <button
//                 key={v}
//                 onClick={()=>handleRate(v)}
//                 onMouseEnter={()=>setHoverRating(v)}
//                 onMouseLeave={()=>setHoverRating(0)}
//                 className={`text-3xl transition transform hover:scale-125 ${
//                   v <= (hoverRating || userRating)
//                     ? "text-yellow-400"
//                     : "text-gray-300"
//                 }`}
//               >
//                 ★
//               </button>
//             ))}
//           </div>

//           {successMsg && (
//             <p className="mt-4 text-green-600 font-medium">
//               {successMsg}
//             </p>
//           )}

//           {aiLoading && (
//             <p className="mt-4 text-indigo-600 animate-pulse">
//               🔄 Generating response...
//             </p>
//           )}

//           {/* CUSTOMIZE */}
//           <div className="mt-8">
//             <button
//               onClick={()=>setShowCustomize(v=>!v)}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
//             >
//               Customize with AI
//             </button>

//             {showCustomize && (
//               <div className="mt-4 bg-white rounded-xl p-4 shadow space-y-3">
//                 <textarea
//                   value={instruction}
//                   onChange={(e)=>setInstruction(e.target.value)}
//                   rows="3"
//                   placeholder='Example: "Make button rounded, add gradient background and hover shadow effect"'
//                   className="w-full rounded-lg border px-4 py-3"
//                 />
//                 <button
//                   onClick={handleCustomize}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
//                 >
//                   Apply Changes
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* EXPLAIN */}
//           {showExplain && (
//             <div className="mt-6 bg-white rounded-xl p-6 shadow whitespace-pre-wrap leading-relaxed text-slate-700">
//               {explanation}
//             </div>
//           )}
//         </div>

//         {/* RIGHT SIDE PREVIEW */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl flex flex-col h-[520px] relative">

//           {copied && (
//             <div className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded">
//               Copied!
//             </div>
//           )}

//           <div className="flex justify-between px-4 py-3 border-b border-slate-700">
//             <div className="flex gap-2">
//               <button
//                 onClick={()=>setView("code")}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded"
//               >
//                 Code
//               </button>
//               <button
//                 onClick={()=>setView("preview")}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded"
//               >
//                 Preview
//               </button>
//               <button
//                 onClick={handleCopy}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 overflow-auto p-5 text-slate-100">
//             {view === "preview" ? (
//               <iframe
//                 key={code}
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="font-mono text-sm whitespace-pre-wrap break-words">
//                 {code}
//               </pre>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }





// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getComponentById,
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";
// import {
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= PREVIEW LOGIC (UNCHANGED) ================= */

// const sanitizeCode = (code = "") =>
//   code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();

// const autoRegisterFallback = (code) => {
//   if (/register\s*\(/.test(code)) return "";

//   const matches = [
//     ...code.matchAll(/(function|const)\s+([A-Z][A-Za-z0-9_]*)/g),
//   ];

//   if (matches.length) {
//     return `register(${matches[matches.length - 1][2]});`;
//   }

//   return `
// function __PreviewWrapper() {
//   return (
//     <React.Fragment>
//       ${code}
//     </React.Fragment>
//   );
// }
// register(__PreviewWrapper);
// `;
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);
//   const fallbackRegister = autoRegisterFallback(safeCode);

//   return `
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8" />
// <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// <style>
// body { margin:0; padding:20px; font-family:system-ui; background:white; }
// .error { color:red; white-space:pre-wrap; font-family:monospace; }
// </style>
// </head>
// <body>
// <div id="root"></div>
// <script type="text/babel">
// try {
// let PreviewComponent = null;
// function register(Component) {
// PreviewComponent = Component;
// return Component;
// }
// ${safeCode}
// ${fallbackRegister}
// if (!PreviewComponent) {
// throw new Error("No previewable React component detected.");
// }
// ReactDOM.createRoot(document.getElementById("root")).render(
// React.createElement(PreviewComponent)
// );
// } catch (err) {
// document.getElementById("root").innerHTML =
// "<pre class='error'>" + err.message + "</pre>";
// }
// </script>
// </body>
// </html>
// `;
// };

// /* ================= COMPONENT ================= */

// export default function ComponentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const [component, setComponent] = useState(null);
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [view, setView] = useState("code");

//   const [instruction, setInstruction] = useState("");
//   const [showCustomize, setShowCustomize] = useState(false);
//   const [showExplain, setShowExplain] = useState(false);
//   const [explanation, setExplanation] = useState("");

//   const [aiLoading, setAiLoading] = useState(false);
//   const [userRating, setUserRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [liked, setLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(0);

//   /* ================= FETCH ================= */

//   const fetchComponent = async () => {
//     const data = await getComponentById(id);
//     setComponent(data);
//     setCode(data.code);

//     setLikesCount(data.likesCount || 0);
//     setLiked(data.userLiked || false);

//     const savedRating = localStorage.getItem(`rating-${id}`);
//     if (savedRating) {
//       setUserRating(Number(savedRating));
//     } else {
//       setUserRating(data.userRating || 0);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchComponent();
//   }, [id]);

//   const requireAuth = async (action) => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     await action();
//   };

//   if (loading) return <div className="p-20">Loading...</div>;
//   if (!component) return <div className="p-20">Not found</div>;

//   /* ================= ACTIONS ================= */

//   const handleRate = (value) =>
//     requireAuth(async () => {
//       const finalValue = value === userRating ? 0 : value;
//       setUserRating(finalValue);
//       localStorage.setItem(`rating-${id}`, finalValue);
//       await rateComponent(id, finalValue);
//     });

//   const handleLike = () =>
//     requireAuth(async () => {
//       const res = await likeComponent(id);
//       setLiked(res.liked);
//       setLikesCount(res.likesCount);
//     });

//   const handleCustomize = async () => {
//     if (!instruction.trim()) return;

//     setAiLoading(true);

//     const res = await customizeComponent(code, instruction);
//     if (res?.code) setCode(res.code);

//     setInstruction("");
//     setShowCustomize(false);
//     setAiLoading(false);
//   };

//   const handleExplain = async () => {
//     setShowExplain(true);
//     setAiLoading(true);

//     const res = await explainComponent(code);
//     setExplanation(res.explanation);

//     setAiLoading(false);
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT SIDE */}
//         <div>

//           <h1 className="text-3xl font-semibold">{component.title}</h1>

//           {/* LIKE + RATING */}
//           <div className="flex items-center gap-6 mt-6">

//             <button
//               onClick={handleLike}
//               className={`px-4 py-2 rounded-lg transition transform hover:scale-105 ${
//                 liked
//                   ? "bg-pink-600 text-white"
//                   : "bg-white text-pink-600 border border-pink-600"
//               }`}
//             >
//               ❤️ {likesCount}
//             </button>

//             <div className="flex gap-1">
//               {[1,2,3,4,5].map((v)=>(
//                 <button
//                   key={v}
//                   onClick={()=>handleRate(v)}
//                   onMouseEnter={()=>setHoverRating(v)}
//                   onMouseLeave={()=>setHoverRating(0)}
//                   className={`text-3xl transition transform hover:scale-125 ${
//                     v <= (hoverRating || userRating)
//                       ? "text-yellow-400"
//                       : "text-gray-300"
//                   }`}
//                 >
//                   ★
//                 </button>
//               ))}
//             </div>

//           </div>

//           {/* ACTION BUTTONS */}
//           <div className="mt-8 flex gap-4">

//             <button
//               onClick={()=>setShowCustomize(v=>!v)}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Customize with AI
//             </button>

//             <button
//               onClick={handleExplain}
//               className="bg-white border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
//             >
//               Explain Code
//             </button>

//           </div>

//           {/* CUSTOMIZE PANEL */}
//           {showCustomize && (
//             <div className="mt-6 bg-white rounded-xl p-4 shadow space-y-3">
//               <textarea
//                 value={instruction}
//                 onChange={(e)=>setInstruction(e.target.value)}
//                 rows="3"
//                 placeholder='Example: "Make button rounded with gradient background and smooth hover shadow"'
//                 className="w-full rounded-lg border px-4 py-3"
//               />

//               <button
//                 onClick={handleCustomize}
//                 disabled={aiLoading}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full"
//               >
//                 {aiLoading ? "Generating..." : "Apply Changes"}
//               </button>
//             </div>
//           )}

//           {/* EXPLAIN PANEL */}
//           {showExplain && (
//             <div className="mt-6 bg-white rounded-xl p-6 shadow whitespace-pre-wrap leading-relaxed text-slate-700">
//               {aiLoading ? "Generating explanation..." : explanation}
//             </div>
//           )}

//         </div>

//         {/* RIGHT SIDE PREVIEW */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl flex flex-col h-[520px]">

//           <div className="flex justify-between px-4 py-3 border-b border-slate-700">
//             <div className="flex gap-2">
//               <button
//                 onClick={()=>setView("code")}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600 transition"
//               >
//                 Code
//               </button>
//               <button
//                 onClick={()=>setView("preview")}
//                 className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600 transition"
//               >
//                 Preview
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 overflow-auto p-5 text-slate-100">
//             {view === "preview" ? (
//               <iframe
//                 key={code}
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="font-mono text-sm whitespace-pre-wrap break-words">
//                 {code}
//               </pre>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }




import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getComponentById,
  likeComponent,
  rateComponent,
} from "../services/componentApi";
import {
  customizeComponent,
  explainComponent,
} from "../services/aiApi";

/* ================= PREVIEW LOGIC (UNCHANGED) ================= */

const sanitizeCode = (code = "") =>
  code
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^import\s.+?;$/gm, "")
    .replace(/export\s+default\s+/g, "")
    .trim();

const autoRegisterFallback = (code) => {
  if (/register\s*\(/.test(code)) return "";

  const matches = [
    ...code.matchAll(/(function|const)\s+([A-Z][A-Za-z0-9_]*)/g),
  ];

  if (matches.length) {
    return `register(${matches[matches.length - 1][2]});`;
  }

  return `
function __PreviewWrapper() {
  return (
    <React.Fragment>
      ${code}
    </React.Fragment>
  );
}
register(__PreviewWrapper);
`;
};

const buildPreviewHTML = (rawCode = "") => {
  if (!rawCode.trim()) return "";

  const safeCode = sanitizeCode(rawCode);
  const fallbackRegister = autoRegisterFallback(safeCode);

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
body { margin:0; padding:20px; font-family:system-ui; background:white; }
.error { color:red; white-space:pre-wrap; font-family:monospace; }
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
try {
let PreviewComponent = null;
function register(Component) {
PreviewComponent = Component;
return Component;
}
${safeCode}
${fallbackRegister}
if (!PreviewComponent) {
throw new Error("No previewable React component detected.");
}
ReactDOM.createRoot(document.getElementById("root")).render(
React.createElement(PreviewComponent)
);
} catch (err) {
document.getElementById("root").innerHTML =
"<pre class='error'>" + err.message + "</pre>";
}
</script>
</body>
</html>
`;
};

/* ================= COMPONENT ================= */

export default function ComponentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const [component, setComponent] = useState(null);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("code");

  const [instruction, setInstruction] = useState("");
  const [showCustomize, setShowCustomize] = useState(false);
  const [showExplain, setShowExplain] = useState(false);
  const [explanation, setExplanation] = useState("");

  const [aiLoading, setAiLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const [copied, setCopied] = useState(false);

  /* ================= FETCH ================= */

  const fetchComponent = async () => {
    const data = await getComponentById(id);

    setComponent(data);
    setCode(data.code);

    setLikesCount(data.likesCount || 0);
    setLiked(data.userLiked || false);

    const savedRating = localStorage.getItem(`rating-${id}`);
    if (savedRating) {
      setUserRating(Number(savedRating));
    } else {
      setUserRating(data.userRating || 0);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchComponent();
  }, [id]);

  const requireAuth = async (action) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    await action();
  };

  if (loading) return <div className="p-20">Loading...</div>;
  if (!component) return <div className="p-20">Not found</div>;

  /* ================= ACTIONS ================= */

  const handleRate = (value) =>
    requireAuth(async () => {
      const finalValue = value === userRating ? 0 : value;
      setUserRating(finalValue);
      localStorage.setItem(`rating-${id}`, finalValue);
      await rateComponent(id, finalValue);
    });

  // const handleLike = () =>
  //   requireAuth(async () => {
  //     // 🔥 Optimistic update
  //     const newLiked = !liked;
  //     setLiked(newLiked);
  //     setLikesCount((prev) => newLiked ? prev + 1 : prev - 1);

  //     try {
  //       await likeComponent(id);
  //     } catch (err) {
  //       // rollback if API fails
  //       setLiked(liked);
  //       setLikesCount((prev) => newLiked ? prev - 1 : prev + 1);
  //     }
  //   });

const handleLike = () =>
  requireAuth(async () => {
    // Store previous state (for rollback safety)
    const previousLiked = liked;
    const previousCount = likesCount;

    // 🔥 Optimistic update
    const newLiked = !previousLiked;
    setLiked(newLiked);
    setLikesCount(prev => newLiked ? prev + 1 : prev - 1);

    try {
      const res = await likeComponent(id);

      // ✅ If backend returns updated values → use them
      if (res && typeof res.userLiked !== "undefined") {
        setLiked(res.userLiked);
      }

      if (res && typeof res.likesCount !== "undefined") {
        setLikesCount(res.likesCount);
      }

    } catch (err) {
      // ❌ Rollback if API fails
      setLiked(previousLiked);
      setLikesCount(previousCount);
      console.error("Like failed:", err);
    }
  });



  const handleCustomize = async () => {
    if (!instruction.trim()) return;

    setAiLoading(true);

    const res = await customizeComponent(code, instruction);
    if (res?.code) setCode(res.code);

    setInstruction("");
    setShowCustomize(false);
    setAiLoading(false);
  };

  const handleExplain = async () => {
    setShowExplain(true);
    setAiLoading(true);

    const res = await explainComponent(code);
    setExplanation(res.explanation);

    setAiLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl font-semibold">{component.title}</h1>

          {/* LIKE + RATING */}
          <div className="flex items-center gap-6 mt-6">

            <button
              onClick={handleLike}
              className={`px-4 py-2 rounded-lg transition transform hover:scale-105 ${
                liked
                  ? "bg-pink-600 text-white"
                  : "bg-white text-pink-600 border border-pink-600"
              }`}
            >
             {liked ? "❤️ Dislike" : "🤍 Like"}

            </button>

            <div className="flex gap-1">
              {[1,2,3,4,5].map((v)=>(
                <button
                  key={v}
                  onClick={()=>handleRate(v)}
                  onMouseEnter={()=>setHoverRating(v)}
                  onMouseLeave={()=>setHoverRating(0)}
                  className={`text-3xl transition transform hover:scale-125 ${
                    v <= (hoverRating || userRating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={()=>setShowCustomize(v=>!v)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Customize with AI
            </button>

            <button
              onClick={handleExplain}
              className="bg-white border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Explain Code
            </button>
          </div>

          {/* CUSTOMIZE */}
          {showCustomize && (
            <div className="mt-6 bg-white rounded-xl p-4 shadow space-y-3">
              <textarea
                value={instruction}
                onChange={(e)=>setInstruction(e.target.value)}
                rows="3"
                placeholder='Example: "Make button rounded with gradient background and smooth hover shadow"'
                className="w-full rounded-lg border px-4 py-3"
              />

              <button
                onClick={handleCustomize}
                disabled={aiLoading}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full"
              >
                {aiLoading ? "Generating..." : "Apply Changes"}
              </button>
            </div>
          )}

          {/* EXPLAIN */}
          {showExplain && (
            <div className="mt-6 bg-white rounded-xl p-6 shadow whitespace-pre-wrap leading-relaxed text-slate-700">
              {aiLoading ? "Generating explanation..." : explanation}
            </div>
          )}
        </div>

        {/* RIGHT PREVIEW */}
        <div className="bg-slate-900 rounded-2xl shadow-xl flex flex-col h-[520px] relative">

          {copied && (
            <div className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded">
              Copied!
            </div>
          )}

          <div className="flex justify-between px-4 py-3 border-b border-slate-700">
            <div className="flex gap-2">
              <button
                onClick={()=>setView("code")}
                className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600 transition"
              >
                Code
              </button>

              <button
                onClick={()=>setView("preview")}
                className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600 transition"
              >
                Preview
              </button>

              <button
                onClick={handleCopy}
                className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600 transition"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-5 text-slate-100">
            {view === "preview" ? (
              <iframe
                key={code}
                title="Live Preview"
                sandbox="allow-scripts allow-same-origin"
                srcDoc={buildPreviewHTML(code)}
                className="w-full h-full bg-white rounded"
              />
            ) : (
              <pre className="font-mono text-sm whitespace-pre-wrap break-words">
                {code}
              </pre>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}





