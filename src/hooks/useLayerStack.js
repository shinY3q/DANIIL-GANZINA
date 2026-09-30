import { useCallback, useEffect, useRef, useState } from 'react';

const clamp01 = value => (value < 0 ? 0 : value > 1 ? 1 : value);

/**
 * Distance from the top of the document to an element's *flow* position.
 * getBoundingClientRect() would report where a pinned sticky element is
 * painted, not where it belongs in the flow, so walk offsetParent instead.
 */
const flowTop = element => {
  let top = 0;
  let node = element;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return top;
};

/**
 * Drives the sticky "sheet" stack.
 *
 * Every `.layer` pins at the top of the viewport and is then covered by the
 * next one. For each layer we publish how far through that pass it is as
 * `--exit` (0 → 1) so CSS can lift, shrink and fade the content being buried.
 * We also track which sheet is on top, plus a page-wide progress value that
 * opens and closes the light field behind everything.
 */
export default function useLayerStack() {
  const layersRef = useRef([]);
  const topsRef = useRef([]);
  const frameRef = useRef(0);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  const measure = useCallback(() => {
    const layers = Array.from(document.querySelectorAll('.layer'));
    layersRef.current = layers;
    topsRef.current = layers.map(flowTop);
  }, []);

  const update = useCallback(() => {
    const layers = layersRef.current;
    const tops = topsRef.current;
    if (!layers.length) return;

    const y = window.scrollY;
    const viewport = window.innerHeight;
    const last = layers.length - 1;
    const exits = [];

    for (let i = 0; i <= last; i += 1) {
      // A sheet is covered while the next one travels one viewport upwards,
      // from first appearing at the bottom edge to sitting flush at the top.
      // The closing sheet is never covered, so it never exits.
      const coverStart = i === last ? Infinity : tops[i + 1] - viewport;
      const raw = i === last ? 0 : clamp01((y - coverStart) / viewport);
      const eased = Math.pow(raw, 1.6);
      exits[i] = eased;
      layers[i].style.setProperty('--exit', eased.toFixed(4));
    }

    // Which sheet is on top? The incoming one takes over past the halfway mark.
    const probe = y + viewport * 0.55;
    let next = 0;
    for (let i = 0; i < tops.length; i += 1) {
      if (probe >= tops[i]) next = i;
    }
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActive(next);
    }

    // The light field is open behind the first and last sheets: it closes as
    // sheet 00 is covered and reopens as the closing sheet takes the stage.
    const openness = Math.max(1 - exits[0], exits[last - 1] ?? 0);
    const total = Math.max(document.documentElement.scrollHeight - viewport, 1);
    const root = document.documentElement.style;
    root.setProperty('--field-open', clamp01(openness).toFixed(3));
    root.setProperty('--page-progress', clamp01(y / total).toFixed(4));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = 0;
        update();
      });
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Fonts and images shift the tops after first paint.
    const settle = window.setTimeout(onResize, 700);
    if (document.fonts?.ready) document.fonts.ready.then(onResize).catch(() => {});

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.clearTimeout(settle);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [measure, update]);

  return active;
}
