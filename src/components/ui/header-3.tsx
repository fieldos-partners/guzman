"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { createPortal } from "react-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  LucideIcon,
  Scissors,
  Sprout,
  TreePine,
  Leaf,
  Droplets,
  Wind,
  Hammer,
  Mountain,
  Star,
  Image as ImageIcon,
  MapPin,
  Phone,
} from "lucide-react";

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border backdrop-blur-lg":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-5">
          <a href="#" className="hover:bg-accent rounded-md p-2 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-moss-700" />
            <span className="font-display text-base font-semibold text-moss-950">
              B&amp;A Landscape
            </span>
          </a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                  <ul className="bg-popover grid w-[36rem] grid-cols-2 gap-2 rounded-md border p-2 shadow">
                    {serviceLinks.map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                  <div className="p-2">
                    <p className="text-muted-foreground text-sm">
                      Need something else?{" "}
                      <a
                        href="#contact"
                        className="text-foreground font-medium hover:underline"
                      >
                        Tell us about your yard
                      </a>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
                  <div className="grid w-[36rem] grid-cols-2 gap-2">
                    <ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
                      {aboutLinks.map((item, i) => (
                        <li key={i}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2 p-3">
                      {quickLinks.map((item, i) => (
                        <li key={i}>
                          <NavigationMenuLink
                            href={item.href}
                            className="flex p-2 hover:bg-accent flex-row rounded-md items-center gap-x-2"
                          >
                            <item.icon className="text-foreground size-4" />
                            <span className="font-medium">{item.title}</span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuLink className="px-4" asChild>
                <a href="#reviews" className="hover:bg-accent rounded-md p-2">
                  Reviews
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink className="px-4" asChild>
                <a href="#contact" className="hover:bg-accent rounded-md p-2">
                  Contact
                </a>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" asChild>
            <a href="tel:+15712985998" className="gap-2">
              <Phone className="h-3.5 w-3.5" />
              (571) 298-5998
            </a>
          </Button>
          <Button asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu
        open={open}
        className="flex flex-col justify-between gap-2 overflow-y-auto"
      >
        <NavigationMenu className="max-w-full">
          <div className="flex w-full flex-col gap-y-2">
            <span className="text-sm text-muted-foreground">Services</span>
            {serviceLinks.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
            <span className="text-sm text-muted-foreground mt-2">About</span>
            {aboutLinks.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
            {quickLinks.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
          </div>
        </NavigationMenu>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <a href="tel:+15712985998" className="gap-2">
              <Phone className="h-3.5 w-3.5" />
              (571) 298-5998
            </a>
          </Button>
          <Button className="w-full" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur-lg",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out",
          "size-full p-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
  return (
    <NavigationMenuLink
      className={cn(
        "w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2",
        className
      )}
      {...props}
      asChild
    >
      <a href={href}>
        <div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
          <Icon className="text-moss-700 size-5" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-medium">{title}</span>
          {description && (
            <span className="text-muted-foreground text-xs text-left">
              {description}
            </span>
          )}
        </div>
      </a>
    </NavigationMenuLink>
  );
}

const serviceLinks: LinkItem[] = [
  {
    title: "Lawn Mowing",
    href: "#services",
    description: "Weekly and bi-weekly mowing & edging",
    icon: Scissors,
  },
  {
    title: "Mulch Installation",
    href: "#services",
    description: "Premium hardwood mulch refresh",
    icon: Leaf,
  },
  {
    title: "Bush & Hedge Trimming",
    href: "#services",
    description: "Shape and rejuvenation pruning",
    icon: Sprout,
  },
  {
    title: "Tree Removal",
    href: "#services",
    description: "Safe ornamental tree work & cleanup",
    icon: TreePine,
  },
  {
    title: "Power Washing",
    href: "#services",
    description: "Siding, decks, walkways, gutters",
    icon: Wind,
  },
  {
    title: "Sod & Aeration",
    href: "#services",
    description: "Core aeration plus fresh sod",
    icon: Droplets,
  },
];

const aboutLinks: LinkItem[] = [
  {
    title: "Our Work",
    href: "#work",
    description: "Recent jobs across NoVA",
    icon: ImageIcon,
  },
  {
    title: "Reviews",
    href: "#reviews",
    description: "What 4 verified clients say",
    icon: Star,
  },
  {
    title: "Service Area",
    href: "#contact",
    description: "Woodbridge, VA & nearby",
    icon: MapPin,
  },
];

const quickLinks: LinkItem[] = [
  { title: "Weed Removal", href: "#services", icon: Mountain },
  { title: "Edging & Borders", href: "#services", icon: Hammer },
  { title: "Free Estimate", href: "#contact", icon: Star },
  { title: "Owner: Brayan", href: "#contact", icon: Phone },
];

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
