import { useEffect, useState } from 'react';

import { CONTACT, NAV } from '../../data/site.js';
import './Nav.css';

const NAV_LOGO = '/images/daniil-ganzina-logo-nav.png';

export default function Nav({ activeId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = event => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <a className="nav__mark" href="#top" aria-label="Daniil Ganzina — back to top">
          <span className="nav__mark-crop">
            <img src={NAV_LOGO} alt="" />
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'is-active' : undefined}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              <span className="nav__links-index">{item.index}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav__burger${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={`nav__sheet${menuOpen ? ' is-open' : ''}`}
        inert={!menuOpen}
      >
        <nav aria-label="Mobile">
          {NAV.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              <span>{item.index}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__sheet-foot">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <p>{CONTACT.location}</p>
        </div>
      </div>
    </>
  );
}
