import Backdrop from './components/Backdrop/Backdrop.jsx';
import Contact from './components/Contact/Contact.jsx';
import Hero from './components/Hero/Hero.jsx';
import LayerIndex from './components/LayerIndex/LayerIndex.jsx';
import Manifesto from './components/Manifesto/Manifesto.jsx';
import Nav from './components/Nav/Nav.jsx';
import Process from './components/Process/Process.jsx';
import Services from './components/Services/Services.jsx';
import Work from './components/Work/Work.jsx';
import { LAYERS } from './data/site.js';
import useLayerStack from './hooks/useLayerStack.js';
import useReveal from './hooks/useReveal.js';

const Dwell = () => <span className="dwell" aria-hidden="true" />;

/**
 * LAYERS OF LIGHT
 *
 * One light field is fixed behind the page. Layers 00 and 05 leave it open;
 * the sheets between them are opaque and slide over one another, each cut on
 * the same diagonal as the DG monogram so the layer below shows through the
 * notch during the pass.
 */
export default function App() {
  const active = useLayerStack();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Backdrop />
      <Nav activeId={LAYERS[active]?.id} />
      <LayerIndex active={active} />

      {/*
        The sticky stack. Each sheet is followed by a dwell spacer — the scroll
        distance you get to read it before the next sheet slides over.
        Contact sits outside the stack so the light field reopens behind it.
      */}
      <main id="main" className="layers">
        <Hero />
        <Dwell />
        <Manifesto />
        <Dwell />
        <Work />
        <Dwell />
        <Services />
        <Dwell />
        <Process />
        <Dwell />
      </main>

      <Contact />
    </>
  );
}
