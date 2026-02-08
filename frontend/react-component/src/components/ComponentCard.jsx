// import { useAuth } from "../context/AuthContext";
// import { apiRequest } from "../services/api";

// export default function ComponentCard({ component }) {
//   const { isAuthenticated } = useAuth();

//   const handleLike = async () => {
//     if (!isAuthenticated) {
//       alert("Please sign in to like components");
//       return;
//     }

//     await apiRequest(`/likes/${component._id}`, "POST");
//   };

//   const handleRate = async (value) => {
//     if (!isAuthenticated) {
//       alert("Please sign in to rate components");
//       return;
//     }

//     await apiRequest(`/ratings/${component._id}`, "POST", {
//       value,
//     });
//   };

//   return (
//     <div className="rounded-xl bg-white/80 backdrop-blur p-6 shadow">
//       <h3 className="font-semibold">{component.title}</h3>

//       <div className="flex items-center gap-3 mt-3">
//         <button onClick={handleLike}>❤️ {component.likesCount}</button>
//         <span>⭐ {component.avgRating || 0}</span>
//       </div>

//       <div className="mt-3 flex gap-1">
//         {[1, 2, 3, 4, 5].map((v) => (
//           <button key={v} onClick={() => handleRate(v)}>
//             ⭐
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }




// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// export default function ComponentCard({ component, onRefresh }) {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();

//   const handleLike = async () => {
//     if (!isAuthenticated) {
//       navigate("/login");
//       return;
//     }
//     await apiRequest(`/like/${component._id}`, "POST");
//     onRefresh();
//   };

//   const rating = Math.round(component.avgRating || 0);

//   return (
//     <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow hover:shadow-xl transition">
//       <h3 className="text-lg font-semibold">{component.title}</h3>

//       {/* Likes & Rating */}
//       <div className="flex items-center gap-4 mt-3">
//         <button onClick={handleLike} className="flex items-center gap-1">
//           ❤️ {component.likesCount}
//         </button>

//         <div className="flex gap-1">
//           {[1,2,3,4,5].map((star) => (
//             <span
//               key={star}
//               className={star <= rating ? "text-yellow-400" : "text-slate-300"}
//             >
//               ★
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* View Button */}
//       <button
//         onClick={() => navigate(`/components/${component._id}`)}
//         className="mt-4 text-indigo-600 font-medium"
//       >
//         View →
//       </button>
//     </div>
//   );
// }



// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// export default function ComponentCard({ component, onRefresh }) {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();

//   const handleLike = async (e) => {
//     e.stopPropagation(); // 🛑 safety for future clickable cards

//     if (!isAuthenticated) {
//       navigate("/login");
//       return;
//     }

//     try {
//       await apiRequest(`/like/${component._id}`, "POST");
//       onRefresh && onRefresh(); // ✅ SAFE CALL
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // display avg rating (rounded for stars)
//   const rating = Math.round(component.avgRating || 0);

//   return (
//     <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow hover:shadow-xl transition">
//       <h3 className="text-lg font-semibold text-slate-900">
//         {component.title}
//       </h3>

//       {/* Likes & Rating */}
//       <div className="flex items-center gap-4 mt-3">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-1 hover:text-pink-600 transition"
//         >
//           ❤️ {component.likesCount || 0}
//         </button>

//         <div className="flex gap-1">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <span
//               key={star}
//               className={`text-lg ${
//                 star <= rating ? "text-yellow-400" : "text-slate-300"
//               }`}
//             >
//               ★
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* View details */}
//       <button
//         onClick={() => navigate(`/components/${component._id}`)}
//         className="mt-4 text-indigo-600 font-medium hover:underline"
//       >
//         View →
//       </button>
//     </div>
//   );
// }


// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import {
//   likeComponent,
//   rateComponent,
// } from "../services/componentApi";

// export default function ComponentCard({ component, onRefresh }) {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();

//   const handleLike = async (e) => {
//     e.stopPropagation();

//     if (!isAuthenticated) {
//       navigate("/login");
//       return;
//     }

//     await likeComponent(component._id);
//     onRefresh && onRefresh();
//   };

//   const handleRate = async (e, value) => {
//     e.stopPropagation();

//     if (!isAuthenticated) {
//       navigate("/login");
//       return;
//     }

//     await rateComponent(component._id, value);
//     onRefresh && onRefresh();
//   };

//   const rating = Math.round(component.avgRating || 0);

//   return (
//     <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow hover:shadow-xl transition">
//       <h3 className="text-lg font-semibold text-slate-900">
//         {component.title}
//       </h3>

//       <p className="mt-1 text-sm text-slate-500">
//         {component.category}
//       </p>

//       {/* LIKE + RATING */}
//       <div className="flex items-center gap-4 mt-4">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-1 hover:text-pink-600"
//         >
//           ❤️ {component.likesCount || 0}
//         </button>

//         <div className="flex gap-1">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <button
//               key={star}
//               onClick={(e) => handleRate(e, star)}
//               className={`text-lg ${
//                 star <= rating
//                   ? "text-yellow-400"
//                   : "text-slate-300"
//               }`}
//             >
//               ★
//             </button>
//           ))}
//           <span className="ml-1 text-sm text-slate-500">
//             {component.avgRating?.toFixed(1) || "0.0"}
//           </span>
//         </div>
//       </div>

//       <button
//         onClick={() => navigate(`/components/${component._id}`)}
//         className="mt-5 text-indigo-600 font-medium hover:underline"
//       >
//         View →
//       </button>
//     </div>
//   );
// }
  

// import { useNavigate } from "react-router-dom";

// export default function ComponentCard({ component }) {
//   const navigate = useNavigate();

//   const avgRating = component.avgRating || 0;
//   const roundedRating = Math.round(avgRating);

//   return (
//     <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow hover:shadow-xl transition duration-300">

//       {/* TITLE */}
//       <h3 className="text-lg font-semibold text-slate-900">
//         {component.title}
//       </h3>

//       <p className="mt-1 text-sm text-slate-500">
//         {component.category}
//       </p>

//       {/* STATS SECTION */}
//       <div className="flex items-center justify-between mt-4">

//         {/* ❤️ Total Likes */}
//         <div className="flex items-center gap-1 text-pink-600 font-medium">
//           ❤️ {component.likesCount || 0}
//         </div>

//         {/* ⭐ Average Rating */}
//         <div className="flex items-center gap-2">

//           {/* Visual Stars */}
//           <div className="flex">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 className={`text-lg ${
//                   star <= roundedRating
//                     ? "text-yellow-400"
//                     : "text-slate-300"
//                 }`}
//               >
//                 ★
//               </span>
//             ))}
//           </div>

//           {/* Numeric Average */}
//           <span className="text-sm text-slate-600 font-medium">
//             {avgRating.toFixed(1)} / 5
//           </span>

//         </div>
//       </div>

//       {/* VIEW BUTTON */}
//       <button
//         onClick={() => navigate(`/components/${component._id}`)}
//         className="mt-5 text-indigo-600 font-medium hover:underline"
//       >
//         View →
//       </button>

//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../services/api";

export default function ComponentCard({ component, onRefresh }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const avgRating = component.avgRating || 0;
  const roundedRating = Math.round(avgRating);

  /* 🔥 ADMIN DELETE */
  // const handleDelete = async () => {
  //   const ok = window.confirm(
  //     "Are you sure you want to delete this component?"
  //   );
  //   if (!ok) return;

  //   try {
  //     await apiRequest(`/components/${component._id}`, "DELETE");
  //     onRefresh?.(); // refresh list if provided
  //   } catch (err) {
  //     alert(err.message || "Failed to delete component");
  //   }
  // };

  const handleDelete = async () => {
  if (!window.confirm("Delete this component?")) return;

  try {
    await apiRequest(`/components/${component._id}`, "DELETE");
    alert("Component deleted");
    onRefresh(); // if you have it
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow hover:shadow-xl transition duration-300">

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-slate-900">
        {component.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {component.category}
      </p>

      {/* STATS */}
      <div className="flex items-center justify-between mt-4">

        {/* ❤️ Likes */}
        <div className="flex items-center gap-1 text-pink-600 font-medium">
          ❤️ {component.likesCount || 0}
        </div>

        {/* ⭐ Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-lg ${
                  star <= roundedRating
                    ? "text-yellow-400"
                    : "text-slate-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <span className="text-sm text-slate-600 font-medium">
            {avgRating.toFixed(1)} / 5
          </span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-5 flex items-center justify-between">

        <button
          onClick={() => navigate(`/components/${component._id}`)}
          className="text-indigo-600 font-medium hover:underline"
        >
          View →
        </button>

        {/* 🔥 ADMIN ONLY DELETE */}
        {user?.role === "admin" && (
          <button
            onClick={handleDelete}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Delete
          </button>
        )}
      </div>

    </div>
  );
}
