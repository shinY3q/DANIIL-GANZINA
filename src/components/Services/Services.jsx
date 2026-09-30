import { SERVICES } from '../../data/site.js';
import './Services.css';

/** Layer 03 — capabilities, as four chamfered plates. */
export default function Services() {
  return (
    <section id="services" className="layer layer--panel services" aria-labelledby="services-title">
      <div className="layer__inner services__inner">
        <header className="services__head">
          <p className="eyebrow" data-reveal>
            {SERVICES.eyebrow}
          </p>
          <h2 id="services-title" className="section-title" data-reveal style={{ '--reveal-delay': '80ms' }}>
            {SERVICES.title}
          </h2>
        </header>

        <ul className="services__grid">
          {SERVICES.items.map((item, i) => (
            <li
              key={item.name}
              className="services__card chamfer"
              data-reveal
              style={{ '--reveal-delay': `${120 + i * 90}ms` }}
            >
              <span className="services__index">{item.index}</span>
              <h3 className="services__name">{item.name}</h3>
              <p className="services__summary">{item.summary}</p>

              <ul className="services__deliverables">
                {item.deliverables.map(deliverable => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
