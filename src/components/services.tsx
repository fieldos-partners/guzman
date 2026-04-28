import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-moss-700/70">
              What we do
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.01em] text-moss-950">
              Full-service yard care, done by hand.
            </h2>
          </div>
          <p className="text-moss-900/70 max-w-md">
            From a one-time cleanup to a season-long maintenance plan, every
            service is performed by Harold and his crew — no subcontractors, no
            shortcuts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative rounded-3xl border border-moss-900/10 bg-sand-50 p-6 hover:bg-moss-50 transition-colors"
              >
                {s.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-moss-700 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-sand-50">
                    {s.highlight}
                  </span>
                )}
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-moss-900/5 text-moss-700 group-hover:bg-moss-700 group-hover:text-sand-50 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl text-moss-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-moss-900/70">
                  {s.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-moss-700">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
