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
    imageClassName: 'object-[50%_36%]',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    title: 'Helmet energy, close-up edition',
    imageClassName: 'object-[50%_26%]',
    aspectClassName: 'aspect-[4/5] md:aspect-[4/3]',
  },
];

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
          A couple of properly attributed photos before you start constructing your own safe, removable,
          cardboard-powered tribute to the Recyclon cause.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-[1.15fr_.85fr]">
        {frames.map((frame) => (
          <figure className="panel group overflow-hidden rounded-3xl" key={frame.title}>
            <div className={`relative ${frame.aspectClassName}`}>
              <img
                alt={countBinfaceImage.alt}
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] ${frame.imageClassName}`}
                src={countBinfaceImage.src}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
                <h3 className="font-display text-2xl text-white drop-shadow">{frame.title}</h3>
              </div>
              <p className="sr-only">
                {countBinfaceImage.credit}. Source: {countBinfaceImage.source}. License: {countBinfaceImage.license}.
              </p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
