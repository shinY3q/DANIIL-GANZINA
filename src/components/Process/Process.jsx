import { PROCESS } from '../../data/site.js';
import './Process.css';

/** Layer 04 — how the work actually runs. */
export default function Process() {
  return (
    <section id="process" className="layer layer--panel process" aria-labelledby="process-title">
      <div className="layer__inner process__inner">
        <header className="process__head">
          <div>
            <p className="eyebrow" data-reveal>
              {PROCESS.eyebrow}
            </p>
            <h2 id="process-title" className="section-title" data-reveal style={{ '--reveal-delay': '80ms' }}>
              {PROCESS.title}
            </h2>
          </div>
          <p className="process__note" data-reveal style={{ '--reveal-delay': '160ms' }}>
            {PROCESS.note}
          </p>
        </header>

        <ol className="process__steps">
          {PROCESS.steps.map((step, i) => (
            <li
              key={step.name}
              className="process__step"
              data-reveal
              style={{ '--reveal-delay': `${140 + i * 110}ms` }}
            >
              <span className="process__marker" aria-hidden="true" />
              <span className="process__index">{step.index}</span>
              <h3 className="process__name">{step.name}</h3>
              <p className="process__duration">{step.duration}</p>
              <p className="process__summary">{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
