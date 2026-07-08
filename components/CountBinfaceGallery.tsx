import { Badge } from './Badge';

const countBinfaceImage = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Count_Binface.jpg',
  alt: 'Count Binface at the Glee Club in Birmingham wearing the character helmet and silver cape',
  credit: 'Photo: Jpdfive via Wikimedia Commons, CC BY-SA 4.0',
  source: 'https://commons.wikimedia.org/wiki/File:Count_Binface.jpg',
  license: 'https://creativecommons.org/licenses/by-sa/4.0/',
};

const frames = [
  {
    title: 'The intergalactic candidate',
    caption: 'A real Count Binface portrait to anchor the cardboard chaos in the actual bin-helmeted legend.',
    className: 'object-cover object-center',
  },
  {
    title: 'Helmet energy, close-up edition',
    caption: 'Same licensed source, cropped by the browser for a punchier “decorate your domain” inspiration tile.',
    className: 'object-cover object-top',
  },
];

export function CountBinfaceGallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="count-binface-gallery-heading">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge>Actual Binface sightings</Badge>
          <h2 id="count-binface-gallery-heading" className="mt-3 font-display text-4xl uppercase">
            Count Binface in the wild
          </h2>
        </div>
        <p className="max-w-2xl text-sm text-silver">
          A couple of responsibly attributed visual reference points before you start constructing your own safe,
          removable, cardboard-powered tribute to the Recyclon cause.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-[1.15fr_.85fr]">
        {frames.map((frame, index) => (
          <figure className="panel overflow-hidden rounded-3xl" key={frame.title}>
            <div className={index === 0 ? 'aspect-[4/3]' : 'aspect-[4/5] md:aspect-[4/3]'}>
              <img
                src={countBinfaceImage.src}
                alt={countBinfaceImage.alt}
                className={`h-full w-full ${frame.className}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
            <figcaption className="p-5">
              <h3 className="font-display text-2xl">{frame.title}</h3>
              <p className="mt-2 text-sm text-silver">{frame.caption}</p>
              <p className="mt-3 text-xs text-silver">
                {countBinfaceImage.credit}.{' '}
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
