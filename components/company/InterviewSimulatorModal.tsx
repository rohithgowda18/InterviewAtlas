"use client";

import { useState, useEffect } from "react";
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
  XCircle,
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
  const [session, setSession] = useState<InterviewSession | null>(null);
  const [mode, setMode] = useState<InterviewMode>("standard");
  const [targetRole, setTargetRole] = useState<TargetRole>("SDE-1");
  const [loading, setLoading] = useState(false);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);

  // Resume active session on open & lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const active = loadSimulatorSession(companySlug);
      if (active && !active.completed) {
        setSession(active);
        const elapsedSec = Math.floor((Date.now() - active.startTime) / 1000);
        const totalSec = active.config.durationMinutes * 60;
        setTimeRemainingSeconds(Math.max(0, totalSec - elapsedSec));
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, companySlug]);

  // Countdown timer effect
  useEffect(() => {
    if (!session || session.completed || timeRemainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishInterview();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [session, timeRemainingSeconds]);

  const handleStartInterview = () => {
    setLoading(true);
    const newSession = generateInterviewSessionFromV1(
      companySlug,
      companyName,
      questions,
      mode,
      targetRole
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

    const updatedSession: InterviewSession = {
      ...session,
      questions: updatedQuestions,
    };

    setSession(updatedSession);
    saveSimulatorSession(updatedSession);
  };

  const handleNextQuestion = () => {
    if (!session) return;
    const nextIdx = Math.min(session.questions.length - 1, session.currentQuestionIndex + 1);
    const updatedSession = { ...session, currentQuestionIndex: nextIdx };
    setSession(updatedSession);
    saveSimulatorSession(updatedSession);
  };

  const handlePrevQuestion = () => {
    if (!session) return;
    const prevIdx = Math.max(0, session.currentQuestionIndex - 1);
    const updatedSession = { ...session, currentQuestionIndex: prevIdx };
    setSession(updatedSession);
    saveSimulatorSession(updatedSession);
  };

  const handleFinishInterview = () => {
    if (!session) return;
    const completedSession: InterviewSession = {
      ...session,
      completed: true,
      completedAt: Date.now(),
    };
    setSession(completedSession);
    saveSimulatorSession(completedSession);
  };

  const handleResetSession = () => {
    clearSimulatorSession();
    setSession(null);
  };

  if (!isOpen) return null;

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const solvedCount = session?.questions.filter((q) => q.solved).length || 0;
  const totalCount = session?.questions.length || 0;
  const scorePercentage = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-foreground tracking-tight flex items-center gap-2">
                {companyName} Interview Simulator
              </h2>
              <p className="text-xs text-muted-foreground font-medium">
                Realistic timed assessment based on curated company questions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!session ? (
            /* Setup Screen */
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-extrabold text-sm text-foreground uppercase tracking-wider mb-2">
                  1. Select Assessment Mode
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode("quick")}
                    className={cn(
                      "p-4 rounded-xl border flex flex-col text-left transition-all cursor-pointer",
                      mode === "quick"
                        ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500"
                        : "border-border bg-secondary/30 hover:bg-secondary/60"
                    )}
                  >
                    <span className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-indigo-400" /> Quick Check
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 font-medium">
                      15 Mins • 3 Questions
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("standard")}
                    className={cn(
                      "p-4 rounded-xl border flex flex-col text-left transition-all cursor-pointer",
                      mode === "standard"
                        ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500"
                        : "border-border bg-secondary/30 hover:bg-secondary/60"
                    )}
                  >
                    <span className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                      <Target className="h-4 w-4 text-indigo-400" /> Standard Round
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 font-medium">
                      45 Mins • 5 Questions
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("full")}
                    className={cn(
                      "p-4 rounded-xl border flex flex-col text-left transition-all cursor-pointer",
                      mode === "full"
                        ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500"
                        : "border-border bg-secondary/30 hover:bg-secondary/60"
                    )}
                  >
                    <span className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                      <Zap className="h-4 w-4 text-indigo-400" /> Full Onsite Loop
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 font-medium">
                      90 Mins • 8 Questions
                    </span>
                  </button>
                </div>
              </div>

              {/* Target Role */}
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-3">
                  2. Select Target Level
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setTargetRole("SDE-1")}
                    className={cn(
                      "px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer",
                      targetRole === "SDE-1"
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400 font-extrabold"
                        : "border-border bg-secondary/30 text-muted-foreground"
                    )}
                  >
                    SDE-1 (Easy → Med → Hard)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTargetRole("SDE-2")}
                    className={cn(
                      "px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer",
                      targetRole === "SDE-2"
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400 font-extrabold"
                        : "border-border bg-secondary/30 text-muted-foreground"
                    )}
                  >
                    SDE-2 (Med → Hard)
                  </button>
                </div>
              </div>

              <button
                onClick={handleStartInterview}
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Play className="h-4 w-4 fill-white" />
                <span>Start Mock Interview</span>
              </button>
            </div>
          ) : session.completed ? (
            /* Completion Screen */
            <div className="flex flex-col items-center text-center gap-6 py-4 animate-fade-in">
              <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
                <Award className="h-12 w-12" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-foreground">Interview Completed!</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Overall Score for {companyName} Mock Assessment
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg">
                <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center">
                  <span className="text-2xl font-black text-emerald-500">{scorePercentage}%</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Score</span>
                </div>
                <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center">
                  <span className="text-2xl font-black text-foreground">{solvedCount}/{totalCount}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Solved</span>
                </div>
                <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center">
                  <span className="text-2xl font-black text-indigo-400">{session.config.durationMinutes}m</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Duration</span>
                </div>
                <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col items-center">
                  <span className="text-2xl font-black text-amber-500">{session.config.targetRole}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Role</span>
                </div>
              </div>

              <button
                onClick={handleResetSession}
                className="px-6 py-2.5 rounded-xl border border-border bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Start New Mock Interview</span>
              </button>
            </div>
          ) : (
            /* Active Interview View */
            <div className="flex flex-col gap-6">
              {/* Question Navigation Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-secondary/30">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold text-foreground">
                    Question {session.currentQuestionIndex + 1} of {session.questions.length}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    (~{session.questions[session.currentQuestionIndex].expectedTimeMinutes} mins)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  <span className="font-mono font-bold text-sm text-foreground">
                    {formatTimer(timeRemainingSeconds)}
                  </span>
                </div>
              </div>

              {/* Question Card */}
              {(() => {
                const qItem = session.questions[session.currentQuestionIndex];
                const q = qItem.question;

                return (
                  <div className="p-5 rounded-2xl border border-border bg-card/80 flex flex-col gap-4 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-extrabold text-lg text-foreground">{q.title}</h3>
                      <DifficultyBadge difficulty={q.difficulty} />
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {q.topics.map((tName) => (
                        <span
                          key={tName}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border/50"
                        >
                          {tName}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 text-xs font-bold border border-indigo-500/30 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Solve on LeetCode</span>
                      </a>

                      <button
                        onClick={() => handleToggleQuestionSolved(session.currentQuestionIndex)}
                        className={cn(
                          "px-4 py-2 rounded-xl border text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer",
                          qItem.solved
                            ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-500"
                            : "bg-secondary border-border text-foreground hover:bg-secondary/80"
                        )}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{qItem.solved ? "Marked Solved" : "Mark Solved"}</span>
                      </button>
                    </div>
                  </div>
                );
              })()}

              {/* Controls Footer */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={session.currentQuestionIndex === 0}
                    className="p-2 rounded-xl border border-border bg-secondary text-foreground disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    disabled={session.currentQuestionIndex === session.questions.length - 1}
                    className="p-2 rounded-xl border border-border bg-secondary text-foreground disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={handleFinishInterview}
                  className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs shadow transition-all cursor-pointer"
                >
                  Submit & End Test
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
