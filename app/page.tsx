import { Hero } from '@/components/Hero';

const streetCards = [
  ['One window helps', 'A single handmade sign in a window is enough to make a street feel a little less beige.'],
  ['One bin helps', 'A wheelie bin already has the correct constitutional shape. It merely needs a podium, a slogan and a sense of destiny.'],
  ['One frontage helps', 'A door, porch, fence or garden can become a tiny act of visible silliness. Keep it friendly, removable and yours.'],
];

const binfaceIdeas = [
  ['Your Window', 'Turn a normal window into a glowing rectangle of Binface-inspired support. Try paper signs, cardboard slogans, foil stars and a heroic face peering out at local democracy.'],
  ['Your Wheelie Bin', 'The natural home of Binface energy. Add a removable cardboard podium, a tiny manifesto, a paper rosette or a sign declaring your bin ready for high office.'],
  ['Your Front Door', 'Give arrivals the sense that they are entering a harmless constitutional incident. Try a handmade poster, a temporary banner or a doormat message.'],
  ['Your Fence', 'A fence is just a manifesto that has not found its voice yet. Add bunting, signs, flags or a row of cardboard planets.'],
  ['Your Garden', 'Create a tiny outdoor scene: moon landing, press conference, embassy, campaign trail or one heroic bin addressing the shrubs.'],
  ['Your Porch', 'Make your porch look like a miniature campaign HQ from space using posters, cardboard arrows, foil, paper badges and absolutely no dignity.'],
];

const projectCards = [
  ['The Wheelie Bin Press Conference', 'Turn one innocent wheelie bin into a homemade press podium. Add a cardboard sign, a dramatic backdrop and the solemn air of an announcement nobody asked for.'],
  ['The Binface Embassy', 'Declare your porch, window or garden gate to be a tiny unofficial embassy of Binface-inspired nonsense. Add paper flags, handmade signs and unnecessary ceremony.'],
  ['The Front Garden Moon Landing', 'Use foil, cardboard, paper stars and one brave bin to create a low-budget lunar scene on your own front path.'],
  ['The Constitutionally Significant Doormat', 'Upgrade your doormat with a temporary handmade sign. Every visitor must cross from ordinary life into harmless civic silliness.'],
  ['A Manifesto for Sensible Lids', 'Make a tiny homemade manifesto for your bin. Suggested policies: tighter lids, better snacks, stronger cardboard and a decisive end to beige.'],
  ['The Window of Mild Defiance', 'Make a bold, homemade window display that says your household has chosen cardboard, silliness and intergalactic taste over ordinary beige living.'],
  ['The Fence of Public Cheerfulness', 'Turn your fence into a friendly row of signs, flags or planets. Nothing permanent. Nothing grumpy. Just enough nonsense for passers-by to notice.'],
];

const materials = ['cardboard', 'paper', 'foil', 'string', 'tape', 'felt tips', 'old delivery boxes', 'reusable decorations', 'removable window-safe materials', 'paper plates', 'bottle tops', 'leftover wrapping paper', 'anything silver'];

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-6xl px-4">
        <section className="unofficial-note">
          <div>
            <p className="section-kicker">Make your place count.</p>
            <h2>A quick note from Earth</h2>
            <p>Binface Your Place is unofficial and unaffiliated with Count Binface. It is a fan-made collection of arts-and-crafts ideas for decorating your own place. For official Count Binface news, policies, merch and intergalactic leadership, visit the official Count Binface website.</p>
            <p className="mt-3 text-sm font-bold text-white">This site is about Binface-inspired home decoration ideas, not current campaign updates.</p>
          </div>
          <a className="official-button official-link" href="https://www.countbinface.com/">Official Count Binface website</a>
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

        <section className="craft-panel">
          <p className="section-kicker">Kitchen-table democracy.</p>
          <h2>Make your place count</h2>
          <p>This is for anyone who wants to show support in the most British way possible: by making something out of cardboard and putting it in a window.</p>
          <p>Think paper posters, foil helmets, handmade rosettes, bin podiums, garden signs, temporary bunting, cardboard planets and front-door nonsense.</p>
          <span className="sticker-label">Visible from the street. Made at the kitchen table.</span>
        </section>

        <section id="ideas" className="py-14 scroll-mt-8">
          <p className="section-kicker">Cardboard is the people’s medium.</p>
          <h2 className="section-title">What can you Binface?</h2>
          <div className="craft-grid">
            {binfaceIdeas.map(([title, text]) => <article className="home-idea-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
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
          <ul className="material-list">{materials.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="mt-5 font-bold text-white">Keep it removable, harmless and attached only to places you own or have permission to decorate.</p>
        </section>

        <section className="py-14">
          <p className="section-kicker">A street-sized wave of cardboard nonsense</p>
          <h2 className="section-title">Homemade project cards</h2>
          <div className="craft-grid">
            {projectCards.map(([title, text]) => <article className="home-idea-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
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
