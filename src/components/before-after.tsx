import { useState } from "react";
import { motion } from "framer-motion";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";

const cases = [
  {
    id: "yard",
    title: "Full yard transformation",
    blurb:
      "An overgrown front yard cleaned up, mulched, and edged in a single visit.",
    before: "/images/compare-yard-before.svg",
    after: "/images/compare-yard-after.svg",
  },
  {
    id: "bed",
    title: "Bed restoration",
    blurb:
      "Weed-overrun beds reset with fresh mulch, shaped boxwoods, and a clean steel border.",
    before: "/images/compare-bed-before.svg",
    after: "/images/compare-bed-after.svg",
  },
  {
    id: "lawn",
    title: "Lawn rescue",
    blurb:
      "Patchy, dry turf brought back to a striped, level cut with crisp bed edges.",
    before: "/images/compare-lawn-before.svg",
    after: "/images/compare-lawn-after.svg",
  },
];

export function BeforeAfter() {
  const [active, setActive] = useState(cases[0]);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-moss-700/70">
              Before · After
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.01em] text-moss-950">
              Drag to see the difference.
            </h2>
          </div>
          <p className="max-w-md text-moss-900/70">
            Hover or drag the slider to reveal the transformation. Real
            projects, real reset — without the staging tricks.
          </p>
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-moss-900/10 shadow-soft"
        >
          <ImageComparison
            className="aspect-[16/9] w-full"
            enableHover
            springOptions={{ bounce: 0, duration: 400 }}
          >
            <ImageComparisonImage
              src={active.before}
              alt={`${active.title} — before`}
              position="left"
            />
            <ImageComparisonImage
              src={active.after}
              alt={`${active.title} — after`}
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/70 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 grid place-items-center size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand-50 border border-moss-900/15 shadow-soft text-moss-800">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="m9 18-6-6 6-6" />
                  <path d="m15 6 6 6-6 6" />
                </svg>
              </div>
            </ImageComparisonSlider>
          </ImageComparison>

          <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-moss-950/70 backdrop-blur-sm px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sand-50">
            Before
          </div>
          <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-sand-50/90 backdrop-blur-sm px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-moss-900">
            After
          </div>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-3 gap-3">
          {cases.map((c) => {
            const isActive = c.id === active.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c)}
                className={`text-left rounded-2xl border p-5 transition-colors ${
                  isActive
                    ? "border-moss-700 bg-moss-700 text-sand-50"
                    : "border-moss-900/10 bg-sand-50 text-moss-900 hover:bg-moss-50"
                }`}
              >
                <div
                  className={`text-[11px] uppercase tracking-[0.18em] ${
                    isActive ? "text-sand-200/80" : "text-moss-700/70"
                  }`}
                >
                  Case {cases.indexOf(c) + 1}
                </div>
                <div className="mt-2 font-display text-lg">{c.title}</div>
                <p
                  className={`mt-1 text-sm ${
                    isActive ? "text-sand-100/85" : "text-moss-900/70"
                  }`}
                >
                  {c.blurb}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
