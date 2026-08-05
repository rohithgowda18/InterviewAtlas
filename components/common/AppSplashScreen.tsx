"use client";

import { useEffect, useState } from "react";
import { Compass } from "lucide-react";

export default function AppSplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Smooth transition from native splash screen into React application
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 400);
      return () => clearTimeout(removeTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#09090b] text-[#fafafa] transition-opacity duration-400 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-xl shadow-indigo-500/20">
          <div className="h-full w-full rounded-[14px] bg-[#09090b] flex items-center justify-center">
            <Compass className="h-8 w-8 text-indigo-400" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Interview Atlas
          </span>
          <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
            Master Technical Interviews
          </span>
        </div>
      </div>
    </div>
  );
}
