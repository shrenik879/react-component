// import ComponentCard from "../components/ComponentCard";

// export default function Components() {
//   const isLoggedIn = !!localStorage.getItem("token");

//   const components = [
//     {
//       _id: "1",
//       name: "Primary Button",
//       description: "Reusable button component",
//       avgRating: 4.5,
//       totalRatings: 120,
//       likes: 320,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         {components.map((c) => (
//           <ComponentCard
//             key={c._id}
//             component={c}
//             isLoggedIn={isLoggedIn}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { getComponents } from "../services/componentApi";
// import ComponentCard from "../components/ComponentCard";

// export default function Components() {
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchComponents = async () => {
//     setLoading(true);
//     try {
//       const data = await getComponents();
//       setComponents(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponents();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-20">Loading components...</p>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16">
//       <h1 className="text-3xl font-semibold text-slate-900">
//         Component Marketplace
//       </h1>

//       <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {components.map((component) => (
//           <ComponentCard
//             key={component._id}
//             component={component}
//             onRefresh={fetchComponents}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { getComponents } from "../services/componentApi";
// import ComponentCard from "../components/ComponentCard";

// export default function Components() {
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchComponents = async () => {
//     try {
//       const data = await getComponents();
//       setComponents(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponents();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading components...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-24">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-semibold text-slate-900 mb-10">
//           Component Marketplace
//         </h1>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {components.map((component) => (
//             <ComponentCard
//               key={component._id}
//               component={component}
//               onRefresh={fetchComponents}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { apiRequest } from "../services/api";
// import ComponentCard from "../components/ComponentCard";

// export default function Components() {
//   const [components, setComponents] = useState([]);

//   const loadComponents = async () => {
//     const data = await apiRequest("/components");
//     setComponents(data);
//   };

//   useEffect(() => {
//     loadComponents();
//   }, []);

//   return (
//     <div className="grid md:grid-cols-3 gap-6">
//       {components.map((c) => (
//         <ComponentCard
//           key={c._id}
//           component={c}
//           onRefresh={loadComponents}
//         />
//       ))}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import ComponentCard from "../components/ComponentCard";
// import { apiRequest } from "../services/api";

// export default function Components() {
//   const [components, setComponents] = useState([]);

//   const fetchComponents = async () => {
//     const data = await apiRequest("/components");
//     setComponents(data);
//   };

//   useEffect(() => {
//     fetchComponents();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-6 py-16">
//       <h1 className="text-3xl font-semibold mb-8">Component Marketplace</h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {components.map((c) => (
//           <ComponentCard
//             key={c._id}
//             component={c}
//             onRefresh={fetchComponents}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import ComponentCard from "../components/ComponentCard";
// import { apiRequest } from "../services/api";

// export default function Components() {
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchComponents = async () => {
//     try {
//       const data = await apiRequest("/components");
//       setComponents(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComponents();
//   }, []);

//   if (loading) {
//     return <div className="p-20">Loading components...</div>;
//   }

//   return (
//     <div className="min-h-screen px-8 py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
//       <h1 className="text-3xl font-semibold mb-10">
//         Component Marketplace
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {components.map((component) => (
//           <ComponentCard
//             key={component._id}
//             component={component}
//             onRefresh={fetchComponents}  
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import ComponentCard from "../components/ComponentCard";
// import { apiRequest } from "../services/api";

// export default function Components() {
//   const [components, setComponents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ NEW: sorting state
//   const [sort, setSort] = useState("new");

//   const fetchComponents = async () => {
//     try {
//       // ✅ UPDATED: pass sort query (logic unchanged)
//       const data = await apiRequest(`/components?sort=${sort}`);
//       setComponents(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ UPDATED: refetch when sort changes
//   useEffect(() => {
//     fetchComponents();
//   }, [sort]);

//   if (loading) {
//     return <div className="p-20">Loading components...</div>;
//   }

//   return (
//     <div className="min-h-screen px-8 py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
//       <h1 className="text-3xl font-semibold mb-6">
//         Component Marketplace
//       </h1>

//       {/* ✅ NEW: Sorting UI */}
//       <div className="mb-8 flex items-center gap-4">
//         <span className="text-sm font-medium text-slate-600">
//           Sort by:
//         </span>

//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="border rounded-lg px-4 py-2 text-sm bg-white"
//         >
//           <option value="new">Newest</option>
//           <option value="rating">Top Rated</option>
//           <option value="likes">Most Liked</option>
//         </select>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {components.map((component) => (
//           <ComponentCard
//             key={component._id}
//             component={component}
//             onRefresh={fetchComponents}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import ComponentCard from "../components/ComponentCard";
import { apiRequest } from "../services/api";

export default function Components() {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);

  // sorting state (UNCHANGED)
  const [sort, setSort] = useState("new");

  const fetchComponents = async () => {
    try {
      const data = await apiRequest(`/components?sort=${sort}`);
      setComponents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComponents();
  }, [sort]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-slate-500">
        Loading components…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 md:px-10 py-24">
      
      {/* HEADER + SORT ROW */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* TITLE */}
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Component Marketplace
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Browse community-built React components
          </p>
        </div>

        {/* SORT */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">
            Sort by
          </span>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="new">Newest</option>
            <option value="rating">Top rated</option>
            <option value="likes">Most liked</option>
          </select>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <ComponentCard
            key={component._id}
            component={component}
            onRefresh={fetchComponents}
          />
        ))}
      </div>
    </div>
  );
}
