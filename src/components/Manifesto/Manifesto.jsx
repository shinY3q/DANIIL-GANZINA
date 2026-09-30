import { MANIFESTO } from '../../data/site.js';
import './Manifesto.css';

/** Layer 01 — the statement. */
export default function Manifesto() {
  return (
    <section id="about" className="layer layer--panel manifesto" aria-labelledby="about-title">
      <div className="layer__inner manifesto__inner">
        <div className="manifesto__head">
          <p className="eyebrow" data-reveal>
            {MANIFESTO.eyebrow}
          </p>

          <h2 id="about-title" className="manifesto__title">
            {MANIFESTO.title.map((line, i) => (
              <span className="manifesto__line" key={line}>
                <span
                  className={i === MANIFESTO.accentLine ? 'is-accent' : undefined}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 110}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h2>
        </div>

        <div className="manifesto__body">
          {MANIFESTO.body.map((paragraph, i) => (
            <p className="lead" key={paragraph} data-reveal style={{ '--reveal-delay': `${i * 120}ms` }}>
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="manifesto__stats">
          {MANIFESTO.stats.map((stat, i) => (
            <div className="manifesto__stat" key={stat.label} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
              <dt>{stat.label}</dt>
              <dd>
                {stat.value}
                <span>{stat.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
