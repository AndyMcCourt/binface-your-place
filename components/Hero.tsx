import Link from 'next/link';
import { publicAsset } from '@/lib/config';

export function Hero() {
  return (
    <section className="hero-section px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
        <div>
          <p className="section-kicker">Bye By-election. Hello Binface.</p>
          <span className="hero-badge">Unofficial Supporter Decoration Project</span>
          <h1 className="mt-6 font-display text-7xl uppercase leading-none md:text-9xl">Make Your Place Count Binface</h1>
          <p className="mt-6 max-w-3xl text-2xl font-black text-white md:text-3xl">
            Turn your window, bin, fence or front garden into a homemade show of support for Count Binface.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-silver">
            No official kit. No campaign permission slip. Just cardboard, foil, democracy and mild intergalactic nonsense.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 hero-actions">
            <Link className="official-button" href="#ideas">Get decoration ideas</Link>
            <a className="official-button official-link" href="https://www.countbinface.com/">Visit the real Count Binface</a>
          </div>
        </div>
        <figure className="hero-visual">
          <img className="svg-illustration" src={publicAsset('/images/file_0000000059a47246adb2ad8b0483caa8.png')} alt="Street scene decorated with homemade Count Binface-supporting signs, bunting and a wheelie bin podium." />
          <figcaption>Kitchen-table democracy, now visible from the pavement.</figcaption>
        </figure>
      </div>
    </section>
  );
}
