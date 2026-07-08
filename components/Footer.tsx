import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/15 px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-display text-2xl">BINFACE YOUR PLACE</p>
          <p className="mt-2 text-sm text-silver">
            Binface Your Place is unofficial and unaffiliated with Count Binface. It is a fan-made collection of arts-and-crafts ideas for harmless home decoration. For official Count Binface news, policies, merch and intergalactic leadership, visit the official Count Binface website.
          </p>
          <p className="mt-2 text-sm font-bold text-white">Your street, but more Binface. One window, bin, fence and front garden at a time.</p>
        </div>
        <nav className="flex flex-wrap items-start gap-4 text-sm">
          <Link href="/about/">About & Privacy</Link>
          <Link href="/rules/">Rules</Link>
          <a className="official-button official-link" href="https://www.countbinface.com/">Official Count Binface website</a>
          <a className="official-link" href="https://www.countbinface.com/">See the real Count Binface</a>
        </nav>
      </div>
    </footer>
  );
}
