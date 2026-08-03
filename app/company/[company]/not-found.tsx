import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-20 text-center border border-border bg-card rounded-2xl max-w-xl mx-auto my-12 gap-5 shadow-sm">
      <div className="p-3 rounded-full bg-amber-500/10 text-amber-500">
        <AlertCircle className="h-8 w-8" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Company Not Found</h2>
        <p className="text-sm text-muted-foreground">
          The requested company could not be found in our database sheet.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 px-4.5 py-2 text-sm font-bold rounded-lg bg-secondary text-foreground hover:bg-secondary/80 border border-border transition-all duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
