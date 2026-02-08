export default function Features() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {[
          ["🧩 Developer-built", "Curated by experienced engineers"],
          ["🤖 AI powered", "Customize using natural language"],
          ["🛡 Production ready", "Clean, scalable React code"],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="bg-white/75 backdrop-blur border border-slate-200 rounded-2xl p-8 shadow-[0_20px_60px_rgba(99,102,241,0.2)]"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-3 text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
