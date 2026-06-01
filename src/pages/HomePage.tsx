import Hero from '../components/Hero';
import ResinaEpoxiSection from '../components/ResinaEpoxiSection';
import ComoFunciona from '../components/ComoFunciona';
import FAQ from '../components/FAQ';
import { resinaEpoxi } from '../data/products';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="resina-epoxi" className="scroll-mt-24">
        <ResinaEpoxiSection title="Resina Epóxi" products={resinaEpoxi} />
      </div>
      <ComoFunciona />
      <FAQ />
    </>
  );
}
