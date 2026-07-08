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
          One properly attributed photo of the intergalactic candidate in the wild.
        </p>
      </div>
      <div>
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
      </div>
    </section>
  );
}
