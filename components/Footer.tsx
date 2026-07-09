import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/15 px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-display text-2xl">BINFACE YOUR PLACE</p>
          <p className="mt-2 text-sm text-silver">
            Binface Your Place is an unofficial supporter decoration project. It is not run by or affiliated with Count Binface. For the real Count Binface, official campaign updates, posters, merch and intergalactic leadership, visit countbinface.com.
          </p>
          <p className="mt-2 text-sm font-bold text-white">Make your place look like it backs Count Binface. One window, bin, fence and front garden at a time.</p>
        </div>
        <nav className="flex flex-wrap items-start gap-4 text-sm">
          <a className="official-link" href="https://www.countbinface.com/">Official Count Binface</a>
          <a className="official-link" href="https://countbinface.com/poster">Printable Poster</a>
          <Link href="/rules/">Decoration Rules</Link>
          <Link href="/about/">About This Site</Link>
          <a className="official-button official-link" href="https://www.countbinface.com/">Visit the official Count Binface</a>
        </nav>
      </div>
    </footer>
  );
}
