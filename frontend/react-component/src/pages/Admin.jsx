// import { useEffect, useState } from "react";
// import {
//   getPendingComponents,
//   approveComponent,
//   rejectComponent,
// } from "../services/adminApi";

// export default function Admin() {
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [actionLoading, setActionLoading] = useState(null);

//   const fetchPending = async () => {
//     try {
//       const data = await getPendingComponents();
//       setComponents(data);
//     } catch (err) {
//       console.error("Failed to load pending components", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPending();
//   }, []);

//   const handleApprove = async (id) => {
//     setActionLoading(id);
//     await approveComponent(id);
//     fetchPending();
//     setActionLoading(null);
//   };

//   const handleReject = async (id) => {
//     setActionLoading(id);
//     await rejectComponent(id);
//     fetchPending();
//     setActionLoading(null);
//   };

//   if (loading) {
//     return <div className="p-20 text-center">Loading…</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-20">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-semibold text-slate-900">
//           Admin Approval Panel
//         </h1>
//         <p className="mt-2 text-slate-600">
//           Review and approve submitted components.
//         </p>

//         {components.length === 0 ? (
//           <div className="mt-12 text-center text-slate-600">
//             No pending components 🎉
//           </div>
//         ) : (
//           <div className="mt-10 grid gap-8">
//             {components.map((c) => (
//               <div
//                 key={c._id}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-slate-900">
//                       {c.title}
//                     </h3>
//                     <p className="mt-1 text-sm text-slate-600">
//                       Category: {c.category}
//                     </p>
//                   </div>

//                   <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
//                     Pending
//                   </span>
//                 </div>

//                 {/* CODE PREVIEW */}
//                 <pre className="mt-4 bg-slate-900 text-slate-100 rounded-xl p-4 text-sm overflow-x-auto">
//                   {c.code}
//                 </pre>

//                 {/* ACTIONS */}
//                 <div className="mt-6 flex gap-4">
//                   <button
//                     onClick={() => handleApprove(c._id)}
//                     disabled={actionLoading === c._id}
//                     className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
//                   >
//                     Approve
//                   </button>

//                   <button
//                     onClick={() => handleReject(c._id)}
//                     disabled={actionLoading === c._id}
//                     className="border border-slate-300 hover:bg-slate-50 px-6 py-2 rounded-lg"
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import {
  getPendingComponents,
  approveComponent,
  rejectComponent,
} from "../services/adminApi";

export default function Admin() {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  const fetchPending = async () => {
    try {
      const data = await getPendingComponents();
      setComponents(data);
    } catch (err) {
      console.error("Failed to load pending components", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const handleApprove = async (id) => {
    setActionLoading(id);
    await approveComponent(id);
    fetchPending();
    setActionLoading(null);
  };

  const handleReject = async (id) => {
    setActionLoading(id);
    await rejectComponent(id);
    fetchPending();
    setActionLoading(null);
  };

  if (loading) {
    return <div className="p-20 text-center">Loading…</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900">
          Admin Approval Panel
        </h1>
        <p className="mt-2 text-slate-600">
          Review and approve submitted components.
        </p>

        {components.length === 0 ? (
          <div className="mt-12 text-center text-slate-600">
            No pending components 🎉
          </div>
        ) : (
          <div className="mt-10 grid gap-8">
            {components.map((c) => {
              // 🔥 IMPORTANT FIX
              const previewCode = c.draftCode || c.code;
              const isEdit = !!c.draftCode;

              return (
                <div
                  key={c._id}
                  className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Category: {c.category}
                      </p>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                      {isEdit ? "Edit Pending" : "New Submission"}
                    </span>
                  </div>

                  {/* 🔥 CODE PREVIEW (FIXED) */}
                  <pre className="mt-4 bg-slate-900 text-slate-100 rounded-xl p-4 text-sm overflow-x-auto">
                    {previewCode}
                  </pre>

                  {/* ACTIONS */}
                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() => handleApprove(c._id)}
                      disabled={actionLoading === c._id}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(c._id)}
                      disabled={actionLoading === c._id}
                      className="border border-slate-300 hover:bg-slate-50 px-6 py-2 rounded-lg"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
 