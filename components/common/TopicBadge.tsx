import { cn } from "@/lib/utils";

interface TopicBadgeProps {
  topic: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export default function TopicBadge({ topic, onClick, active, className }: TopicBadgeProps) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-xs transition-all duration-200",
        onClick ? "cursor-pointer" : "cursor-default",
        active
          ? "bg-primary text-primary-foreground font-medium shadow-sm"
          : "bg-secondary/40 text-muted-foreground border border-border hover:bg-secondary/80 hover:text-foreground",
        className
      )}
    >
      {topic}
    </button>
  );
}
