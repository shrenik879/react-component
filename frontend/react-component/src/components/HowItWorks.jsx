// export default function HowItWorks() {
//   const steps = [
//     ["🔍 Discover", "Browse admin-approved React components"],
//     ["✨ Customize", "Modify components using AI prompts"],
//     ["🚀 Ship", "Use clean, production-ready code"],
//   ];

//   return (
//     <section className="py-32">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold text-slate-900 mb-6">
//           How ReactForge works
//         </h2>
//         <p className="text-lg text-slate-600 mb-16 max-w-2xl">
//           A simple workflow designed for modern frontend teams.
//         </p>

//         <div className="grid md:grid-cols-3 gap-12">
//           {steps.map(([title, desc]) => (
//             <div
//               key={title}
//               className="bg-white/75 backdrop-blur border border-slate-200 rounded-2xl p-8 shadow-[0_20px_60px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition"
//             >
//               <h3 className="text-lg font-medium text-slate-900">
//                 {title}
//               </h3>
//               <p className="mt-3 text-slate-600">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






// export default function HowItWorks() {
//   const steps = [
//     {
//       title: "🔍 Discover",
//       desc: "Browse a curated library of admin-approved React components built for real-world applications.",
//       extra: "Only high-quality, reusable UI patterns make it into the marketplace.",
//     },
//     {
//       title: "✨ Customize",
//       desc: "Modify components instantly using AI-powered natural language prompts.",
//       extra: "No boilerplate rewriting — adapt components to your needs in seconds.",
//     },
//     {
//       title: "🚀 Ship",
//       desc: "Use clean, scalable, production-ready React code in your projects.",
//       extra: "Designed to integrate seamlessly with modern frontend stacks.",
//     },
//   ];

//   return (
//     <section className="relative py-20 -mt-12">
//       {/* subtle background continuation */}
//       <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 to-transparent pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold text-slate-900 mb-4">
//           How ReactForge works
//         </h2>

//         <p className="text-lg text-slate-600 mb-10 max-w-2xl">
//           A streamlined workflow that helps you discover, customize, and ship
//           React components faster — without sacrificing quality.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {steps.map((step) => (
//             <div
//               key={step.title}
//               className="group bg-white/80 backdrop-blur border border-slate-200
//                          rounded-2xl p-8
//                          shadow-[0_20px_60px_rgba(99,102,241,0.18)]
//                          hover:shadow-[0_30px_80px_rgba(99,102,241,0.3)]
//                          hover:-translate-y-2
//                          transition-all duration-300 cursor-pointer"
//             >
//               <h3 className="text-lg font-semibold text-slate-900">
//                 {step.title}
//               </h3>

//               <p className="mt-3 text-slate-600">
//                 {step.desc}
//               </p>

//               <p className="mt-4 text-sm text-slate-500 opacity-0
//                             group-hover:opacity-100 transition">
//                 {step.extra}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// export default function HowItWorks() {
//   const steps = [
//     {
//       title: "🔍 Discover",
//       desc: "Browse a curated library of admin-approved React components built for real-world applications.",
//       extra:
//         "Every component is reviewed for quality, reusability, and modern best practices.",
//     },
//     {
//       title: "✨ Customize",
//       desc: "Modify components instantly using AI-powered natural language prompts.",
//       extra:
//         "Describe what you want to change and let AI adapt the code for you.",
//     },
//     {
//       title: "🚀 Ship",
//       desc: "Use clean, scalable, production-ready React code in your projects.",
//       extra:
//         "No refactoring required — components are ready to plug in.",
//     },
//     {
//       title: "🧩 Developer-built",
//       desc: "Components crafted and curated by experienced frontend engineers.",
//       extra:
//         "Built with maintainability and scalability in mind.",
//     },
//     {
//       title: "🤖 AI powered",
//       desc: "Customize components using natural language instead of manual edits.",
//       extra:
//         "Reduce development time without sacrificing control.",
//     },
//     {
//       title: "🛡️ Production ready",
//       desc: "Clean, scalable React code that follows best practices.",
//       extra:
//         "Optimized for performance and long-term maintenance.",
//     },
//   ];

//   return (
//     <section className="relative py-20 -mt-10">
//       {/* background continuation */}
//       <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 to-transparent pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* HEADER */}
//         <h2 className="text-4xl font-bold text-slate-900 mb-4">
//           How{" "}
//           <span className="bg-gradient-to-r from-indigo-600 to-violet-600 
//                            bg-clip-text text-transparent drop-shadow-sm">
//             ReactForge
//           </span>{" "}
//           works
//         </h2>

//         <p className="text-lg text-slate-600 mb-12 max-w-2xl">
//           A streamlined workflow that helps you discover, customize, and ship
//           React components faster — without sacrificing quality.
//         </p>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
//           {steps.map((step) => (
//             <div
//               key={step.title}
//               className="group bg-white/85 backdrop-blur border border-slate-200
//                          rounded-2xl p-8
//                          shadow-[0_20px_60px_rgba(99,102,241,0.18)]
//                          hover:shadow-[0_30px_90px_rgba(99,102,241,0.35)]
//                          hover:-translate-y-2
//                          transition-all duration-300 cursor-pointer"
//             >
//               {/* TITLE */}
//               <h3
//                 className="text-lg font-semibold mb-3
//                            text-slate-900
//                            group-hover:text-indigo-600
//                            transition"
//               >
//                 {step.title}
//               </h3>

//               {/* MAIN TEXT */}
//               <p className="text-slate-600 leading-relaxed">
//                 {step.desc}
//               </p>

//               {/* EXTRA INFO */}
//               <p
//                 className="mt-4 text-sm text-slate-500
//                            opacity-0 group-hover:opacity-100
//                            transition duration-300"
//               >
//                 {step.extra}
//               </p>

//               {/* HOVER GLOW RING */}
//               <div
//                 className="absolute inset-0 rounded-2xl
//                            ring-1 ring-transparent
//                            group-hover:ring-indigo-400/30
//                            transition"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




export default function HowItWorks() {
  const steps = [
    {
      title: "🔍 Discover",
      desc: "Browse a curated library of admin-approved React components built for real-world applications.",
      extra: "Each component is reviewed for quality, reusability, and modern best practices.",
    },
    {
      title: "✨ Customize",
      desc: "Modify components instantly using AI-powered natural language prompts.",
      extra: "Describe changes in plain English and let AI update the code for you.",
    },
    {
      title: "🚀 Ship",
      desc: "Use clean, scalable, production-ready React code in your projects.",
      extra: "No refactoring needed — components are ready to plug in.",
    },
    {
      title: "🧩 Developer-built",
      desc: "Components crafted and curated by experienced frontend engineers.",
      extra: "Designed with maintainability and scalability in mind.",
    },
    {
      title: "🤖 AI powered",
      desc: "Customize components using natural language instead of manual edits.",
      extra: "Reduce development time without sacrificing control.",
    },
    {
      title: "🛡️ Production ready",
      desc: "Clean, scalable React code that follows industry best practices.",
      extra: "Optimized for performance and long-term maintenance.",
    },
  ];

  return (
    <section id="how-it-works" className="relative pt-14 pb-20 -mt-6" >
      {/* soft background continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          How{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent drop-shadow-sm">
            ReactForge
          </span>{" "}
          works
        </h2>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl">
          A streamlined workflow that helps you discover, customize, and ship
          React components faster — without sacrificing quality.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative group bg-white/85 backdrop-blur
                         border border-slate-200 rounded-2xl p-8
                         shadow-[0_18px_50px_rgba(99,102,241,0.18)]
                         hover:shadow-[0_28px_80px_rgba(99,102,241,0.35)]
                         hover:-translate-y-2
                         transition-all duration-300 cursor-pointer"
            >
              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-3 text-slate-900
                             group-hover:text-indigo-600 transition">
                {step.title}
              </h3>

              {/* MAIN TEXT */}
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>

              {/* EXTRA INFO (hover reveal) */}
              <p className="mt-4 text-sm text-slate-500
                            opacity-0 group-hover:opacity-100
                            transition duration-300">
                {step.extra}
              </p>

              {/* hover glow ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl
                              ring-1 ring-transparent
                              group-hover:ring-indigo-400/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
