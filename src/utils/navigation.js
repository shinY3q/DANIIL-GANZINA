const normaliseBase = base => (base.endsWith('/') ? base : `${base}/`);

export const SECTION_IDS = ['top', 'about', 'work', 'services', 'process', 'contact'];

export const sectionHref = id => {
  const base = normaliseBase(import.meta.env.BASE_URL);
  return id === 'top' ? base : `${base}${id}/`;
};

/**
 * Sticky elements report their painted offset once pinned, not their original
 * place in the document. Build the section map from the normal-flow siblings
 * instead, which remains stable regardless of the current scroll position.
 */
export const measureSectionTops = () => {
  const tops = new Map();
  const stack = document.querySelector('.layers');
  let top = 0;

  if (stack) {
    Array.from(stack.children).forEach(child => {
      if (child.classList.contains('layer') && child.id) tops.set(child.id, top);
      top += child.offsetHeight;
    });
  }

  const contact = document.getElementById('contact');
  if (contact) tops.set('contact', top);

  return tops;
};
