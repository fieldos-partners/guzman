const stats = [
  { value: "15+", label: "Years serving NoVA" },
  { value: "4.7★", label: "Across 41 verified reviews" },
  { value: "<24h", label: "Typical response time" },
  { value: "100%", label: "Family-run, no subcontractors" },
];

export function Stats() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-moss-900/10 bg-moss-900/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-sand-50 px-6 py-8 md:py-10 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-moss-900">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.16em] text-moss-700/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
