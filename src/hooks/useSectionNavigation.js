import { useEffect } from 'react';

import { measureSectionTops, SECTION_IDS, sectionHref } from '../utils/navigation.js';

const sectionFromLocation = () => {
  const hashId = window.location.hash.slice(1);
  if (SECTION_IDS.includes(hashId)) return hashId;

  const basePath = new URL(sectionHref('top'), window.location.origin).pathname;
  const relativePath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length)
    : '';
  const pathId = relativePath.split('/').filter(Boolean)[0];

  return SECTION_IDS.includes(pathId) ? pathId : 'top';
};

/**
 * Native hash navigation cannot resolve the flow position of the sticky
 * sheets reliably. This keeps the links semantic while moving to the exact
 * document position and exposing clean, reload-safe section URLs.
 */
export default function useSectionNavigation() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const previousRestoration = window.history.scrollRestoration;
    let sectionTops = measureSectionTops();
    let firstFrame = 0;
    let secondFrame = 0;

    window.history.scrollRestoration = 'manual';

    const measure = () => {
      sectionTops = measureSectionTops();
    };

    const scrollToSection = (id, behavior) => {
      const top = sectionTops.get(id);
      if (top === undefined) return;

      if (behavior === 'auto') {
        const root = document.documentElement;
        const previousBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        window.scrollTo({ top, behavior: 'auto' });
        root.style.scrollBehavior = previousBehavior;
        return;
      }

      window.scrollTo({ top, behavior });
    };

    const replaceUrl = id => {
      const nextPath = sectionHref(id);
      if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextPath) {
        window.history.replaceState({ section: id }, '', nextPath);
      }
    };

    const openSection = (id, { behavior = 'smooth', history = 'push' } = {}) => {
      if (!SECTION_IDS.includes(id)) return;

      const nextPath = sectionHref(id);
      if (history === 'push' && window.location.pathname !== nextPath) {
        window.history.pushState({ section: id }, '', nextPath);
      } else if (history === 'replace') {
        replaceUrl(id);
      }

      scrollToSection(id, reduceMotion.matches ? 'auto' : behavior);
    };

    const onClick = event => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest('a[data-section]');
      if (!link) return;

      const id = link.dataset.section;
      if (!SECTION_IDS.includes(id)) return;

      event.preventDefault();
      openSection(id);
    };

    const onPopState = () => {
      scrollToSection(sectionFromLocation(), reduceMotion.matches ? 'auto' : 'smooth');
    };

    const onResize = () => {
      measure();
    };

    const initialId = sectionFromLocation();
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        openSection(initialId, { behavior: 'auto', history: 'replace' });
      });
    });

    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPopState);
    window.addEventListener('resize', onResize);
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('resize', onResize);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);
}
