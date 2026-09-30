import { WORK } from '../../data/site.js';
import { SECTION_IDS, sectionHref } from '../../utils/navigation.js';
import './Work.css';

function ArrowIcon() {
  return (
    <svg className="work__arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

/** Layer 02 — the work index. */
export default function Work() {
  return (
    <section id="work" className="layer layer--panel work" aria-labelledby="work-title">
      <div className="layer__inner work__inner">
        <header className="work__head">
          <div>
            <p className="eyebrow" data-reveal>
              {WORK.eyebrow}
            </p>
            <h2 id="work-title" className="section-title" data-reveal style={{ '--reveal-delay': '80ms' }}>
              {WORK.title}
            </h2>
          </div>
          <p className="work__note" data-reveal style={{ '--reveal-delay': '160ms' }}>
            {WORK.note}
          </p>
        </header>

        <ol className="work__list">
          {WORK.projects.map((project, i) => (
            <li
              key={project.name}
              className={`work__row work__row--${project.tone}`}
              data-reveal
              style={{ '--reveal-delay': `${140 + i * 90}ms` }}
            >
              <a
                href={SECTION_IDS.includes(project.href) ? sectionHref(project.href) : project.href}
                data-section={SECTION_IDS.includes(project.href) ? project.href : undefined}
                className="work__link"
              >
                <span className="work__index">{project.index}</span>

                <span className="work__title">
                  <span className="work__name">{project.name}</span>
                  <span className="work__kind">{project.kind}</span>
                </span>

                <span className="work__summary">{project.summary}</span>

                <span className="work__tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>

                <span className="work__meta">
                  <span className="work__year">{project.year}</span>
                  <ArrowIcon />
                </span>

                <span className="work__glow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
