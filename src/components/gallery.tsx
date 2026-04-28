import { motion } from "framer-motion";

const shots = [
  {
    src: "/images/gallery-mulch.svg",
    label: "Mulch refresh",
    span: "row-span-2",
  },
  {
    src: "/images/gallery-hedges.svg",
    label: "Hedge shaping",
  },
  {
    src: "/images/gallery-lawn.svg",
    label: "Lawn cut & edge",
  },
  {
    src: "/images/gallery-bed.svg",
    label: "Bed installation",
    span: "col-span-2",
  },
  {
    src: "/images/gallery-path.svg",
    label: "Pathway clean-up",
  },
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
            A small selection of yards we've cared for across Lake Ridge,
            Woodbridge, and the surrounding area.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[220px]">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl ${
                s.span ?? ""
              }`}
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-moss-950/80 to-transparent p-4">
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
