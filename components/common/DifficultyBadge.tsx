import { cn } from "@/lib/utils";
import { Difficulty } from "@/types";

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

export default function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  const styles = {
    Easy: "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 border-emerald-500/20",
    Medium: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20 border-amber-500/20",
    Hard: "bg-rose-500/10 text-rose-500 dark:bg-rose-500/20 border-rose-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border transition-colors",
        styles[difficulty],
        className
      )}
    >
      {difficulty}
    </span>
  );
}
