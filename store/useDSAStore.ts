import { create } from "zustand";

interface DSAState {
  solvedQuestions: string[]; // List of IDs e.g. google_two_sum
  bookmarkedQuestions: string[]; // List of IDs
  recentlyVisited: { name: string; slug: string }[];
  notes: Record<string, string>; // Maps questionId -> note string
  solvedHistory: Record<string, string>; // Maps questionId -> date string YYYY-MM-DD
  practiceMode: boolean;
  isHydrated: boolean;
  
  toggleSolved: (id: string) => void;
  toggleBookmarked: (id: string) => void;
  addRecentlyVisited: (name: string, slug: string) => void;
  clearRecentlyVisited: () => void;
  setNote: (id: string, text: string) => void;
  togglePracticeMode: () => void;
  exportData: () => string;
  importData: (jsonData: string) => boolean;
  hydrateStore: () => void;
}

export const useDSAStore = create<DSAState>((set, get) => ({
  solvedQuestions: [],
  bookmarkedQuestions: [],
  recentlyVisited: [],
  notes: {},
  solvedHistory: {},
  practiceMode: false,
  isHydrated: false,

  toggleSolved: (id) => {
    const solved = get().solvedQuestions;
    const history = { ...get().solvedHistory };
    const isAlreadySolved = solved.includes(id);
    
    let newSolved: string[];
    if (isAlreadySolved) {
      newSolved = solved.filter((x) => x !== id);
      delete history[id];
    } else {
      newSolved = [...solved, id];
      history[id] = new Date().toISOString().split("T")[0];
    }
    
    set({ solvedQuestions: newSolved, solvedHistory: history });
    if (typeof window !== "undefined") {
      localStorage.setItem("solved_questions", JSON.stringify(newSolved));
      localStorage.setItem("solved_history", JSON.stringify(history));
    }
  },

  toggleBookmarked: (id) => {
    const bookmarked = get().bookmarkedQuestions;
    const newBookmarked = bookmarked.includes(id)
      ? bookmarked.filter((x) => x !== id)
      : [...bookmarked, id];

    set({ bookmarkedQuestions: newBookmarked });
    if (typeof window !== "undefined") {
      localStorage.setItem("bookmarked_questions", JSON.stringify(newBookmarked));
    }
  },

  addRecentlyVisited: (name, slug) => {
    const current = get().recentlyVisited;
    const filtered = current.filter((x) => x.slug !== slug);
    const newRecent = [{ name, slug }, ...filtered].slice(0, 5);

    set({ recentlyVisited: newRecent });
    if (typeof window !== "undefined") {
      localStorage.setItem("recently_visited_companies", JSON.stringify(newRecent));
    }
  },

  clearRecentlyVisited: () => {
    set({ recentlyVisited: [] });
    if (typeof window !== "undefined") {
      localStorage.removeItem("recently_visited_companies");
    }
  },

  setNote: (id, text) => {
    const newNotes = { ...get().notes, [id]: text };
    if (!text.trim()) {
      delete newNotes[id];
    }
    set({ notes: newNotes });
    if (typeof window !== "undefined") {
      localStorage.setItem("problem_notes", JSON.stringify(newNotes));
    }
  },

  togglePracticeMode: () => {
    const newMode = !get().practiceMode;
    set({ practiceMode: newMode });
    if (typeof window !== "undefined") {
      localStorage.setItem("practice_mode", String(newMode));
    }
  },

  exportData: () => {
    const data = {
      solvedQuestions: get().solvedQuestions,
      bookmarkedQuestions: get().bookmarkedQuestions,
      notes: get().notes,
      solvedHistory: get().solvedHistory,
    };
    return JSON.stringify(data, null, 2);
  },

  importData: (jsonData) => {
    try {
      const data = JSON.parse(jsonData);
      if (
        Array.isArray(data.solvedQuestions) &&
        Array.isArray(data.bookmarkedQuestions) &&
        typeof data.notes === "object"
      ) {
        set({
          solvedQuestions: data.solvedQuestions,
          bookmarkedQuestions: data.bookmarkedQuestions,
          notes: data.notes || {},
          solvedHistory: data.solvedHistory || {},
        });
        if (typeof window !== "undefined") {
          localStorage.setItem("solved_questions", JSON.stringify(data.solvedQuestions));
          localStorage.setItem("bookmarked_questions", JSON.stringify(data.bookmarkedQuestions));
          localStorage.setItem("problem_notes", JSON.stringify(data.notes || {}));
          localStorage.setItem("solved_history", JSON.stringify(data.solvedHistory || {}));
        }
        return true;
      }
    } catch (e) {
      console.error("Failed to import data", e);
    }
    return false;
  },

  hydrateStore: () => {
    if (get().isHydrated || typeof window === "undefined") return;

    try {
      const solved = localStorage.getItem("solved_questions");
      const bookmarked = localStorage.getItem("bookmarked_questions");
      const recent = localStorage.getItem("recently_visited_companies");
      const notes = localStorage.getItem("problem_notes");
      const history = localStorage.getItem("solved_history");
      const practice = localStorage.getItem("practice_mode");

      set({
        solvedQuestions: solved ? JSON.parse(solved) : [],
        bookmarkedQuestions: bookmarked ? JSON.parse(bookmarked) : [],
        recentlyVisited: recent ? JSON.parse(recent) : [],
        notes: notes ? JSON.parse(notes) : {},
        solvedHistory: history ? JSON.parse(history) : {},
        practiceMode: practice === "true",
        isHydrated: true,
      });
    } catch (e) {
      console.error("Failed to load DSA state from localStorage", e);
      set({ isHydrated: true });
    }
  },
}));
