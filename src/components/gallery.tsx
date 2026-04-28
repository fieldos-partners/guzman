import { motion } from "framer-motion";

const shots = [
  { src: "/images/gallery-mulch.svg", label: "Mulch refresh" },
  { src: "/images/gallery-hedges.svg", label: "Hedge shaping" },
  { src: "/images/gallery-lawn.svg", label: "Lawn cut & edge" },
  { src: "/images/gallery-bed.svg", label: "Bed installation" },
  { src: "/images/gallery-path.svg", label: "Pathway clean-up" },
  { src: "/images/powerwash.svg", label: "Power washing" },
];

export function Gallery() {
  return (
    <section className="py-12 md:py-20 bg-moss-950 text-sand-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-sand-200/70">
              Recent jobs
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.01em] text-sand-50">
              The portfolio.
            </h2>
          </div>
          <p className="text-sand-100/70 max-w-md">
            A small selection of yards we've cared for across Woodbridge and
            the surrounding NoVA neighborhoods.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-moss-900"
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-moss-950/85 via-moss-950/40 to-transparent p-4">
                <span className="text-xs uppercase tracking-[0.18em] text-sand-100">
                  {s.label}
                </span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
