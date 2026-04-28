import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollShowcase() {
  return (
    <section id="work" className="relative">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.22em] text-moss-700/70">
              Our work
            </div>
            <h2 className="font-display text-4xl md:text-[5rem] leading-[1.02] tracking-[-0.02em] text-moss-950">
              From overgrown <br />
              <span className="italic text-moss-700">to picture-perfect.</span>
            </h2>
            <p className="text-moss-900/70 max-w-xl mx-auto">
              Scroll through a recent yard transformation — mulch refresh,
              hedge work, and a full re-edge in a single visit.
            </p>
          </div>
        }
      >
        <img
          src="/images/showcase-wide.svg"
          alt="Manicured landscaped yard at golden hour"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </ContainerScroll>
    </section>
  );
}
