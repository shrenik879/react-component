// export default function SubmitComponent() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl">
//         <h1 className="text-2xl font-semibold text-slate-900">
//           Submit New Component
//         </h1>
//         <p className="mt-2 text-sm text-slate-600">
//           Share clean, reusable React components with the community.
//         </p>

//         <form className="mt-6 space-y-5">
//           {/* Component name */}
//           <input
//             type="text"
//             placeholder="Component name"
//             className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           {/* Description */}
//           <textarea
//             placeholder="Short description (what does this component do?)"
//             rows="3"
//             className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           {/* CODE FIELD (THIS IS THE KEY PART) */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-slate-700">
//               React Component Code
//             </label>

//             <textarea
//               placeholder={`export default function Button() {
//   return (
//     <button className="px-4 py-2 bg-indigo-600 text-white rounded">
//       Click me
//     </button>
//   );
// }`}
//               rows="12"
//               className="w-full font-mono text-sm rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition"
//           >
//             Submit for review
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";

// export default function SubmitComponent() {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [code, setCode] = useState("");
//   const [price, setPrice] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await apiRequest("/components", "POST", {
//         title,
//         category,
//         code,
//         price,
//       });

//       // ✅ IMPORTANT: redirect after success
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message || "Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">
//         <h1 className="text-2xl font-semibold mb-6">
//           Submit New Component
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             className="w-full border rounded-lg px-4 py-3"
//             placeholder="Component title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />

//           <input
//             className="w-full border rounded-lg px-4 py-3"
//             placeholder="Category (Buttons, Cards...)"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           />

//           <textarea
//             className="w-full border rounded-lg px-4 py-3 font-mono text-sm"
//             placeholder="Component code"
//             rows={6}
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             required
//           />

//           <input
//             type="number"
//             className="w-full border rounded-lg px-4 py-3"
//             placeholder="Price (0 for free)"
//             value={price}
//             onChange={(e) => setPrice(Number(e.target.value))}
//           />

//           <button
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg"
//           >
//             {loading ? "Submitting..." : "Submit for review"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

export default function SubmitComponent() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiRequest("/components", "POST", {
        title,
        category,
        code,
        price,
      });

      alert("Component submitted for approval");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl">

        <h1 className="text-2xl font-semibold text-slate-900">
          Submit New Component
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Share clean, reusable React components.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Component name"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Category (Buttons, Cards, Forms...)"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="12"
            required
            placeholder={`export default function Button() {
  return (
    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
      Click me
    </button>
  );
}`}
            className="w-full font-mono text-sm rounded-lg border px-4 py-3"
          />

          {/* <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            min="0"
            placeholder="Price (0 = free)"
            className="w-full rounded-lg border px-4 py-3"
          /> */}

          <button
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition"
          >
            {loading ? "Submitting..." : "Submit for review"}
          </button>
        </form>
      </div>
    </div>
  );
}
