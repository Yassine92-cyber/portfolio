/**
 * Smooth scroll polyfill for better browser compatibility
 */
export function smoothScrollTo(element: HTMLElement, options?: ScrollIntoViewOptions) {
  const defaultOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  };

  // Check if smooth scroll is supported
  const supportsSmoothScroll =
    "scrollBehavior" in document.documentElement.style;

  if (supportsSmoothScroll) {
    element.scrollIntoView({ ...defaultOptions, ...options });
  } else {
    // Fallback for browsers without native smooth scroll
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2 + element.offsetHeight / 2;
    
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // ms
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (ease-in-out)
      const ease = percentage < 0.5
        ? 2 * percentage * percentage
        : 1 - Math.pow(-2 * percentage + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }
}

