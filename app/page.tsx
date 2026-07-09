import { Hero } from '@/components/Hero';
import { IdeaCard } from '@/components/IdeaCard';
import { publicAsset } from '@/lib/config';
import { ideas } from '@/lib/ideas';

const streetCards = [
  ['One window helps', 'A single handmade sign in a window is enough to make a street feel a little less beige.'],
  ['One bin helps', 'A wheelie bin already has the correct constitutional shape. It merely needs a podium, a slogan and a sense of destiny.'],
  ['One frontage helps', 'A door, porch, fence or garden can become a tiny act of visible silliness. Keep it friendly, removable and yours.'],
];

const projectCards = [
  ['Foil Star Window Constellation', 'Window stars', 'before-after-window.svg', 'Hang foil stars at different heights to make the glass feel like mission control.'],
  ['Cardboard Rocket Window', 'Window rocket', 'window-binface.svg', 'Build a foil-bodied rocket with a red nose cone, fins and a round porthole.'],
  ['Space Bunting Garland', 'Fence bunting', 'fence-bunting.svg', 'String silver, black and cardboard triangles across your own fence or window.'],
  ['Front Garden Rocket Launch', 'Launchpad', 'front-garden-moon-landing.svg', 'Make a standing rocket centrepiece with a foil cone and oversized shiny fins.'],
  ['Wheelie Bin Space Station', 'Bin station', 'wheelie-bin-podium.svg', 'Add removable panels, stars, a planet badge and pretend telescope tubes.'],
  ['Flying Saucer and Alien', 'UFO', 'garden-moon-landing.svg', 'Create a tiny foil saucer with a clear dome and green alien pilot.'],
  ['Public Cheerfulness Placards', 'Placards', 'fence-public-cheerfulness.svg', 'Paint friendly cardboard signs with one bold slogan and a few foil stars.'],
];

const lookBook = [
  ['Window poster', 'Paper slogan, foil stars, visible from the pavement.', 'window-binface.svg'],
  ['Bin podium', 'One wheelie bin. One cardboard lectern. Infinite authority.', 'wheelie-bin-podium.svg'],
  ['Door banner', 'A temporary welcome to mild constitutional chaos.', 'front-door-banner.svg'],
  ['Fence bunting', 'Flags, planets and signs on your own fence.', 'fence-bunting.svg'],
  ['Garden scene', 'A tiny moon landing for one heroic household bin.', 'garden-moon-landing.svg'],
  ['Porch HQ', 'Arrows, badges and deeply unserious civic energy.', 'porch-campaign-hq.svg'],
];

const beforeAfter = [
  ['Before: normal window', 'After: window of mild defiance', 'before-after-window.svg'],
  ['Before: ordinary bin', 'After: bin with destiny', 'before-after-bin.svg'],
  ['Before: quiet fence', 'After: fence of public cheerfulness', 'before-after-fence.svg'],
];

const materials = ['cardboard', 'paper', 'foil', 'string', 'tape', 'felt tips', 'delivery boxes', 'reusable decorations', 'window-safe materials', 'paper plates', 'bottle tops', 'wrapping paper', 'anything silver'];
const materialIcons = ['▰', '▤', '✦', '〰', '▱', '✎', '▣', '★', '▢', '◯', '●', '▧', '✧'];

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-6xl px-4">
        <section className="unofficial-note">
          <div>
            <p className="section-kicker">Make your place count.</p>
            <h2>A quick note from Earth</h2>
            <p>Binface Your Place is unofficial, independent and unaffiliated with Count Binface. It is a collection of arts-and-crafts ideas for decorating your own place. For official Count Binface news, policies, merch and intergalactic leadership, visit the official Count Binface website.</p>
            <p className="mt-3 text-sm font-bold text-white">This site is about Binface-inspired home decoration ideas, not current campaign updates.</p>
          </div>
          <a className="official-button official-link" href="https://www.countbinface.com/">Official Count Binface website</a>
        </section>


        <section id="ideas" className="py-16 scroll-mt-24" aria-labelledby="home-ideas-heading">
          <p className="section-kicker">Ideas hub</p>
          <h2 id="home-ideas-heading" className="section-title">Ideas for cheerful ridiculousness</h2>
          <p className="section-intro">Pick a tiny spectacle, add cardboard, and let your front window wonder how it got elected. Static inspiration only: no kits, submissions, targeting or public-property sticker albums.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea) => <IdeaCard key={idea.slug} idea={idea} />)}
          </div>
        </section>

        <section className="street-section">
          <p className="section-kicker">For windows, bins, fences and other democratic surfaces.</p>
          <h2>Your street, but more Binface</h2>
          <p>The idea is simple: ordinary places become slightly less ordinary. A window gets a handmade sign. A bin gets promoted. A fence grows a manifesto. A front garden becomes a tiny stage for democratic weirdness.</p>
          <p>No grand plan. No official kit. Just people making their own bit of the street look funnier, brighter and more Binface.</p>
          <div className="craft-grid">
            {streetCards.map(([title, text], index) => <article className="craft-card" key={title}><span className="sticker-label">{['A small act of civic daftness.', 'Your bin has waited long enough.', 'Visible from the pavement. Built from the recycling.'][index]}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="before-after-strip" aria-labelledby="before-after-heading">
          <h2 id="before-after-heading">Before and after</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {beforeAfter.map(([before, after, image]) => <article className="before-after-card" key={before}><img className="svg-illustration" src={publicAsset(`/images/${image}`)} alt="" /><div><span>{before}</span><strong>{after}</strong></div></article>)}
          </div>
        </section>

        <section className="craft-panel">
          <p className="section-kicker">Kitchen-table democracy.</p>
          <h2>Make your place count</h2>
          <p>This is for anyone who wants to show support in the most British way possible: by making something out of cardboard and putting it in a window.</p>
          <p>Think paper posters, foil helmets, handmade rosettes, bin podiums, garden signs, temporary bunting, cardboard planets and front-door nonsense.</p>
          <span className="sticker-label">Visible from the street. Made at the kitchen table.</span>
        </section>

        <section className="py-16">
          <p className="section-kicker">Inspiration board</p>
          <h2 className="section-title">The look book</h2>
          <p className="section-intro">Start with something small. A window. A bin. A fence. A sign. Then let the nonsense spread politely.</p>
          <div className="lookbook-grid">
            {lookBook.map(([label, caption, image]) => <figure className="lookbook-tile" key={label}><img className="svg-illustration" src={publicAsset(`/images/${image}`)} alt="" /><figcaption><strong>{label}</strong><span>{caption}</span></figcaption></figure>)}
          </div>
        </section>

        <section className="craft-wave">
          <p className="section-kicker">When politics gets weird, cardboard gets useful.</p>
          <h2>The dream: a craft wave</h2>
          <p>A few windows become a row. A row becomes a street. A street becomes a place where everyone knows something deeply silly is happening.</p>
          <p>That is the spirit of Binface Your Place: harmless, homemade, visible-from-the-pavement support.</p>
          <span className="sticker-label">Many homes. Many bins. Zero beige.</span>
        </section>

        <section className="craft-panel">
          <p className="section-kicker">Foil, felt tips and mild constitutional chaos.</p>
          <h2>Make it yourself</h2>
          <p>No special kit required. Raid the recycling, find the felt tips, rescue some cardboard and make something joyfully daft.</p>
          <div className="material-chip-grid">{materials.map((item, index) => <span className="material-chip" key={item}><b>{materialIcons[index]}</b>{item}</span>)}</div>
          <p className="mt-5 font-bold text-white">Keep it removable, harmless and attached only to places you own or have permission to decorate.</p>
        </section>

        <section className="py-16">
          <p className="section-kicker">A street-sized wave of cardboard nonsense</p>
          <h2 className="section-title">Homemade project cards</h2>
          <div className="craft-grid">
            {projectCards.map(([title, label, image, text]) => <article className="visual-card" key={title}><div className="visual-card__image"><img className="svg-illustration" src={publicAsset(`/images/${image}`)} alt="" /></div><div className="visual-card__body"><span className="visual-card__label">{label}</span><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </section>

        <section className="craft-panel mb-8">
          <p className="section-kicker">Keep it friendly</p>
          <h2>Keep it kind and removable</h2>
          <p>Binface Your Place is about decorating your own space for fun. Keep it temporary, removable and friendly. Use your own home, your own window, your own bin, your own fence or somewhere you have permission to decorate.</p>
          <p>The best version of this is cheerful, visible and harmless: something that makes people smile as they walk past, without creating mess or bother for anyone else.</p>
          <p className="tiny-rule-goblin">The Tiny Rule Goblin says: ask permission, use common sense, and let the council sleep peacefully tonight.</p>
        </section>
      </main>
    </>
  );
}
