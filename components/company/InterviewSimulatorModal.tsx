"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  InterviewSession,
  InterviewMode,
  TargetRole,
  generateInterviewSessionFromV1,
  loadSimulatorSession,
  saveSimulatorSession,
  clearSimulatorSession,
} from "@/lib/simulatorEngine";
import { Question } from "@/types";
import {
  Play,
  Clock,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Award,
  Zap,
  Target,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import DifficultyBadge from "@/components/common/DifficultyBadge";

interface InterviewSimulatorModalProps {
  companySlug: string;
  companyName: string;
  questions: readonly Question[];
  isOpen: boolean;
  onClose: () => void;
}

export default function InterviewSimulatorModal({
  companySlug,
  companyName,
  questions,
  isOpen,
  onClose,
}: InterviewSimulatorModalProps) {
  // ─── Simulator State ───
  const [session, setSession] = useState<InterviewSession | null>(null);
  const [mode, setMode] = useState<InterviewMode>("standard");
  const [targetRole, setTargetRole] = useState<TargetRole>("SDE-1");
  const [loading, setLoading] = useState(false);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(0);

  // ─── UI & Portal State ───
  const [mounted, setMounted] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  // ─── Refs ───
  const scrollYRef = useRef(0);
  const prevFocusRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isClosingRef = useRef(false);

  // Mount guard for React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // ─── Body Scroll Lock & Restoration ───
  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;
    prevFocusRef.current = document.activeElement as HTMLElement;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";

    const existing = loadSimulatorSession(companySlug);
    if (existing && !existing.completed) {
      setSession(existing);
      const elapsed = Math.floor((Date.now() - existing.startTime) / 1000);
      const total = existing.config.durationMinutes * 60;
      setTimeRemainingSeconds(Math.max(0, total - elapsed));
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
      prevFocusRef.current?.focus?.();
    };
  }, [isOpen, companySlug]);

  // ─── Finish Interview Callback ───
  const handleFinishInterview = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSession((prev) => {
      if (!prev || prev.completed) return prev;
      const done: InterviewSession = {
        ...prev,
        completed: true,
        completedAt: Date.now(),
      };
      saveSimulatorSession(done);
      return done;
    });
  }, []);

  // ─── Countdown Timer ───
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!session || session.completed || timeRemainingSeconds <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          handleFinishInterview();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [session?.id, session?.completed, handleFinishInterview]);

  // ─── Close Handler with Animation ───
  const handleClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setAnimatingOut(true);

    setTimeout(() => {
      isClosingRef.current = false;
      onClose();
    }, 260);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setAnimatingOut(false);
      isClosingRef.current = false;
    }
  }, [isOpen]);

  // ─── ESC Key Support ───
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  // ─── Focus Trap ───
  useEffect(() => {
    if (!isOpen) return;
    const el = modalRef.current;
    if (!el) return;

    const FOCUSABLE =
      'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = el.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    el.addEventListener("keydown", trapFocus);
    el.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    return () => el.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  // ─── Handlers ───
  const handleStartInterview = () => {
    setLoading(true);
    const newSession = generateInterviewSessionFromV1(
      companySlug,
      companyName,
      questions,
      mode,
      targetRole,
    );
    if (newSession) {
      setSession(newSession);
      saveSimulatorSession(newSession);
      setTimeRemainingSeconds(newSession.config.durationMinutes * 60);
    }
    setLoading(false);
  };

  const handleToggleQuestionSolved = (index: number) => {
    if (!session) return;
    const updatedQuestions = [...session.questions];
    const item = updatedQuestions[index];
    updatedQuestions[index] = {
      ...item,
      solved: !item.solved,
      solvedAt: !item.solved ? Date.now() : undefined,
    };
    const updated: InterviewSession = { ...session, questions: updatedQuestions };
    setSession(updated);
    saveSimulatorSession(updated);
  };

  const handleNavigateQuestion = (direction: "prev" | "next") => {
    if (!session) return;
    const nextIdx =
      direction === "next"
        ? Math.min(session.questions.length - 1, session.currentQuestionIndex + 1)
        : Math.max(0, session.currentQuestionIndex - 1);
    const updated = { ...session, currentQuestionIndex: nextIdx };
    setSession(updated);
    saveSimulatorSession(updated);
  };

  const handleResetSession = () => {
    clearSimulatorSession();
    setSession(null);
    setTimeRemainingSeconds(0);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const solvedCount = session?.questions.filter((q) => q.solved).length ?? 0;
  const totalCount = session?.questions.length ?? 0;
  const scorePercentage =
    totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  if (!mounted || !isOpen) return null;

  // ─── Content Body ───
  const contentBody = (
    <div className="w-full space-y-5 md:space-y-6">
      {!session ? (
        /* Setup Screen */
        <div className="flex flex-col space-y-5 md:space-y-6">
          <div>
            <h3 className="font-extrabold text-xs md:text-sm text-foreground uppercase tracking-wider mb-3">
              1. Select Assessment Mode
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: "quick" as const, Icon: Clock, label: "Quick Check", sub: "15 Mins · 3 Questions" },
                { key: "standard" as const, Icon: Target, label: "Standard Round", sub: "45 Mins · 5 Questions" },
                { key: "full" as const, Icon: Zap, label: "Full Onsite Loop", sub: "90 Mins · 8 Questions" },
              ].map(({ key, Icon, label, sub }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setMode(key)}
                  className={cn(
                    "w-full p-3.5 md:p-4 rounded-xl border flex flex-col text-left transition-all cursor-pointer",
                    mode === key
                      ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500"
                      : "border-border bg-secondary/30 hover:bg-secondary/60",
                  )}
                >
                  <span className="font-extrabold text-sm text-foreground flex items-center gap-2">
                    <Icon className="h-4 w-4 text-indigo-400 shrink-0" />
                    {label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 font-medium">{sub}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-3">
              2. Select Target Level
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              {(["SDE-1", "SDE-2"] as const).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setTargetRole(role)}
                  className={cn(
                    "w-full sm:w-auto flex-1 px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center justify-center flex items-center",
                    targetRole === role
                      ? "border-indigo-500 bg-indigo-500/10 text-indigo-400 font-extrabold"
                      : "border-border bg-secondary/30 text-muted-foreground",
                  )}
                >
                  {role === "SDE-1" ? "SDE-1 (Easy → Med → Hard)" : "SDE-2 (Med → Hard)"}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleStartInterview}
            disabled={loading}
            className="w-full py-3.5 md:py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-60"
          >
            <Play className="h-4 w-4 fill-white shrink-0" />
            <span>Start Mock Interview</span>
          </button>
        </div>
      ) : session.completed ? (
        /* Completion Screen */
        <div className="flex flex-col items-center text-center space-y-6 py-2 md:py-4 animate-fade-in w-full">
          <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 shrink-0">
            <Award className="h-10 w-10 md:h-12 md:w-12" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-black text-foreground">Interview Completed!</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              Overall Score for {companyName} Mock Assessment
            </p>
          </div>

          {/* Stats Cards - Mobile: 1 col, Tablet: 2 col, Desktop: 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
            {[
              { value: `${scorePercentage}%`, label: "Score", color: "text-emerald-500" },
              { value: `${solvedCount}/${totalCount}`, label: "Solved", color: "text-foreground" },
              { value: `${session.config.durationMinutes}m`, label: "Duration", color: "text-indigo-400" },
              { value: session.config.targetRole, label: "Role", color: "text-amber-500" },
            ].map(({ value, label, color }) => (
              <div
                key={label}
                className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center justify-center w-full"
              >
                <span className={cn("text-2xl font-black", color)}>{value}</span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleResetSession}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 shrink-0" />
            <span>Start New Mock Interview</span>
          </button>
        </div>
      ) : (
        /* Active Interview View */
        <div className="flex flex-col space-y-4 md:space-y-5 w-full">
          {/* Header Bar: Question index & timer */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 md:px-4 md:py-3 rounded-xl border border-border bg-secondary/30">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-xs font-extrabold text-foreground">
                Q{session.currentQuestionIndex + 1} of {session.questions.length}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                (~{session.questions[session.currentQuestionIndex].expectedTimeMinutes} mins)
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Clock className="h-4 w-4 text-amber-500 shrink-0" />
              <span className="font-mono font-bold text-sm text-foreground tabular-nums">
                {formatTimer(timeRemainingSeconds)}
              </span>
            </div>
          </div>

          {/* Question Card */}
          {(() => {
            const qItem = session.questions[session.currentQuestionIndex];
            const q = qItem.question;
            return (
              <div className="p-4 md:p-5 rounded-2xl border border-border bg-card/80 flex flex-col space-y-4 shadow-sm w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                  <h3 className="font-extrabold text-base md:text-lg text-foreground leading-snug">
                    {q.title}
                  </h3>
                  <div className="self-start shrink-0">
                    <DifficultyBadge difficulty={q.difficulty} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {q.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-md text-[11px] md:text-xs font-medium bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border/50">
                  <a
                    href={q.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 text-xs font-bold border border-indigo-500/30 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    <span>Solve on LeetCode</span>
                  </a>

                  <button
                    onClick={() => handleToggleQuestionSolved(session.currentQuestionIndex)}
                    className={cn(
                      "w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-extrabold transition-all cursor-pointer",
                      qItem.solved
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-500"
                        : "bg-secondary border-border text-foreground hover:bg-secondary/80",
                    )}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>{qItem.solved ? "Marked Solved" : "Mark Solved"}</span>
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Controls Footer */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigateQuestion("prev")}
                disabled={session.currentQuestionIndex === 0}
                className="p-2.5 rounded-xl border border-border bg-secondary text-foreground disabled:opacity-30 cursor-pointer"
                aria-label="Previous question"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" />
              </button>
              <button
                onClick={() => handleNavigateQuestion("next")}
                disabled={session.currentQuestionIndex === session.questions.length - 1}
                className="p-2.5 rounded-xl border border-border bg-secondary text-foreground disabled:opacity-30 cursor-pointer"
                aria-label="Next question"
              >
                <ChevronRight className="h-4 w-4 shrink-0" />
              </button>
            </div>

            <button
              onClick={handleFinishInterview}
              className="px-4 md:px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs shadow transition-all cursor-pointer"
            >
              Submit &amp; End
            </button>
          </div>
        </div>
      )}
    </div>
  );

  // ─── Modal JSX via React Portal ───
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-sm animate-fade-in p-0 md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${companyName} Interview Simulator`}
        className={cn(
          "w-full bg-card border-0 md:border md:border-border md:rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all",
          // Mobile (<768px): Fullscreen layout
          "h-full max-h-none md:h-auto md:max-h-[90vh] md:max-w-3xl",
          animatingOut ? "animate-slide-down" : "animate-slide-up md:animate-fade-in",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div
          className="sticky top-0 z-20 flex items-center justify-between px-4 md:px-6 py-3.5 md:py-4 border-b border-border bg-card/95 backdrop-blur-md shrink-0"
          style={{
            paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.875rem)",
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-extrabold text-base md:text-lg text-foreground tracking-tight truncate leading-tight">
                {companyName}
              </h2>
              <p className="text-[11px] md:text-xs text-muted-foreground font-medium leading-none mt-0.5">
                Interview Simulator
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close interview simulator"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div
          className="flex-1 overflow-y-auto p-4 md:p-6"
          style={{
            paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)",
          }}
        >
          {contentBody}
        </div>
      </div>
    </div>,
    document.body,
  );
}
