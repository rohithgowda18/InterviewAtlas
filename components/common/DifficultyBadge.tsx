import { cn } from "@/lib/utils";
import { Difficulty } from "@/types";

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

export default function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  const styles: Record<Difficulty, string> = {
    Easy: "bg-[#16c784]/10 text-[#16c784] border-[#16c784]/25",
    Medium: "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/25",
    Hard: "bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/25",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm font-semibold border transition-colors",
        styles[difficulty],
        className
      )}
    >
      {difficulty}
    </span>
  );
}
