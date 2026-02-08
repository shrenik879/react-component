// import { useState } from "react";
// import { generateComponent } from "../services/aiApi";

// export default function AIPlayground() {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     if (!prompt.trim()) return;

//     setLoading(true);
//     try {
//       const res = await generateComponent(prompt);
//       setResult(res.code || res.result || "");
//     } catch (err) {
//       alert("AI generation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl">
//         <h1 className="text-2xl font-semibold text-slate-900">
//           AI Playground
//         </h1>

//         <p className="mt-2 text-slate-600">
//           Describe a React component and let AI generate it.
//         </p>

//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows={4}
//           placeholder="Example: Create a responsive pricing card using Tailwind"
//           className="w-full mt-6 rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//         />

//         <button
//           onClick={handleGenerate}
//           disabled={loading}
//           className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//         >
//           {loading ? "Generating..." : "Generate Component"}
//         </button>

//         {result && (
//           <pre className="mt-8 bg-slate-900 text-slate-100 p-6 rounded-xl text-sm overflow-x-auto">
//             {result}
//           </pre>
//         )}
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// export default function AIPlayground() {
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [instruction, setInstruction] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [mode, setMode] = useState("generate"); // generate | customize | explain

//   const runGenerate = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);
//     setExplanation("");
//     try {
//       const res = await generateComponent(prompt);
//       setCode(res.code);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const runCustomize = async () => {
//     if (!code.trim() || !instruction.trim()) return;
//     setLoading(true);
//     setExplanation("");
//     try {
//       const res = await customizeComponent(code, instruction);
//       setCode(res.code);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const runExplain = async () => {
//     if (!code.trim()) return;
//     setLoading(true);
//     try {
//       const res = await explainComponent(code);
//       setExplanation(res.explanation);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

//         {/* LEFT PANEL */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl">
//           <h1 className="text-2xl font-semibold text-slate-900">
//             AI Playground
//           </h1>
//           <p className="mt-2 text-slate-600 text-sm">
//             Generate, customize, and understand React components using AI.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="mt-6 flex gap-2">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => setMode(m)}
//                 className={`px-4 py-2 rounded-full text-sm transition ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* INPUTS */}
//           {mode === "generate" && (
//             <textarea
//               rows="5"
//               placeholder="Describe the React component you want..."
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               className="mt-6 w-full rounded-lg border px-4 py-3"
//             />
//           )}

//           {mode === "customize" && (
//             <textarea
//               rows="4"
//               placeholder="Describe how you want to modify the component..."
//               value={instruction}
//               onChange={(e) => setInstruction(e.target.value)}
//               className="mt-6 w-full rounded-lg border px-4 py-3"
//             />
//           )}

//           {/* ACTION BUTTON */}
//           <button
//             onClick={
//               mode === "generate"
//                 ? runGenerate
//                 : mode === "customize"
//                 ? runCustomize
//                 : runExplain
//             }
//             disabled={loading}
//             className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg
//                        hover:bg-indigo-700 transition
//                        disabled:opacity-50"
//           >
//             {loading ? "Thinking..." : "Run AI"}
//           </button>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="space-y-6">

//           {/* CODE OUTPUT */}
//           <pre className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl text-sm overflow-x-auto min-h-[300px]">
//             {code || "// Generated React code will appear here"}
//           </pre>

//           {/* EXPLANATION */}
//           {explanation && (
//             <div className="bg-white rounded-2xl p-6 shadow">
//               <h3 className="font-semibold text-slate-900 mb-2">
//                 Explanation
//               </h3>
//               <p className="text-slate-600 text-sm whitespace-pre-line">
//                 {explanation}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }











// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate"); // generate | customize | explain
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) {
//           setError("Please describe the component to generate.");
//           return;
//         }

//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim()) {
//           setError("Code and instruction are required.");
//           return;
//         }

//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//       }

//       if (mode === "explain") {
//         if (!code.trim()) {
//           setError("Code is required to explain.");
//           return;
//         }

//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("AI request failed. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[540px] flex flex-col">
//           <h1 className="text-2xl font-semibold text-slate-900">
//             AI Playground
//           </h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize, and understand React components using AI.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => {
//                   setMode(m);
//                   setError("");
//                   setExplanation("");
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm transition ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* PROMPT */}
//           {(mode === "generate" || mode === "customize") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Generate a very simple React button (max 15 lines)"
//                   : "Instruction (eg: make button red and larger)"
//               }
//               className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           )}

//           {/* ERROR */}
//           {error && (
//             <p className="mt-3 text-sm text-red-600">
//               {error}
//             </p>
//           )}

//           {/* RUN BUTTON */}
//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition disabled:opacity-50"
//           >
//             {loading ? "Running AI..." : "Run AI"}
//           </button>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[540px] flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-sm text-slate-300">
//               {mode === "explain" ? "Explanation" : "Code Output"}
//             </span>

//             {mode !== "explain" && code && (
//               <button
//                 onClick={() => navigator.clipboard.writeText(code)}
//                 className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded"
//               >
//                 Copy
//               </button>
//             )}
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 overflow-auto p-5 text-sm text-slate-100">
//             {mode === "explain" ? (
//               explanation ? (
//                 <p className="whitespace-pre-line">{explanation}</p>
//               ) : (
//                 <span className="text-slate-500">
//                   Explanation will appear here
//                 </span>
//               )
//             ) : (
//               <pre className="whitespace-pre">
//                 {code || "// AI output will appear here"}
//               </pre>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }








// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= PREVIEW HTML BUILDER ================= */
// const getPreviewHTML = (componentCode) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <title>Preview</title>

//   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

//   <style>
//     body {
//       margin: 0;
//       padding: 20px;
//       font-family: system-ui, sans-serif;
//       background: #f9fafb;
//     }
//   </style>
// </head>
// <body>
//   <div id="root"></div>

//   <script type="text/babel">
//     ${componentCode}

//     const App = () => (
//       <div style={{ padding: "20px" }}>
//         <Component />
//       </div>
//     );

//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<App />);
//   </script>
// </body>
// </html>
// `;

// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate");
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPreview, setShowPreview] = useState(true);

//   /* ================= RUN AI ================= */
//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) {
//           setError("Please describe the component to generate.");
//           return;
//         }

//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//         setShowPreview(true);
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim()) {
//           setError("Code and instruction are required.");
//           return;
//         }

//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//         setShowPreview(true);
//       }

//       if (mode === "explain") {
//         if (!code.trim()) {
//           setError("Code is required to explain.");
//           return;
//         }

//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("AI request failed. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[540px] flex flex-col">
//           <h1 className="text-2xl font-semibold text-slate-900">
//             AI Playground
//           </h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize, and understand React components using AI.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => {
//                   setMode(m);
//                   setError("");
//                   setExplanation("");
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm transition ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* PROMPT */}
//           {(mode === "generate" || mode === "customize") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Generate a VERY SIMPLE React component named Component"
//                   : "Instruction (eg: make button red and larger)"
//               }
//               className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           )}

//           {/* ERROR */}
//           {error && (
//             <p className="mt-3 text-sm text-red-600">
//               {error}
//             </p>
//           )}

//           {/* RUN BUTTON */}
//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition disabled:opacity-50"
//           >
//             {loading ? "Running AI..." : "Run AI"}
//           </button>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[540px] flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-sm text-slate-300">
//               {mode === "explain"
//                 ? "Explanation"
//                 : showPreview
//                 ? "Live Preview"
//                 : "Code Output"}
//             </span>

//             {mode !== "explain" && code && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setShowPreview(false)}
//                   className={`text-xs px-3 py-1 rounded ${
//                     !showPreview
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-300"
//                   }`}
//                 >
//                   Code
//                 </button>
//                 <button
//                   onClick={() => setShowPreview(true)}
//                   className={`text-xs px-3 py-1 rounded ${
//                     showPreview
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-300"
//                   }`}
//                 >
//                   Preview
//                 </button>
//                 {!showPreview && (
//                   <button
//                     onClick={() => navigator.clipboard.writeText(code)}
//                     className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded"
//                   >
//                     Copy
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 bg-white overflow-hidden">
//             {mode === "explain" ? (
//               <div className="p-5 text-sm text-slate-800 overflow-auto h-full">
//                 {explanation || (
//                   <span className="text-slate-500">
//                     Explanation will appear here
//                   </span>
//                 )}
//               </div>
//             ) : showPreview ? (
//               <iframe
//                 title="preview"
//                 sandbox="allow-scripts"
//                 className="w-full h-full border-none"
//                 srcDoc={code ? getPreviewHTML(code) : ""}
//               />
//             ) : (
//               <pre className="p-5 text-sm text-slate-100 whitespace-pre bg-slate-900 h-full overflow-auto">
//                 {code || "// AI output will appear here"}
//               </pre>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }






// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= SAFE PREVIEW HTML ================= */
// const buildPreviewHTML = (code) => `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <title>Preview</title>

//   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

//   <style>
//     body {
//       margin: 0;
//       padding: 20px;
//       background: #f9fafb;
//       font-family: system-ui, sans-serif;
//     }
//     .error {
//       color: red;
//       white-space: pre-wrap;
//     }
//   </style>
// </head>
// <body>
//   <div id="root"></div>

//   <script type="text/babel">
//     try {
//       ${code}

//       // 🔥 Auto-detect exported component
//       const Component =
//         typeof Component !== "undefined"
//           ? Component
//           : typeof Button !== "undefined"
//           ? Button
//           : typeof App !== "undefined"
//           ? App
//           : null;

//       if (!Component) {
//         throw new Error("No React component found. Use 'Component' or 'Button'.");
//       }

//       ReactDOM.createRoot(document.getElementById("root")).render(
//         <Component />
//       );
//     } catch (err) {
//       document.getElementById("root").innerHTML =
//         '<pre class="error">' + err.message + '</pre>';
//     }
//   </script>
// </body>
// </html>
// `;

// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate");
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [view, setView] = useState("preview"); // preview | code

//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) return setError("Prompt required");
//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//         setView("preview");
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim())
//           return setError("Code & instruction required");

//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//         setView("preview");
//       }

//       if (mode === "explain") {
//         if (!code.trim()) return setError("Code required");
//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch {
//       setError("AI request failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* LEFT */}
//         <div className="bg-white rounded-2xl p-8 shadow-xl h-[540px] flex flex-col">
//           <h1 className="text-2xl font-semibold">AI Playground</h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize & explain React components
//           </p>

//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => {
//                   setMode(m);
//                   setError("");
//                   setExplanation("");
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600"
//                 }`}
//               >
//                 {m}
//               </button>
//             ))}
//           </div>

//           {(mode !== "explain") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Generate a simple React button component"
//                   : "Instruction (eg: add hover animation)"
//               }
//               className="mt-6 flex-1 resize-none border rounded-lg px-4 py-3"
//             />
//           )}

//           {error && <p className="text-red-600 mt-2">{error}</p>}

//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
//           >
//             {loading ? "Running..." : "Run AI"}
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[540px] flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
//             <span className="text-slate-300 text-sm">
//               {mode === "explain" ? "Explanation" : view === "preview" ? "Live Preview" : "Code"}
//             </span>

//             {mode !== "explain" && code && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setView("code")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "code" ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300"
//                   }`}
//                 >
//                   Code
//                 </button>
//                 <button
//                   onClick={() => setView("preview")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "preview" ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300"
//                   }`}
//                 >
//                   Preview
//                 </button>
//                 {view === "code" && (
//                   <button
//                     onClick={() => navigator.clipboard.writeText(code)}
//                     className="px-3 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600"
//                   >
//                     Copy
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 overflow-hidden">
//             {mode === "explain" ? (
//               <div className="p-5 text-slate-100 overflow-auto">
//                 {explanation || "Explanation will appear here"}
//               </div>
//             ) : view === "preview" ? (
//               <iframe
//                 title="preview"
//                 sandbox="allow-scripts"
//                 className="w-full h-full bg-white"
//                 srcDoc={code ? buildPreviewHTML(code) : ""}
//               />
//             ) : (
//               <pre className="p-5 text-slate-100 overflow-auto h-full">
//                 {code || "// AI output here"}
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// const buildPreviewHTML = (code) => {
//   if (!code) return "";

//   const sanitize = (src) =>
//     src
//       // remove imports
//       .replace(/^import\s.+?;$/gm, "")
//       // remove export default
//       .replace(/export\s+default\s+/g, "")
//       // remove markdown fences
//       .replace(/```[\s\S]*?```/g, "")
//       // escape template literals
//       .replace(/`/g, "\\`")
//       // escape ${}
//       .replace(/\$\{/g, "\\${");

//   const safeCode = sanitize(code);

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
//       ${safeCode}

//       const PreviewComponent =
//         typeof Button !== "undefined"
//           ? Button
//           : typeof Component !== "undefined"
//           ? Component
//           : typeof App !== "undefined"
//           ? App
//           : null;

//       if (!PreviewComponent) {
//         throw new Error("No component found (Button / Component / App)");
//       }

//       ReactDOM.createRoot(
//         document.getElementById("root")
//       ).render(<PreviewComponent />);
//     } catch (err) {
//       document.getElementById("root").innerHTML =
//         '<pre class="error">' + err.message + '</pre>';
//     }
//   </script>
// </body>
// </html>
// `;
// };

// /**
//  * 🔒 Safe preview builder
//  * Wraps JSX correctly so Babel never crashes
// //  */
// // const buildPreviewHTML = (code) => `
// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="UTF-8" />
// //   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// //   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// //   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// //   <style>
// //     body {
// //       margin: 0;
// //       padding: 20px;
// //       font-family: system-ui;
// //       background: #ffffff;
// //     }
// //     .error {
// //       color: red;
// //       white-space: pre-wrap;
// //       font-family: monospace;
// //     }
// //   </style>
// // </head>
// // <body>
// //   <div id="root"></div>

// //   <script type="text/babel">
// //     try {
// //       ${code.replace(/export default/g, "")}

// //       const Component =
// //         typeof Component !== "undefined"
// //           ? Component
// //           : typeof Button !== "undefined"
// //           ? Button
// //           : typeof App !== "undefined"
// //           ? App
// //           : null;

// //       if (!Component) {
// //         throw new Error("No component found (Component / Button / App)");
// //       }

// //       ReactDOM.createRoot(document.getElementById("root")).render(
// //         <Component />
// //       );
// //     } catch (err) {
// //       document.getElementById("root").innerHTML =
// //         '<pre class="error">' + err.message + '</pre>';
// //     }
// //   </script>
// // </body>
// // </html>
// // `;



// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate"); // generate | customize | explain
//   const [view, setView] = useState("code"); // code | preview
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) {
//           setError("Please describe the component.");
//           return;
//         }
//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//         setView("code");
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim()) {
//           setError("Code and instruction required.");
//           return;
//         }
//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//         setView("code");
//       }

//       if (mode === "explain") {
//         if (!code.trim()) {
//           setError("Code required to explain.");
//           return;
//         }
//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("AI request failed. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[560px] flex flex-col">
//           <h1 className="text-2xl font-semibold">AI Playground</h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize, and understand React components.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => {
//                   setMode(m);
//                   setError("");
//                   setExplanation("");
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* PROMPT */}
//           {(mode === "generate" || mode === "customize") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Generate a simple React button (max 15 lines)"
//                   : "Instruction (eg: make button red & larger)"
//               }
//               className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//             />
//           )}

//           {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg disabled:opacity-50"
//           >
//             {loading ? "Running AI..." : "Run AI"}
//           </button>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[560px] flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-sm text-slate-300">
//               {mode === "explain" ? "Explanation" : view === "preview" ? "Live Preview" : "Code"}
//             </span>

//             {mode !== "explain" && code && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setView("code")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "code" ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Code
//                 </button>
//                 <button
//                   onClick={() => setView("preview")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "preview" ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => navigator.clipboard.writeText(code)}
//                   className="px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded"
//                 >
//                   Copy
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 overflow-auto p-5 text-sm text-slate-100 bg-slate-900">
//             {mode === "explain" ? (
//               explanation ? (
//                 <p className="whitespace-pre-line">{explanation}</p>
//               ) : (
//                 <span className="text-slate-500">Explanation will appear here</span>
//               )
//             ) : view === "preview" ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="whitespace-pre">{code || "// AI output will appear here"}</pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /* ================= SAFE PREVIEW BUILDER ================= */
// const buildPreviewHTML = (code) => {
//   if (!code) return "";

//   const sanitize = (src) =>
//     src
//       .replace(/```[\s\S]*?```/g, "")        // remove ``` fences
//       .replace(/^import\s.+?;$/gm, "")      // remove imports
//       .replace(/export\s+default\s+/g, "") // remove export default
//       .replace(/`/g, "\\`")                 // escape template strings
//       .replace(/\$\{/g, "\\${");

//   const safeCode = sanitize(code);

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
//       background: #ffffff;
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
//       ${safeCode}

//       const PreviewComponent =
//         typeof Button !== "undefined"
//           ? Button
//           : typeof Component !== "undefined"
//           ? Component
//           : typeof App !== "undefined"
//           ? App
//           : Object.values(window).find(
//               (v) =>
//                 typeof v === "function" &&
//                 /^[A-Z]/.test(v.name)
//             ) || null;

//       if (!PreviewComponent) {
//         throw new Error("No component found (Button / Component / App)");
//       }

//       ReactDOM.createRoot(
//         document.getElementById("root")
//       ).render(<PreviewComponent />);
//     } catch (err) {
//       document.getElementById("root").innerHTML =
//         '<pre class="error">' + err.message + '</pre>';
//     }
//   </script>
// </body>
// </html>
// `;
// };
// /* ======================================================= */

// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate"); // generate | customize | explain
//   const [view, setView] = useState("code"); // code | preview
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) {
//           setError("Please describe the component.");
//           return;
//         }
//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//         setView("code");
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim()) {
//           setError("Code and instruction required.");
//           return;
//         }
//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//         setView("code");
//       }

//       if (mode === "explain") {
//         if (!code.trim()) {
//           setError("Code required to explain.");
//           return;
//         }
//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("AI request failed. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[560px] flex flex-col">
//           <h1 className="text-2xl font-semibold">AI Playground</h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize, and understand React components.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => {
//                   setMode(m);
//                   setError("");
//                   setExplanation("");
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {(mode === "generate" || mode === "customize") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Generate a simple React button (max 15 lines)"
//                   : "Instruction (eg: make button red & larger)"
//               }
//               className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//             />
//           )}

//           {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg disabled:opacity-50"
//           >
//             {loading ? "Running AI..." : "Run AI"}
//           </button>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[560px] flex flex-col overflow-hidden">
//           <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-sm text-slate-300">
//               {mode === "explain"
//                 ? "Explanation"
//                 : view === "preview"
//                 ? "Live Preview"
//                 : "Code"}
//             </span>

//             {mode !== "explain" && code && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setView("code")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "code"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Code
//                 </button>
//                 <button
//                   onClick={() => setView("preview")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "preview"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => navigator.clipboard.writeText(code)}
//                   className="px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded"
//                 >
//                   Copy
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="flex-1 overflow-auto p-5 text-sm text-slate-100">
//             {mode === "explain" ? (
//               explanation ? (
//                 <p className="whitespace-pre-line">{explanation}</p>
//               ) : (
//                 <span className="text-slate-500">Explanation will appear here</span>
//               )
//             ) : view === "preview" ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="whitespace-pre">
//                 {code || "// AI output will appear here"}
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /**
//  * 🔒 SAFE LIVE PREVIEW BUILDER
//  * - Removes imports/exports
//  * - Removes ``` fences
//  * - Prevents Babel crashes
//  * - Works with Button / Component / App
//  */
// const sanitizeCode = (code = "") => {
//   return code
//     // remove markdown blocks
//     .replace(/```[\s\S]*?```/g, "")
//     // remove imports
//     .replace(/^import\s.+?;$/gm, "")
//     // remove export default
//     .replace(/export\s+default\s+/g, "")
//     // ❗ convert template literals to strings
//     .replace(/`/g, '"')
//     // escape ${} so JS doesn’t interpolate
//     .replace(/\$\{/g, "\\${");
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);

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
//       background: #fff;
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

//       if (!PreviewComponent) {
//         throw new Error("No previewable component found");
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


// // const buildPreviewHTML = (rawCode = "") => {
// //   if (!rawCode.trim()) return "";

// //   const code = rawCode
// //     .replace(/```[\s\S]*?```/g, "") // remove ``` blocks
// //     .replace(/^import\s.+?;$/gm, "") // remove imports
// //     .replace(/export\s+default\s+/g, "") // remove export default
// //     .replace(/`/g, "\\`") // escape template literals
// //     .replace(/\$\{/g, "\\${"); // escape interpolations

// //   return `
// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <meta charset="UTF-8" />
// //   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// //   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// //   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// //   <style>
// //     body {
// //       margin: 0;
// //       padding: 20px;
// //       font-family: system-ui;
// //       background: white;
// //     }
// //     .error {
// //       color: red;
// //       white-space: pre-wrap;
// //       font-family: monospace;
// //     }
// //   </style>
// // </head>
// // <body>
// //   <div id="root"></div>

// //   <script type="text/babel">
// //     try {
// //       ${code}

// //       const PreviewComponent =
// //         typeof Button !== "undefined"
// //           ? Button
// //           : typeof Component !== "undefined"
// //           ? Component
// //           : typeof App !== "undefined"
// //           ? App
// //           : Object.values(window).find(
// //               (v) => typeof v === "function" && /^[A-Z]/.test(v.name)
// //             );

// //       if (!PreviewComponent) {
// //         throw new Error("No component found (Button / Component / App)");
// //       }

// //       ReactDOM.createRoot(
// //         document.getElementById("root")
// //       ).render(<PreviewComponent />);
// //     } catch (err) {
// //       document.getElementById("root").innerHTML =
// //         "<pre class='error'>" + err.message + "</pre>";
// //     }
// //   </script>
// // </body>
// // </html>
// // `;
// // };

// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate"); // generate | customize | explain
//   const [view, setView] = useState("code"); // code | preview
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) {
//           setError("Please describe the component.");
//           return;
//         }
//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//         setView("code");
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim()) {
//           setError("Code and instruction required.");
//           return;
//         }
//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//         setView("code");
//       }

//       if (mode === "explain") {
//         if (!code.trim()) {
//           setError("Code required to explain.");
//           return;
//         }
//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("AI request failed. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[560px] flex flex-col">
//           <h1 className="text-2xl font-semibold">AI Playground</h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize, and understand React components.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => {
//                   setMode(m);
//                   setError("");
//                   setExplanation("");
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm transition ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* PROMPT */}
//           {(mode === "generate" || mode === "customize") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Generate a simple React button (max 15 lines)"
//                   : "Instruction (eg: make button red & larger)"
//               }
//               className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//             />
//           )}

//           {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg disabled:opacity-50"
//           >
//             {loading ? "Running AI..." : "Run AI"}
//           </button>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[560px] flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-sm text-slate-300">
//               {mode === "explain"
//                 ? "Explanation"
//                 : view === "preview"
//                 ? "Live Preview"
//                 : "Code"}
//             </span>

//             {mode !== "explain" && code && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setView("code")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "code"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Code
//                 </button>
//                 <button
//                   onClick={() => setView("preview")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "preview"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => navigator.clipboard.writeText(code)}
//                   className="px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded"
//                 >
//                   Copy
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 overflow-auto p-5 text-sm text-slate-100 bg-slate-900">
//             {mode === "explain" ? (
//               explanation ? (
//                 <p className="whitespace-pre-line">{explanation}</p>
//               ) : (
//                 <span className="text-slate-500">
//                   Explanation will appear here
//                 </span>
//               )
//             ) : view === "preview" ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="whitespace-pre">
//                 {code || "// AI output will appear here"}
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /**
//  * 🔒 SAFE LIVE PREVIEW BUILDER (FIXED)
//  * ✔ strips imports / exports
//  * ✔ strips markdown fences
//  * ✔ preserves template literals (NO replacement)
//  * ✔ uses register(Component) pattern
//  * ✔ prevents Babel crashes
//  */
// const sanitizeCode = (code = "") => {
//   return code
//     // remove ``` blocks
//     .replace(/```[\s\S]*?```/g, "")
//     // remove imports
//     .replace(/^import\s.+?;$/gm, "")
//     // remove export default
//     .replace(/export\s+default\s+/g, "")
//     .trim();
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);

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

//       if (!PreviewComponent) {
//         throw new Error("No previewable component found. Use register(Component).");
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

// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate"); // generate | customize | explain
//   const [view, setView] = useState("code"); // code | preview
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) {
//           setError("Please describe the component.");
//           return;
//         }
//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//         setView("code");
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim()) {
//           setError("Code and instruction required.");
//           return;
//         }
//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//         setView("code");
//       }

//       if (mode === "explain") {
//         if (!code.trim()) {
//           setError("Code required to explain.");
//           return;
//         }
//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("AI request failed. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[560px] flex flex-col">
//           <h1 className="text-2xl font-semibold">AI Playground</h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize, and understand React components.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => {
//                   setMode(m);
//                   setError("");
//                   setExplanation("");
//                 }}
//                 className={`px-4 py-2 rounded-full text-sm transition ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* PROMPT */}
//           {(mode === "generate" || mode === "customize") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Generate a simple React button (max 15 lines)"
//                   : "Instruction (eg: make button red & larger)"
//               }
//               className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//             />
//           )}

//           {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg disabled:opacity-50"
//           >
//             {loading ? "Running AI..." : "Run AI"}
//           </button>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[560px] flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-sm text-slate-300">
//               {mode === "explain"
//                 ? "Explanation"
//                 : view === "preview"
//                 ? "Live Preview"
//                 : "Code"}
//             </span>

//             {mode !== "explain" && code && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setView("code")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "code"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Code
//                 </button>
//                 <button
//                   onClick={() => setView("preview")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "preview"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => navigator.clipboard.writeText(code)}
//                   className="px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded"
//                 >
//                   Copy
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 overflow-auto p-5 text-sm text-slate-100 bg-slate-900">
//             {mode === "explain" ? (
//               explanation ? (
//                 <p className="whitespace-pre-line">{explanation}</p>
//               ) : (
//                 <span className="text-slate-500">
//                   Explanation will appear here
//                 </span>
//               )
//             ) : view === "preview" ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <pre className="whitespace-pre">
//                 {code || "// AI output will appear here"}
//               </pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } from "../services/aiApi";

// /**
//  * 🔒 SAFE LIVE PREVIEW BUILDER
//  */
// const sanitizeCode = (code = "") => {
//   return code
//     .replace(/```[\s\S]*?```/g, "")
//     .replace(/^import\s.+?;$/gm, "")
//     .replace(/export\s+default\s+/g, "")
//     .trim();
// };

// const buildPreviewHTML = (rawCode = "") => {
//   if (!rawCode.trim()) return "";

//   const safeCode = sanitizeCode(rawCode);

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

//       if (!PreviewComponent) {
//         throw new Error("No previewable component found. Use register(Component).");
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

// export default function AIPlayground() {
//   const [mode, setMode] = useState("generate"); // generate | customize | explain
//   const [view, setView] = useState("code"); // code | preview
//   const [prompt, setPrompt] = useState("");
//   const [code, setCode] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Always switch back to code view when mode changes
//   useEffect(() => {
//     setView("code");
//     setError("");
//     setExplanation("");
//   }, [mode]);

//   const runAI = async () => {
//     setError("");
//     setExplanation("");

//     try {
//       setLoading(true);

//       if (mode === "generate") {
//         if (!prompt.trim()) {
//           setError("Please describe the component.");
//           return;
//         }
//         const res = await generateComponent(prompt);
//         setCode(res.code || res);
//       }

//       if (mode === "customize") {
//         if (!code.trim() || !prompt.trim()) {
//           setError("Both code and instruction are required.");
//           return;
//         }
//         const res = await customizeComponent(code, prompt);
//         setCode(res.code);
//       }

//       if (mode === "explain") {
//         if (!code.trim()) {
//           setError("Paste code to explain.");
//           return;
//         }
//         const res = await explainComponent(code);
//         setExplanation(res.explanation);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("AI request failed. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* ================= LEFT PANEL ================= */}
//         <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[560px] flex flex-col">
//           <h1 className="text-2xl font-semibold">AI Playground</h1>
//           <p className="text-sm text-slate-600 mt-1">
//             Generate, customize, and understand React components.
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex gap-3 mt-6">
//             {["generate", "customize", "explain"].map((m) => (
//               <button
//                 key={m}
//                 onClick={() => setMode(m)}
//                 className={`px-4 py-2 rounded-full text-sm transition ${
//                   mode === m
//                     ? "bg-indigo-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                 }`}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* PROMPT */}
//           {(mode === "generate" || mode === "customize") && (
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder={
//                 mode === "generate"
//                   ? "Describe the React component you want"
//                   : "Instruction (e.g. make button red, add hover effect)"
//               }
//               className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//             />
//           )}

//           {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

//           <button
//             onClick={runAI}
//             disabled={loading}
//             className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg disabled:opacity-50"
//           >
//             {loading ? "Running AI..." : "Run AI"}
//           </button>
//         </div>

//         {/* ================= RIGHT PANEL ================= */}
//         <div className="bg-slate-900 rounded-2xl shadow-xl h-[560px] flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
//             <span className="text-sm text-slate-300">
//               {mode === "explain"
//                 ? "Explanation"
//                 : view === "preview"
//                 ? "Live Preview"
//                 : "Code Editor"}
//             </span>

//             {mode !== "explain" && code && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setView("code")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "code"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Code
//                 </button>
//                 <button
//                   onClick={() => setView("preview")}
//                   className={`px-3 py-1 text-xs rounded ${
//                     view === "preview"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-slate-700 text-slate-200"
//                   }`}
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => navigator.clipboard.writeText(code)}
//                   className="px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded"
//                 >
//                   Copy
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <div className="flex-1 overflow-auto p-5 bg-slate-900">
//             {mode === "explain" ? (
//               explanation ? (
//                 <p className="whitespace-pre-line text-slate-100">
//                   {explanation}
//                 </p>
//               ) : (
//                 <span className="text-slate-500">
//                   Explanation will appear here
//                 </span>
//               )
//             ) : view === "preview" ? (
//               <iframe
//                 title="Live Preview"
//                 sandbox="allow-scripts allow-same-origin"
//                 srcDoc={buildPreviewHTML(code)}
//                 className="w-full h-full bg-white rounded"
//               />
//             ) : (
//               <textarea
//                 value={code}
//                 onChange={(e) => setCode(e.target.value)}
//                 placeholder="// Paste or edit your React component code here"
//                 className="w-full h-full bg-slate-900 text-slate-100 resize-none outline-none font-mono text-sm"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import {
  generateComponent,
  customizeComponent,
  explainComponent,
} from "../services/aiApi";

/* 🔒 SAFE LIVE PREVIEW BUILDER */
const sanitizeCode = (code = "") => {
  return code
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^import\s.+?;$/gm, "")
    .replace(/export\s+default\s+/g, "")
    .trim();
};

const buildPreviewHTML = (rawCode = "") => {
  if (!rawCode.trim()) return "";

  const safeCode = sanitizeCode(rawCode);

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
if (!PreviewComponent) {
throw new Error("No previewable component found. Use register(Component).");
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

export default function AIPlayground() {
  const [mode, setMode] = useState("generate");
  const [view, setView] = useState("code");
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false); // 🔥 NEW

  useEffect(() => {
    setView("code");
    setError("");
    setExplanation("");
  }, [mode]);

  const runAI = async () => {
    setError("");
    setExplanation("");

    try {
      setLoading(true);

      if (mode === "generate") {
        if (!prompt.trim()) {
          setError("Please describe the component.");
          return;
        }
        const res = await generateComponent(prompt);
        setCode(res.code || res);
      }

      if (mode === "customize") {
        if (!code.trim() || !prompt.trim()) {
          setError("Both code and instruction are required.");
          return;
        }
        const res = await customizeComponent(code, prompt);
        setCode(res.code);
      }

      if (mode === "explain") {
        if (!code.trim()) {
          setError("Paste code to explain.");
          return;
        }
        const res = await explainComponent(code);
        setExplanation(res.explanation);
      }
    } catch (err) {
      console.error(err);
      setError("AI request failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT PANEL */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl h-[560px] flex flex-col">
          <h1 className="text-2xl font-semibold">AI Playground</h1>
          <p className="text-sm text-slate-600 mt-1">
            Generate, customize, and understand React components.
          </p>

          <div className="flex gap-3 mt-6">
            {["generate", "customize", "explain"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-4 py-2 rounded-full text-sm transition duration-200 hover:scale-105 ${
                  mode === m
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          {(mode === "generate" || mode === "customize") && (
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={
                mode === "generate"
                  ? "Describe the React component you want"
                  : "Instruction (e.g. make button red, add hover effect)"
              }
              className="mt-6 flex-1 resize-none rounded-lg border px-4 py-3 focus:ring-2 focus:ring-indigo-500"
            />
          )}

          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

          <button
            onClick={runAI}
            disabled={loading}
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition duration-200 hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Running AI..." : "Run AI"}
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-slate-900 rounded-2xl shadow-xl h-[560px] flex flex-col overflow-hidden relative">

          {copied && (
            <div className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded shadow">
              Copied!
            </div>
          )}

          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
            <span className="text-sm text-slate-300">
              {mode === "explain"
                ? "Explanation"
                : view === "preview"
                ? "Live Preview"
                : "Code Editor"}
            </span>

            {mode !== "explain" && code && (
              <div className="flex gap-2">
                <button
                  onClick={() => setView("code")}
                  className={`px-3 py-1 text-xs rounded transition duration-200 hover:scale-105 ${
                    view === "code"
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                >
                  Code
                </button>
                <button
                  onClick={() => setView("preview")}
                  className={`px-3 py-1 text-xs rounded transition duration-200 hover:scale-105 ${
                    view === "preview"
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 text-xs bg-slate-700 text-white rounded transition duration-200 hover:bg-slate-600 hover:scale-105"
                >
                  Copy
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-auto p-5 bg-slate-900">
            {mode === "explain" ? (
              explanation ? (
                <p className="whitespace-pre-line text-slate-100">
                  {explanation}
                </p>
              ) : (
                <span className="text-slate-500">
                  Explanation will appear here
                </span>
              )
            ) : view === "preview" ? (
              <iframe
                title="Live Preview"
                sandbox="allow-scripts allow-same-origin"
                srcDoc={buildPreviewHTML(code)}
                className="w-full h-full bg-white rounded"
              />
            ) : (
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="// Paste or edit your React component code here"
                className="w-full h-full bg-slate-900 text-slate-100 resize-none outline-none font-mono text-sm"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
