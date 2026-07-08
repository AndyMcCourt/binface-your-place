import { Badge } from './Badge';

const countBinfaceImage = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Count_Binface.jpg',
  alt: 'Count Binface at the Glee Club in Birmingham wearing the character helmet and silver cape',
  credit: 'Photo: Jpdfive via Wikimedia Commons, CC BY-SA 4.0',
  source: 'https://commons.wikimedia.org/wiki/File:Count_Binface.jpg',
  license: 'https://creativecommons.org/licenses/by-sa/4.0/',
};

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
          One properly attributed photo, plus a separate no-repeat idea card before you start constructing your own
          safe, removable, cardboard-powered tribute to the Recyclon cause.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-[1.15fr_.85fr]">
        <figure className="panel group overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/3]">
            <img
              alt={countBinfaceImage.alt}
              className="h-full w-full object-cover object-[50%_36%] transition duration-500 group-hover:scale-[1.02]"
              src={countBinfaceImage.src}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
              <h3 className="font-display text-2xl text-white drop-shadow">The intergalactic candidate</h3>
            </div>
            <p className="sr-only">
              {countBinfaceImage.credit}. Source: {countBinfaceImage.source}. License: {countBinfaceImage.license}.
            </p>
          </div>
        </figure>

        <article className="panel relative flex min-h-[22rem] overflow-hidden rounded-3xl p-6 md:min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(57,255,136,.28),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(255,214,10,.22),transparent_24%),linear-gradient(135deg,#07150d_0%,#020302_55%,#111_100%)]" />
          <div className="absolute -right-10 top-6 h-40 w-40 rounded-full border border-neon/30" />
          <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-black/75 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-8">
            <Badge>Display prompt</Badge>
            <div>
              <div className="mb-6 text-7xl" aria-hidden="true">
                🗑️✨
              </div>
              <h3 className="font-display text-3xl text-white drop-shadow">Make your own Binface scene</h3>
              <p className="mt-4 text-sm text-silver">
                Try a window certificate, a wheelie-bin podium or a cereal-box helmet — something original that does
                not reuse the same photo twice.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
