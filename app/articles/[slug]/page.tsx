import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Callout } from '@/components/Callout';
import { IdeaCard } from '@/components/IdeaCard';
import { articleBySlug, articles, relatedIdeaObjects } from '@/lib/articles';
import { getArticleActionSections } from '@/lib/practical';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = articleBySlug(params.slug);

  if (!article) notFound();

  const actions = getArticleActionSections(article);
  const relatedIdeas = relatedIdeaObjects(article);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">{article.category}</p>
        <h1 className="mt-3 font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm font-bold uppercase tracking-[.22em] text-silver/80">
          {article.date} · {article.readingTime}
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-silver sm:text-xl sm:leading-9">
          {article.summary}
        </p>
      </header>

      <Callout>{article.ruleReminder}</Callout>

      <section className="practical-section mt-8">
        <h2>Start with this tiny plan</h2>
        <ol>{actions.starter.map((item) => <li key={item}>{item}</li>)}</ol>
      </section>

      <div className="mt-8 space-y-5 sm:space-y-6">
        {article.body.map((paragraph, index) => (
          <section
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-5 shadow-glow sm:p-7"
            key={`${article.slug}-${index}`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bin/50 to-transparent" />
            <div className="flex gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bin/40 bg-bin/10 font-display text-lg text-bin sm:h-10 sm:w-10">
                {index + 1}
              </span>
              <p className="max-w-3xl text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">
                {paragraph}
              </p>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="practical-section">
          <h2>What this could look like</h2>
          <ul>{actions.scenarios.map((scenario) => <li key={scenario}>{scenario}</li>)}</ul>
        </div>
        <div className="practical-section copy-box">
          <h2>Copy-paste phrases</h2>
          <ul>{actions.wording.map((line) => <li key={line}>“{line}”</li>)}</ul>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="practical-section do-list">
          <h2>Do this</h2>
          <ul>{actions.doThis.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="practical-section dont-list">
          <h2>Don’t do this</h2>
          <ul>{actions.dontThis.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="practical-section mt-8">
        <h2>Useful next clicks</h2>
        <p>
          If you are unsure about boundaries, start with the <Link href="/rules/">Tiny Rulebook</Link> or read the <Link href="/guide/">guide</Link>. If you want to make something immediately, try one of the related ideas below.
        </p>
      </section>

      <h2 className="mt-12 font-display text-3xl">Related ideas you can actually make</h2>
      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {relatedIdeas.map((idea) => (
          <IdeaCard key={idea!.slug} idea={idea!} />
        ))}
      </div>
    </article>
  );
}
