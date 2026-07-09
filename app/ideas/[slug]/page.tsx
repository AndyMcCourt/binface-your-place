import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Callout } from '@/components/Callout';
import { ideaBySlug, ideas } from '@/lib/ideas';
import { getIdeaPractical } from '@/lib/practical';

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export default function IdeaDetail({ params }: { params: { slug: string } }) {
  const idea = ideaBySlug(params.slug);

  if (!idea) notFound();

  const practical = getIdeaPractical(idea);
  const relatedIdeas = practical.relatedIdeas
    .map((slug) => ideaBySlug(slug))
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="panel rounded-[2rem] p-6 sm:p-8">
        <p className="eyebrow">{idea.category}</p>
        <h1 className="mt-3 font-display text-4xl leading-none sm:text-6xl">{idea.title}</h1>
        <p className="mt-4 text-xl leading-8 text-silver">{idea.description}</p>
        <p className="mt-5 text-lg leading-8 text-white">{practical.intro}</p>
        <figure className="idea-reference-image mt-6">
          <img src={idea.image} alt={idea.imageAlt} />
          <figcaption>Reference image for this idea</figcaption>
        </figure>
      </header>

      <section className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="info-tile"><span>Time needed</span><b>{practical.time}</b></div>
        <div className="info-tile"><span>Cost</span><b>{practical.cost}</b></div>
        <div className="info-tile"><span>Difficulty</span><b>{practical.difficulty}</b></div>
      </section>

      <Callout>{idea.ruleReminder}</Callout>

      <div className="mt-8 grid gap-6">
        <section className="practical-section">
          <h2>Best for</h2>
          <ul>{practical.bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="practical-section">
          <h2>You’ll need</h2>
          <ul className="material-list compact-list">{practical.materials.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="practical-section">
          <h2>How to make it</h2>
          <ol>{practical.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        <section className="practical-section copy-box">
          <h2>Copy this wording</h2>
          <ul>{practical.wording.map((line) => <li key={line}>“{line}”</li>)}</ul>
        </section>

        <section className="practical-section">
          <h2>Make it more ridiculous</h2>
          <ul>{practical.upgrades.map((upgrade) => <li key={upgrade}>{upgrade}</li>)}</ul>
        </section>

        <section className="practical-section">
          <h2>Keep it sensible</h2>
          <ul>{practical.sensible.map((note) => <li key={note}>{note}</li>)}</ul>
          <p className="mt-4">
            For more boundaries that keep the nonsense cheerful, read the <Link href="/rules/">Tiny Rulebook</Link> or the <Link href="/guide/">guide</Link>.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="practical-section">
            <h2>Photo tip</h2>
            <p>{practical.photoTip}</p>
          </div>
          <div className="practical-section">
            <h2>How to remove it</h2>
            <ul>{practical.removal.map((step) => <li key={step}>{step}</li>)}</ul>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="practical-section tiny-version">
            <h2>Tiny version</h2>
            <p>{practical.tinyVersion}</p>
          </div>
          <div className="practical-section big-version">
            <h2>Big version</h2>
            <p>{practical.bigVersion}</p>
          </div>
        </section>

        <section className="practical-section">
          <h2>Why it works</h2>
          <div className="prose prose-invert max-w-none">{idea.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        {relatedIdeas.length > 0 && (
          <section className="practical-section">
            <h2>Similar ideas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedIdeas.map((related) => <Link className="official-button" href={`/ideas/${related!.slug}/`} key={related!.slug}>{related!.title}</Link>)}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
