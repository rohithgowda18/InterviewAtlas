export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} LeetDSA Sheets. All rights reserved. Curated LeetCode lists.
        </p>
        <p className="text-xs text-muted-foreground/60 text-center md:text-right">
          Build for developers preparing for technical interviews. Not affiliated with LeetCode.
        </p>
      </div>
    </footer>
  );
}
