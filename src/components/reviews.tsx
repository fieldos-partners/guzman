import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const featured = testimonials.find((t) => !!t.quote)!;
const rest = testimonials.filter((t) => t.name !== featured.name);

export function Reviews() {
  return (
    <section id="reviews" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] shadow-soft"
        >
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2000&q=70"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,30,12,0.78) 0%, rgba(31,54,28,0.7) 100%)",
            }}
          />

          <div className="relative px-5 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20 text-sand-50">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-sand-200/80">
                  In their words
                </div>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]">
                  What clients say.
                </h2>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex items-center gap-0.5 text-sand-300">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                  <span className="text-sm text-sand-100/85">
                    <span className="font-display text-xl">5.0</span> · 4
                    verified reviews
                  </span>
                </div>
              </div>

              <blockquote className="relative">
                <Quote className="h-6 w-6 text-sand-200/70" />
                <p className="mt-3 font-display text-lg sm:text-xl md:text-2xl leading-snug text-sand-50">
                  "{featured.quote}"
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-sand-200/85">
                  — {featured.name}
                  {featured.meta ? ` · ${featured.meta}` : ""} · {featured.date}
                </footer>
              </blockquote>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {rest.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-moss-900/10 bg-sand-50 p-5"
            >
              <div className="flex items-center gap-2 text-sand-400">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 text-[11px] uppercase tracking-[0.16em] text-moss-700/70">
                  Verified
                </span>
              </div>
              <div className="mt-4 font-display text-lg text-moss-950">
                {t.name}
              </div>
              <div className="mt-1 text-xs text-moss-700/70">
                {t.meta ? `${t.meta} · ` : ""}
                {t.date}
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
