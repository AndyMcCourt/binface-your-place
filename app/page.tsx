import { Hero } from '@/components/Hero';
import { IdeaCard } from '@/components/IdeaCard';
import { ArticleCard } from '@/components/ArticleCard';
import { ideas } from '@/lib/ideas';
import { latestArticle } from '@/lib/articles';
import { DailyPrompt } from '@/components/DailyPrompt';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <p className="panel rounded-3xl p-6 text-lg text-silver">
            Clacton has windows. Clacton has gardens. Clacton has bins with untapped leadership potential. Binface Your Place is a sparkly inspiration hub for people who want to turn places they control into tiny festivals of democratic nonsense, cardboard grandeur and paperwork-aware joy.
          </p>
          <aside className="panel rounded-3xl border-bin/40 p-6">
            <p className="eyebrow">Who is Count Binface?</p>
            <h2 className="mt-3 font-display text-3xl">An intergalactic space warrior with a very tidy manifesto.</h2>
            <p className="mt-3 text-silver">
              Count Binface is the bin-helmeted political character created by comedian Jonathan David Harvey: leader of the Recyclons, champion of joyful satire, and veteran of election battles against prime ministers, mayors and assorted Earthlings.
            </p>
            <p className="mt-3 text-silver">
              Next stop: Clacton, where Binface intends to face Nigel Farage in the expected by-election. Consider this your friendly permission slip to answer serious politics with safe, silly, cardboard-powered brilliance.
            </p>
          </aside>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <IdeaCard idea={ideas[0]} />
          <ArticleCard article={latestArticle} />
          <IdeaCard idea={ideas[6]} />
          <IdeaCard idea={ideas[1]} />
        </div>
        <div className="mt-8">
          <DailyPrompt />
        </div>
      </section>
    </>
  );
}
