import ColorBends from '../ColorBends/ColorBends.jsx';
import './Backdrop.css';

/**
 * One light field for the whole site.
 *
 * It is fixed behind the layer stack, so it is not a hero decoration but a
 * constant source: fully open on the first and last layers, shaded by the
 * opaque sheets in between. `--field-open` is written by useLayerStack.
 */

const FIELD_LEFT = {
  rotation: 103,
  speed: 0.15,
  colors: ['#A855F7'],
  transparent: true,
  autoRotate: 0,
  scale: 0.9,
  frequency: 1.4,
  warpStrength: 0.9,
  mouseInfluence: 0,
  parallax: 0.15,
  noise: 0,
  iterations: 2,
  intensity: 1.7,
  bandWidth: 7
};

const FIELD_RIGHT = {
  rotation: 60,
  speed: 0.15,
  colors: ['#A855F7'],
  transparent: true,
  autoRotate: 0,
  scale: 0.9,
  frequency: 1.4,
  warpStrength: 0.9,
  mouseInfluence: 0,
  parallax: 0.4,
  noise: 0,
  iterations: 2,
  intensity: 1.7,
  bandWidth: 7.5
};

export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__bends backdrop__bends--left">
        <div className="backdrop__bends-inner">
          <ColorBends {...FIELD_LEFT} />
        </div>
      </div>

      <div className="backdrop__bends backdrop__bends--right">
        <div className="backdrop__bends-inner">
          <ColorBends {...FIELD_RIGHT} />
        </div>
      </div>

      <div className="backdrop__grain" />
      <div className="backdrop__vignette" />
    </div>
  );
}
