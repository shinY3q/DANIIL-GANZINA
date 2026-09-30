import { CONTACT, HERO } from '../../data/site.js';
import './Hero.css';

const FULL_LOGO = '/images/daniil-ganzina-logo.png';

function ArrowIcon() {
  return (
    <svg className="btn__arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

/** Layer 00 — the light field is fully open here. */
export default function Hero() {
  return (
    <section id="top" className="layer layer--open hero" aria-labelledby="hero-title">
      <div className="layer__inner hero__inner">
        <h1 id="hero-title" className="visually-hidden">
          {HERO.title}
        </h1>

        <div className="hero__logo-frame">
          <img className="hero__logo" src={FULL_LOGO} alt="Daniil Ganzina" />
        </div>

        <p className="hero__subtitle">{HERO.subtitle}</p>
        <p className="hero__description">{HERO.description}</p>

        <div className="hero__actions">
          <a className="btn btn--primary chamfer" href="#work">
            <span>View work</span>
            <ArrowIcon />
          </a>
          <a className="btn chamfer" href={`mailto:${CONTACT.email}`}>
            <span>Let&apos;s connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}
