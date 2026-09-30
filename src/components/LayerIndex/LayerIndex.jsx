import { LAYERS } from '../../data/site.js';
import { sectionHref } from '../../utils/navigation.js';
import './LayerIndex.css';

/** The right-hand rail: which sheet of the stack you are standing on. */
export default function LayerIndex({ active }) {
  return (
    <aside className="rail" aria-label="Layer navigation">
      <span className="rail__label">Layer</span>

      <ol className="rail__list">
        {LAYERS.map((layer, i) => (
          <li key={layer.id}>
            <a
              href={sectionHref(layer.id)}
              data-section={layer.id}
              className={i === active ? 'is-active' : undefined}
              aria-current={i === active ? 'true' : undefined}
            >
              <span className="rail__index">{layer.index}</span>
              <span className="rail__name">{layer.label}</span>
            </a>
          </li>
        ))}
      </ol>

      <span className="rail__track" aria-hidden="true">
        <span className="rail__fill" />
      </span>
    </aside>
  );
}
