import { CONTACT, CTA } from '../../data/site.js';
import { sectionHref } from '../../utils/navigation.js';
import './Contact.css';

function ArrowIcon({ className = 'btn__arrow' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

/**
 * Layer 05 — the closing layer.
 * It sits outside the sticky stack and is transparent, so the light field
 * that opened the page comes back up through it.
 */
export default function Contact() {
  return (
    <section id="contact" className="layer layer--open contact" aria-labelledby="contact-title">
      <div className="layer__inner contact__inner">
        <p className="eyebrow" data-reveal>
          {CTA.eyebrow}
        </p>

        <h2 id="contact-title" className="contact__title">
          {CTA.title.map((line, i) => (
            <span key={line} data-reveal style={{ '--reveal-delay': `${i * 110}ms` }}>
              {line}
            </span>
          ))}
        </h2>

        <p className="lead contact__body" data-reveal style={{ '--reveal-delay': '220ms' }}>
          {CTA.body}
        </p>

        <a className="contact__email" href={CTA.primary.href} data-reveal style={{ '--reveal-delay': '280ms' }}>
          <span>{CONTACT.email}</span>
          <ArrowIcon className="contact__email-arrow" />
        </a>

        <ul className="contact__socials" data-reveal style={{ '--reveal-delay': '340ms' }}>
          {CONTACT.socials.map(social => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer noopener">
                <span className="contact__social-label">{social.label}</span>
                <span className="contact__social-handle">{social.handle}</span>
                <ArrowIcon className="contact__social-arrow" />
              </a>
            </li>
          ))}
        </ul>

        <footer className="contact__footer">
          <p>&copy; {new Date().getFullYear()} Daniil Ganzina</p>
          <p>{CONTACT.location}</p>
          <a href={sectionHref('top')} data-section="top">
            Back to top
            <ArrowIcon className="contact__top-arrow" />
          </a>
        </footer>
      </div>
    </section>
  );
}
