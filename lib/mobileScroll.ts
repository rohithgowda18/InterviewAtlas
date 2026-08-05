/**
 * Utility helper to ensure expanding content is visible in the viewport on mobile devices.
 * If target element or newly revealed content extends below the visible screen viewport,
 * smoothly scrolls just enough to bring it comfortably into view without scrolling to the top.
 */
export function ensureVisibleOnMobile(element: HTMLElement | null, padding: number = 24) {
  if (!element || typeof window === "undefined") return;

  // Only apply scroll adjustments on mobile screens (viewport width <= 768px)
  if (window.innerWidth > 768) return;

  // Small delay to allow browser layout calculation after state update
  requestAnimationFrame(() => {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if the bottom of the element extends below the current viewport
    if (rect.bottom > viewportHeight) {
      const scrollNeeded = rect.bottom - viewportHeight + padding;
      window.scrollBy({
        top: Math.max(0, scrollNeeded),
        behavior: "smooth",
      });
    }
  });
}

/**
 * Utility helper to smoothly scroll an element to the top of the viewport on mobile devices.
 * Used when opening the Interview Simulator so it appears at the top of the screen
 * without requiring manual scrolling. Only applies on mobile (viewport width <= 768px).
 */
export function scrollToTopOnMobile(element: HTMLElement | null) {
  if (!element || typeof window === "undefined") return;

  // Only apply scroll adjustments on mobile screens (viewport width <= 768px)
  if (window.innerWidth > 768) return;

  // Use requestAnimationFrame to ensure the element has expanded/rendered before scrolling
  requestAnimationFrame(() => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
