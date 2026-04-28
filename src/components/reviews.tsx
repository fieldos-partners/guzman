import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const featured = testimonials.find((t) => t.name === "maxmankins")!;
const rest = testimonials.filter((t) => t.name !== "maxmankins");

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-20">
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

          <div className="relative px-6 py-14 md:px-16 md:py-20 text-sand-50">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-sand-200/80">
                  In their words
                </div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]">
                  What clients say.
                </h2>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex items-center gap-0.5 text-sand-300">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                  <span className="text-sm text-sand-100/85">
                    <span className="font-display text-xl">4.7</span> average ·
                    41 verified reviews
                  </span>
                </div>
              </div>

              <blockquote className="relative">
                <Quote className="h-6 w-6 text-sand-200/70" />
                <p className="mt-3 font-display text-xl md:text-2xl leading-snug text-sand-50">
                  "{featured.quote}"
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-sand-200/85">
                  — {featured.name} · {featured.date}
                </footer>
              </blockquote>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {rest.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
              className="mb-4 break-inside-avoid rounded-2xl border border-moss-900/10 bg-sand-50 p-5"
            >
              <Quote className="h-4 w-4 text-moss-700/60" />
              <blockquote className="mt-3 text-[14px] leading-relaxed text-moss-900/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between border-t border-moss-900/10 pt-3">
                <div>
                  <div className="text-sm font-medium text-moss-950">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-moss-700/70">{t.date}</div>
                </div>
                {t.tag && (
                  <span className="rounded-full bg-moss-100 px-2 py-0.5 text-[10px] font-medium text-moss-800">
                    {t.tag}
                  </span>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
