"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export function GuzmanScrollHero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/videos/landscaping-hero.mp4"
      posterSrc="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80"
      bgImageSrc="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2400&q=80"
      title="Harold Guzman's Landscaping"
      date="Family-run since 2010"
      scrollToExpand="Scroll to see our work"
      textBlend
    >
      <div className="max-w-4xl mx-auto text-moss-900">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-moss-950">
          Yards we'd be proud to call ours.
        </h2>
        <p className="text-lg leading-relaxed text-moss-900/80 mb-6">
          A family-run landscaping crew serving Northern Virginia for over a
          decade. Mowing, mulch, hedge work, sod installation, and power
          washing — done on time, fairly priced, and with a craftsman's eye.
        </p>
        <p className="text-base leading-relaxed text-moss-900/70">
          Keep scrolling for our services, recent work, and what 41 verified
          clients had to say.
        </p>
      </div>
    </ScrollExpandMedia>
  );
}
