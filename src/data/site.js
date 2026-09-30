/**
 * Single source of truth for every word, link and project on the site.
 * Edit here — the components read from this file only.
 */

export const CONTACT = {
  email: 'hello@daniilganzina.com',
  location: 'Minsk, BY — working worldwide',
  socials: [
    { label: 'Telegram', href: 'https://t.me/daniilganzina', handle: '@daniilganzina' },
    { label: 'Behance', href: 'https://behance.net/daniilganzina', handle: '/daniilganzina' },
    { label: 'Dribbble', href: 'https://dribbble.com/daniilganzina', handle: '/daniilganzina' },
    { label: 'Instagram', href: 'https://instagram.com/daniilganzina', handle: '@daniilganzina' }
  ]
};

export const NAV = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'work', label: 'Work', index: '02' },
  { id: 'services', label: 'Services', index: '03' },
  { id: 'process', label: 'Process', index: '04' },
  { id: 'contact', label: 'Contact', index: '05' }
];

export const LAYERS = [
  { id: 'top', index: '00', label: 'Index' },
  ...NAV
];

export const HERO = {
  title: 'Daniil Ganzina — digital designer and creative developer',
  subtitle: 'Digital designer & creative developer',
  description: 'Brand identities, websites and visual systems.'
};

export const MANIFESTO = {
  eyebrow: 'Manifesto',
  title: ['I design brands that', 'behave like software', 'and software that', 'feels like a brand.'],
  accentLine: 1,
  body: [
    'Most work stops at the surface. I start from the system underneath it — the grid, the motion curve, the way a colour behaves at 3am on a bad screen — and let the surface fall out of it.',
    'That means one person carries the idea from the first sketch to the last line of shader code, so nothing gets lost in translation between a deck and a build.'
  ],
  stats: [
    { value: '6', unit: 'yrs', label: 'Designing & building' },
    { value: '40', unit: '+', label: 'Shipped projects' },
    { value: '12', unit: '', label: 'Countries served' },
    { value: '1', unit: '', label: 'Person, end to end' }
  ]
};

export const WORK = {
  eyebrow: 'Selected work',
  title: 'Built in layers',
  note: 'A short cut of recent work. Full case studies on request.',
  projects: [
    {
      index: '01',
      name: 'Halcyon',
      kind: 'Brand identity & site',
      year: '2025',
      summary:
        'A full visual system for an audio hardware studio — monogram, motion grammar and a WebGL product configurator.',
      tags: ['Identity', 'WebGL', 'Art direction'],
      href: '#contact',
      tone: 'a'
    },
    {
      index: '02',
      name: 'Northbound',
      kind: 'Product design',
      year: '2025',
      summary:
        'Design system and marketing site for a logistics platform. 68 components, one shared token layer, dark by default.',
      tags: ['Design system', 'React', 'Web'],
      href: '#contact',
      tone: 'b'
    },
    {
      index: '03',
      name: 'Vessel',
      kind: 'Identity & packaging',
      year: '2024',
      summary:
        'Wordmark, packaging and campaign direction for a small-batch fragrance house. Built to survive both foil and favicon.',
      tags: ['Identity', 'Print', 'Campaign'],
      href: '#contact',
      tone: 'c'
    },
    {
      index: '04',
      name: 'Signal Field',
      kind: 'Creative development',
      year: '2024',
      summary:
        'A generative live-visual engine driven by audio input, performed across four venues and shipped as a web toy.',
      tags: ['GLSL', 'Three.js', 'Motion'],
      href: '#contact',
      tone: 'd'
    }
  ]
};

export const SERVICES = {
  eyebrow: 'Services',
  title: 'What I take on',
  items: [
    {
      index: '01',
      name: 'Brand identity',
      summary:
        'Naming direction, logotype, type and colour system, and the guidelines that keep it alive after handoff.',
      deliverables: ['Logotype & marks', 'Type & colour system', 'Brand guidelines', 'Asset library']
    },
    {
      index: '02',
      name: 'Web design',
      summary:
        'Sites and product surfaces designed as systems — from the first wireframe to a component library your team can extend.',
      deliverables: ['UX & wireframes', 'UI design', 'Design system', 'Prototypes']
    },
    {
      index: '03',
      name: 'Creative development',
      summary:
        'I build what I design. React, GLSL and WebGL, tuned so the thing actually runs on a mid-range laptop.',
      deliverables: ['React front-end', 'WebGL & shaders', 'Scroll & motion', 'Performance work']
    },
    {
      index: '04',
      name: 'Motion & 3D',
      summary:
        'Logo animation, product loops and generative pieces that give a static identity somewhere to move.',
      deliverables: ['Logo animation', 'Product loops', 'Generative art', 'Social cuts']
    }
  ]
};

export const PROCESS = {
  eyebrow: 'Process',
  title: 'Four moves',
  note: 'Same shape whether the job is a logotype or a full platform. Typical run: 4–10 weeks.',
  steps: [
    {
      index: '01',
      name: 'Signal',
      duration: 'Week 1',
      summary:
        'We pull the brief apart — audience, competitors, the thing you are actually selling — and agree on what success looks like before anything is drawn.'
    },
    {
      index: '02',
      name: 'Structure',
      duration: 'Week 2–3',
      summary:
        'Territories, references and the underlying system: grid, hierarchy, motion rules. You pick a direction while it is still cheap to change.'
    },
    {
      index: '03',
      name: 'Surface',
      duration: 'Week 3–7',
      summary:
        'The chosen direction gets built out to every screen and every asset, reviewed in two rounds, with real content rather than lorem.'
    },
    {
      index: '04',
      name: 'Ship',
      duration: 'Week 7–10',
      summary:
        'Build, QA across devices, handoff files and guidelines — plus a window afterwards for the things that only surface in the wild.'
    }
  ]
};

export const CTA = {
  eyebrow: 'Contact',
  title: ['Have something', 'worth building?'],
  body: 'Tell me what you are making, who it is for, and when it needs to exist. I answer every message within two working days.',
  primary: { label: 'Start a project', href: `mailto:${CONTACT.email}` }
};
