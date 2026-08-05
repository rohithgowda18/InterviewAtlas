# TODO: Interview Simulator Mobile Redesign

- [x] Add bottom sheet slide-up/slide-down animations to `app/globals.css`
- [x] Rewrite `components/company/InterviewSimulatorModal.tsx` with:
  - [x] Mobile full-screen bottom sheet (<=768px) with slide-up animation
  - [x] Sticky header with company name, "Interview Simulator" title, and close (X) button
  - [x] Independent scrolling content with `overscroll-contain`
  - [x] Page scroll lock on open (body fixed) and exact scroll position restore on close
  - [x] Safe-area insets for iPhone (`env(safe-area-inset-top/bottom)`)
  - [x] Focus trap inside modal on mobile
  - [x] ESC closes on desktop
  - [x] Smooth open/close animations (250-300ms)
  - [x] Desktop modal unchanged
- [x] Fix `lib/mobileScroll.ts` (removed stray backtick and unused `scrollToTopOnMobile` helper)
- [x] Verify TypeScript compiles without errors
