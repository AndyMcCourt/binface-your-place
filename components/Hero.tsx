import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero-section px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
        <div>
          <p className="section-kicker">Less beige. More Binface.</p>
          <span className="hero-badge">Unofficial. Homemade. Joyfully daft.</span>
          <h1 className="mt-6 font-display text-7xl uppercase leading-none md:text-9xl">Binface Your Place</h1>
          <p className="mt-6 max-w-3xl text-2xl font-black text-white md:text-3xl">
            Help your street look a little more Binface, one window, bin and front garden at a time.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-silver">
            A homemade arts-and-crafts inspiration site for anyone who wants to add harmless intergalactic silliness to their own place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 hero-actions">
            <Link className="official-button" href="#ideas">Get ideas for your place</Link>
            <a className="official-button official-link" href="https://www.countbinface.com/">Visit Count Binface</a>
          </div>
        </div>
        <figure className="hero-visual">
          <img className="svg-illustration" src="/images/hero-street-scene.svg" alt="Illustration of a street decorated with homemade Binface-inspired signs, bunting and a wheelie bin podium." />
          <figcaption>Kitchen-table democracy, now visible from the pavement.</figcaption>
        </figure>
      </div>
    </section>
  );
}
