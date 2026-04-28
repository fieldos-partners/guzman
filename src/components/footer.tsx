import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-moss-900/10 py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-moss-800">
          <Leaf className="h-4 w-4" />
          <span className="font-display text-sm">
            Harold Guzman's Landscaping
          </span>
          <span className="text-moss-700/50">·</span>
          <span className="text-xs text-moss-700/70">
            Family-run since 2010
          </span>
        </div>
        <div className="text-xs text-moss-700/70">
          © {new Date().getFullYear()} Harold Guzman's Landscaping. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
