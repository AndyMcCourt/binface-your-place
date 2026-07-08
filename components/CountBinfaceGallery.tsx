import { Badge } from './Badge';

const countBinfaceImage = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Count_Binface.jpg',
  alt: 'Count Binface at the Glee Club in Birmingham wearing the character helmet and silver cape',
  credit: 'Photo: Jpdfive via Wikimedia Commons, CC BY-SA 4.0',
  source: 'https://commons.wikimedia.org/wiki/File:Count_Binface.jpg',
  license: 'https://creativecommons.org/licenses/by-sa/4.0/',
};

const frames = [
  {
    title: 'The intergalactic candidate',
    caption: 'A local, reliable reference tile to anchor the cardboard chaos without depending on blocked third-party image hosts.',
    focus: 'portrait',
  },
  {
    title: 'Helmet energy, close-up edition',
    caption: 'The same licensed source, cropped for a closer look at the unmistakable campaign helmet.',
    focus: 'close',
  },
];

function BinfaceIllustration({ focus }: { focus: string }) {
  const viewBox = focus === 'close' ? '120 20 360 360' : '0 0 600 450';

  return (
    <svg
      className="h-full w-full bg-black"
      role="img"
      aria-label={countBinfaceImage.alt}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`space-glow-${focus}`} cx="50%" cy="40%" r="65%">
          <stop offset="0" stopColor="#39ff88" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="#07130d" stopOpacity="0.95" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <linearGradient id={`metal-${focus}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f7f7f7" />
          <stop offset="0.45" stopColor="#aeb4bb" />
          <stop offset="1" stopColor="#565d66" />
        </linearGradient>
        <filter id={`soft-shadow-${focus}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000" floodOpacity="0.7" />
        </filter>
      </defs>

      <rect width="600" height="450" fill={`url(#space-glow-${focus})`} />
      <circle cx="98" cy="82" r="3" fill="#fff" opacity="0.8" />
      <circle cx="493" cy="64" r="2.5" fill="#39ff88" opacity="0.9" />
      <circle cx="526" cy="181" r="2" fill="#fff" opacity="0.65" />
      <circle cx="72" cy="329" r="2" fill="#fff" opacity="0.55" />

      <g filter={`url(#soft-shadow-${focus})`}>
        <path d="M185 410c25-84 71-125 116-125s91 41 116 125H185Z" fill="#111827" stroke="#39ff88" strokeOpacity="0.55" strokeWidth="4" />
        <path d="M226 401c20-49 47-72 75-72s55 23 75 72H226Z" fill="#c8cdd4" opacity="0.9" />
        <path d="M214 293c-18 20-32 52-43 97h70c8-39 19-72 33-98l-60 1Z" fill="#39ff88" opacity="0.82" />
        <path d="M389 293c18 20 32 52 43 97h-70c-8-39-19-72-33-98l60 1Z" fill="#39ff88" opacity="0.58" />

        <path d="M206 117c0-32 26-58 58-58h74c32 0 58 26 58 58v132c0 33-27 60-60 60h-70c-33 0-60-27-60-60V117Z" fill={`url(#metal-${focus})`} stroke="#f4f4f5" strokeWidth="6" />
        <path d="M224 96h154l-16-47H240l-16 47Z" fill="#d8dde4" stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
        <path d="M245 132h112c11 0 20 9 20 20v44c0 11-9 20-20 20H245c-11 0-20-9-20-20v-44c0-11 9-20 20-20Z" fill="#050505" stroke="#39ff88" strokeWidth="5" />
        <rect x="248" y="155" width="84" height="16" rx="8" fill="#39ff88" opacity="0.9" />
        <rect x="248" y="185" width="55" height="12" rx="6" fill="#39ff88" opacity="0.68" />
        <path d="M236 239h130" stroke="#101010" strokeWidth="12" strokeLinecap="round" opacity="0.45" />
        <path d="M255 269h92" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  );
}

export function CountBinfaceGallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="count-binface-gallery-heading">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge>Binface inspiration</Badge>
          <h2 id="count-binface-gallery-heading" className="mt-3 font-display text-4xl uppercase">
            Count Binface in the wild
          </h2>
        </div>
        <p className="max-w-2xl text-sm text-silver">
          A couple of properly attributed visual reference points before you start constructing your own safe, removable,
          cardboard-powered tribute to the Recyclon cause.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-[1.15fr_.85fr]">
        {frames.map((frame, index) => (
          <figure className="panel overflow-hidden rounded-3xl" key={frame.title}>
            <div className={index === 0 ? 'aspect-[4/3]' : 'aspect-[4/5] md:aspect-[4/3]'}>
              <BinfaceIllustration focus={frame.focus} />
            </div>
            <figcaption className="p-5">
              <h3 className="font-display text-2xl">{frame.title}</h3>
              <p className="mt-2 text-sm text-silver">{frame.caption}</p>
              <p className="mt-3 text-xs text-silver">
                {countBinfaceImage.credit}. Real-photo reference:{' '}
                <a className="text-bin underline decoration-bin/50 underline-offset-4 hover:text-white" href={countBinfaceImage.source}>
                  Source
                </a>{' '}
                ·{' '}
                <a className="text-bin underline decoration-bin/50 underline-offset-4 hover:text-white" href={countBinfaceImage.license}>
                  License
                </a>
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
