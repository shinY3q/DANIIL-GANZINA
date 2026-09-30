import { useEffect } from 'react';

/**
 * Reveals every `[data-reveal]` element once it enters the viewport.
 * One observer for the whole page; elements are unobserved after firing.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!nodes.length) return undefined;

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      nodes.forEach(node => node.classList.add('is-in'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
