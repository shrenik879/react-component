
// export default function CTA() {
//   return (
//     <section className="relative">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-cyan-500/20" />

//       <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
//         <h2 className="text-4xl font-semibold text-slate-900">
//           Start building with ReactForge
//         </h2>
//         <p className="mt-4 text-slate-600">
//           AI-powered React components, ready for production.
//         </p>

//         <button className="mt-8 px-8 py-3 rounded-full bg-indigo-600 text-white shadow-lg hover:shadow-xl transition">
//           Get started for free
//         </button>
//       </div>
//     </section>
//   );
// }


// import { useNavigate } from "react-router-dom";

// export default function CTA() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-cyan-500/20" />

//       <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
//         <h2 className="text-4xl font-semibold text-slate-900">
//           Start building with ReactForge
//         </h2>

//         <p className="mt-4 text-slate-600">
//           Explore production-ready React components and use them instantly in
//           your projects.
//         </p>

//         <button
//           onClick={() => navigate("/components")}
//           className="mt-8 px-8 py-3 rounded-full bg-indigo-600 text-white
//                      shadow-lg hover:shadow-xl hover:bg-indigo-700
//                      transition"
//         >
//           Explore production-ready components
//         </button>

//         {/* subtle trust text */}
//         <p className="mt-3 text-sm text-slate-500">
//           Browse components · View code · No signup required
//         </p>
//       </div>
//     </section>
//   );
// }


// import { useNavigate } from "react-router-dom";

// export default function CTA() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative overflow-hidden">
//       {/* BACKGROUND GRADIENT */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-cyan-500/20" />

//       {/* SOFT REFLECTION GLOW */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                       w-[700px] h-[300px] bg-indigo-400/20 blur-[140px]" />

//       <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
//         {/* HEADLINE */}
//         <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//           Start building with{" "}
//           <span className="bg-gradient-to-r from-indigo-600 to-violet-600
//                            bg-clip-text text-transparent
//                            drop-shadow-[0_2px_10px_rgba(99,102,241,0.35)]">
//             ReactForge
//           </span>
//         </h2>

//         {/* SUBTEXT */}
//         <p className="mt-4 text-slate-600 text-lg">
//           Explore production-ready React components and use them instantly in
//           your projects.
//         </p>

//         {/* CTA BUTTON */}
//         <button
//           onClick={() => navigate("/components")}
//           className="mt-10 px-10 py-4 rounded-full
//                      bg-indigo-600 text-white font-medium
//                      shadow-[0_15px_40px_rgba(99,102,241,0.45)]
//                      hover:bg-indigo-700
//                      hover:shadow-[0_20px_60px_rgba(99,102,241,0.65)]
//                      hover:-translate-y-1
//                      active:scale-95
//                      transition-all duration-300"
//         >
//           Explore production-ready components
//         </button>

//         {/* TRUST TEXT */}
//         <p className="mt-4 text-sm text-slate-500">
//           Browse components · View code · No signup required
//         </p>
//       </div>
//     </section>
//   );
// }



import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section  className="relative overflow-hidden bg-slate-50">
      {/* SUBTLE BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />

      {/* VERY SOFT ACCENT GLOW */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[280px] bg-indigo-200/30 blur-[160px]"
      />

      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">
        {/* HEADLINE */}
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
          Start building with{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600
                           bg-clip-text text-transparent">
            ReactForge
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-5 text-slate-600 text-lg max-w-2xl mx-auto">
          Explore production-ready React components and use them instantly
          in your projects.
        </p>

        {/* CTA BUTTON */}
        <button
          onClick={() => navigate("/components")}
          className="mt-12 inline-flex items-center justify-center
                     px-10 py-4 rounded-full
                     bg-slate-900 text-white text-base font-medium
                     shadow-lg shadow-slate-900/20
                     hover:bg-slate-800
                     hover:shadow-xl hover:shadow-slate-900/30
                     hover:-translate-y-0.5
                     active:scale-[0.98]
                     transition-all duration-300"
        >
          Explore production-ready components
        </button>

        {/* TRUST TEXT */}
        <p className="mt-5 text-sm text-slate-500">
          Browse components · View code · No signup required
        </p>
      </div>
    </section>
  );
}
  