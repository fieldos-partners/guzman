export type Testimonial = {
  name: string;
  date: string;
  meta?: string;
  quote?: string;
  tag?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Todd S",
    date: "a year ago",
    meta: "Local Guide · 19 reviews",
    quote:
      "B&A Landscape is the best landscape company I have used. They have done mowing, trimming bushes, and power washing. Brayan and his crew always do great work. He is easy to communicate with and always returns phone calls.",
    tag: "Mow · Trim · Power Wash",
  },
  {
    name: "Osiris Ortiz",
    date: "a year ago",
    meta: "1 review",
  },
  {
    name: "Arody M",
    date: "a year ago",
    meta: "5 reviews",
  },
  {
    name: "Brandon Izaguirre",
    date: "a year ago",
  },
];
