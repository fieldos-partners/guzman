"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export function GuzmanScrollHero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/videos/landscaping-hero.mp4"
      posterSrc="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80"
      bgImageSrc="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2400&q=80"
      title="B&A Landscape"
      date="Woodbridge, VA"
      scrollToExpand="Scroll to see our work"
      textBlend
    >
      <div className="max-w-4xl mx-auto text-moss-900">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-moss-950">
          Yards we'd be proud to call ours.
        </h2>
        <p className="text-lg leading-relaxed text-moss-900/80 mb-6">
          Owner-operated lawn care and landscaping for Woodbridge and the
          surrounding NoVA neighborhoods. Mowing, mulch, hedge work, sod, and
          power washing — done by Brayan and his crew, on time and fairly
          priced.
        </p>
        <p className="text-base leading-relaxed text-moss-900/70">
          Keep scrolling for our services, recent work, and what verified
          clients had to say.
        </p>
      </div>
    </ScrollExpandMedia>
  );
}
