"use client";

import { useEffect, useState, useCallback } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PWAInstallButton({ className }: { className?: string }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // 1. Check if app is already running in standalone display mode
    if (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as unknown as { standalone?: boolean }).standalone) {
      setIsInstalled(true);
      return;
    }

    // 2. Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      showToast("Interview Atlas installed successfully!");
    };

    // 3. Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Clean up any stale legacy service workers & caches from browser memory
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const reg of registrations) {
          reg.unregister();
        }
      });
      if ("caches" in window) {
        caches.keys().then((keys) => {
          for (const key of keys) caches.delete(key);
        });
      }
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleInstallClick = useCallback(async () => {
    if (!deferredPrompt) return;

    // Immediately trigger browser native PWA installation prompt
    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true);
        setDeferredPrompt(null);
        showToast("Interview Atlas installed successfully!");
      } else {
        // User cancelled/dismissed native prompt -> keep Install button visible for retry
      }
    } catch (err) {
      console.warn("PWA prompt error:", err);
    }
  }, [deferredPrompt]);

  // Hide button if already installed, or if prompt is unavailable/unsupported
  if (isInstalled || !deferredPrompt) {
    return (
      <>
        {toastMessage && (
          <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[#16c784]/30 bg-zinc-900/95 text-white shadow-2xl backdrop-blur-md animate-fade-in">
            <CheckCircle2 className="h-5 w-5 text-[#16c784]" />
            <span className="text-sm font-semibold">{toastMessage}</span>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        className={cn(
          "flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-all duration-200 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 shadow-sm active:scale-95 cursor-pointer",
          className
        )}
        title="Install Interview Atlas App"
        aria-label="Install App"
      >
        <Download className="h-3.5 w-3.5 text-indigo-400" />
        <span>Install App</span>
      </button>

      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[#16c784]/30 bg-zinc-900/95 text-white shadow-2xl backdrop-blur-md animate-fade-in">
          <CheckCircle2 className="h-5 w-5 text-[#16c784]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}
    </>
  );
}
