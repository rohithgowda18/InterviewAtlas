"use client";

import { useEffect, useRef } from "react";

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  color?: string;
}

export default function ProgressCircle({
  percentage,
  size = 80,
  strokeWidth = 6,
  label,
  sublabel,
  color = "#16c784",
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedPct = Math.min(100, Math.max(0, percentage));
  const dashOffset = circumference - (clampedPct / 100) * circumference;

  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = String(circumference);
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (circleRef.current) {
            circleRef.current.style.transition =
              "stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)";
            circleRef.current.style.strokeDashoffset = String(dashOffset);
          }
        }, 100);
      });
    }
  }, [circumference, dashOffset]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          className="-rotate-90"
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-secondary/60"
            fill="none"
          />
          {/* Progress */}
          <circle
            ref={circleRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-foreground">
            {clampedPct.toFixed(0)}%
          </span>
        </div>
      </div>
      {label && (
        <span className="text-xs font-semibold text-foreground">{label}</span>
      )}
      {sublabel && (
        <span className="text-[10px] text-muted-foreground">{sublabel}</span>
      )}
    </div>
  );
}
