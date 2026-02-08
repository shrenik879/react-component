// export default function Footer() {
//   return (
//     <footer className="relative">
//       {/* Unified background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-violet-600/10 to-cyan-500/10" />

//       <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12 text-sm">
//         <div>
//           <h3 className="text-lg font-semibold text-slate-900">
//             ReactForge
//           </h3>
//           <p className="mt-3 text-slate-600">
//             AI-powered React component marketplace.
//             <br />
//             Discover, customize, and ship faster.
//           </p>
//         </div>

//         <div>
//           <h4 className="font-medium text-slate-900 mb-4">
//             Product
//           </h4>
//           <ul className="space-y-2 text-slate-600">
//             <li>Overview</li>
//             <li>Components</li>
//             <li>AI tools</li>
//             <li>Pricing</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-medium text-slate-900 mb-4">
//             Developers
//           </h4>
//           <ul className="space-y-2 text-slate-600">
//             <li>Submit components</li>
//             <li>Docs</li>
//             <li>Guidelines</li>
//             <li>API</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-medium text-slate-900 mb-4">
//             Company
//           </h4>
//           <ul className="space-y-2 text-slate-600">
//             <li>About</li>
//             <li>Blog</li>
//             <li>Careers</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-slate-200/60">
//         <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between text-xs text-slate-500">
//           <span>© 2026 ReactForge</span>
//           <span>Built with AI ✨</span>
//         </div>
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-50">
      {/* SOFT TRANSITION GRADIENT (CTA → FOOTER) */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-white to-white" />

      {/* SUBTLE ACCENT GLOW */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2
                   w-[900px] h-[300px] bg-indigo-200/20 blur-[160px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4 text-sm">
        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            ReactForge
          </h3>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-xs">
            AI-powered React component marketplace.
            Discover, customize, and ship faster.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="font-medium text-slate-900 mb-4">
            Product
          </h4>
          <ul className="space-y-2 text-slate-600">
            <li className="hover:text-slate-900 transition">Overview</li>
            <li className="hover:text-slate-900 transition">Components</li>
            <li className="hover:text-slate-900 transition">AI tools</li>
            <li className="hover:text-slate-900 transition">Pricing</li>
          </ul>
        </div>

        {/* DEVELOPERS */}
        <div>
          <h4 className="font-medium text-slate-900 mb-4">
            Developers
          </h4>
          <ul className="space-y-2 text-slate-600">
            <li className="hover:text-slate-900 transition">Submit components</li>
            <li className="hover:text-slate-900 transition">Docs</li>
            <li className="hover:text-slate-900 transition">Guidelines</li>
            <li className="hover:text-slate-900 transition">API</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-medium text-slate-900 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-slate-600">
            <li className="hover:text-slate-900 transition">About</li>
            <li className="hover:text-slate-900 transition">Blog</li>
            <li className="hover:text-slate-900 transition">Careers</li>
            <li className="hover:text-slate-900 transition">Contact</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row
                        justify-between items-center gap-3
                        text-xs text-slate-500">
          <span>© 2026 ReactForge</span>
          <span>Built with AI ✨</span>
        </div>
      </div>
    </footer>
  );
}
