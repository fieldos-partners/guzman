import {
  Scissors,
  Sprout,
  TreePine,
  Leaf,
  Droplets,
  Wind,
  Hammer,
  Mountain,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: typeof Scissors;
  highlight?: string;
};

export const services: Service[] = [
  {
    title: "Lawn Mowing & Maintenance",
    description:
      "Weekly and bi-weekly mowing programs, edge work, and seasonal cleanups that keep your lawn camera-ready year round.",
    icon: Scissors,
    highlight: "Most requested",
  },
  {
    title: "Mulch Installation",
    description:
      "Premium hardwood and dyed mulch refresh — beds prepped, edged, and laid to a clean, even depth for healthier roots.",
    icon: Leaf,
  },
  {
    title: "Bush & Hedge Trimming",
    description:
      "Shape, height-control, and rejuvenation pruning that respects each plant's growth pattern.",
    icon: Sprout,
  },
  {
    title: "Tree Removal",
    description:
      "Safe removal of ornamental and mid-size trees, plus stump cleanup and full debris haul-away.",
    icon: TreePine,
  },
  {
    title: "Weed Removal",
    description:
      "Hand-pulling, edging, and pre-emergent treatments to keep beds and walkways crisp.",
    icon: Mountain,
  },
  {
    title: "Aeration & Sod",
    description:
      "Core aeration to break up compaction, plus fresh-cut sod installation for an instant lawn reset.",
    icon: Droplets,
  },
  {
    title: "Power Washing",
    description:
      "House siding, gutters, decks, and walkways — restored without the streaks.",
    icon: Wind,
  },
  {
    title: "Edging & Borders",
    description:
      "Metal and stone borders that contain mulch, define beds, and lift the entire curb.",
    icon: Hammer,
  },
];
