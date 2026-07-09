import { Hero } from '@/components/Hero';
import { IdeaCard } from '@/components/IdeaCard';
import { publicAsset } from '@/lib/config';
import { ideas } from '@/lib/ideas';

const OFFICIAL_SITE = 'https://www.countbinface.com/';
const OFFICIAL_POSTER = 'https://countbinface.com/poster';

const whyCards = [
  ['For Earthlings', 'A homemade way to show visible support from your own window, bin, fence or front garden.'],
  ['For Democracy', 'A cardboard-powered reminder that voting does not have to be beige.'],
  ['For Croissants, Ceefax and Lasers', 'The official Count Binface universe includes justice, lasers, Lovejoy, affordable croissants and the return of Ceefax.'],
  ['For Maximum Pavement Visibility', 'The goal is simple: make passers-by think, “Ah. This household welcomes Count Binface.”'],
];

const streetCards = [
  ['One window backs Count Binface', 'A single official poster, handmade sign or silver-star slogan can make support visible from the pavement.'],
  ['One bin backs Count Binface', 'A wheelie bin already has the correct constitutional shape. It merely needs a podium, a slogan and a sense of destiny.'],
  ['One frontage backs Count Binface', 'A door, porch, fence or garden can become homemade support for Count Binface. Keep it friendly, removable and yours.'],
];

const projectCards = [
  ['Count Binface Window Stars', 'VISIBLE FROM PAVEMENT', 'before-after-window.svg', 'Hang foil stars around an official poster to make the glass feel like mission control.'],
  ['Count Binface Rocket Window', 'CARDBOARD DEMOCRACY', 'window-binface.svg', 'Build a foil-bodied rocket with a red nose cone, fins and a round porthole.'],
  ['Count Binface Bunting Garland', 'EARTHLING APPROVED', 'fence-bunting.svg', 'String silver, black and cardboard triangles across your own fence or window.'],
  ['Front Garden Binface Launchpad', 'UNOFFICIAL', 'front-garden-moon-landing.svg', 'Make a standing rocket centrepiece with a foil cone and oversized shiny fins.'],
  ['Count Binface Wheelie Bin HQ', 'BIN-READY', 'wheelie-bin-podium.svg', 'Add removable panels, stars, a planet badge and pretend telescope tubes.'],
  ['Recyclon Flying Saucer', 'RECYCLON READY', 'garden-moon-landing.svg', 'Create a tiny foil saucer with a clear dome and green alien pilot.'],
  ['Count Binface Support Placards', 'BIG SLOGAN ENERGY', 'fence-public-cheerfulness.svg', 'Paint friendly cardboard signs with one bold slogan and a few foil stars.'],
];

const slogans = ['Make Your Place Count','This Bin Backs Binface','Earthlings For Binface','Make Earth Great Again','Recyclons Welcome','Count Binface Support HQ','Window For Binface','Cardboard For Democracy','Affordable Croissants Now','Bring Back Ceefax','Lasers, Lovejoy and Local Democracy'];
const lookBook = [
  ['Window poster', 'Paper slogan, foil stars, visible from the pavement.', 'window-binface.svg'],
  ['Bin podium', 'One wheelie bin. One cardboard lectern. Infinite authority.', 'wheelie-bin-podium.svg'],
  ['Door banner', 'A temporary welcome to mild constitutional chaos.', 'front-door-banner.svg'],
  ['Fence bunting', 'Flags, planets and signs on your own fence.', 'fence-bunting.svg'],
  ['Garden scene', 'A tiny moon landing for one heroic household bin.', 'garden-moon-landing.svg'],
  ['Porch HQ', 'Arrows, badges and deeply unserious civic energy.', 'porch-campaign-hq.svg'],
];
const beforeAfter = [['Before: normal window', 'After: window backing Count Binface', 'before-after-window.svg'],['Before: ordinary bin', 'After: bin with destiny', 'before-after-bin.svg'],['Before: quiet fence', 'After: fence of Count Binface support', 'before-after-fence.svg']];
const materials = ['cardboard', 'paper', 'foil', 'string', 'tape', 'felt tips', 'delivery boxes', 'reusable decorations', 'window-safe materials', 'paper plates', 'bottle tops', 'wrapping paper', 'anything silver'];
const materialIcons = ['▰', '▤', '✦', '〰', '▱', '✎', '▣', '★', '▢', '◯', '●', '▧', '✧'];

export default function Home() {
  return (<><Hero /><main className="mx-auto max-w-6xl px-4">
    <section className="unofficial-note"><div><p className="section-kicker">UNOFFICIAL / EARTHLING APPROVED</p><h2>A quick note from Earth</h2><p>Binface Your Place is an unofficial supporter decoration project. It is not run by, approved by or affiliated with Count Binface. It exists to help earthlings make their own homes, windows, bins and fences look like they support Count Binface. For the real Count Binface — news, policies, posters, merch and intergalactic leadership — visit the official Count Binface website.</p></div><a className="official-button official-link" href={OFFICIAL_SITE}>Visit the official Count Binface site</a></section>

    <section className="craft-panel poster-card"><p className="section-kicker">START HERE / OFFICIAL POSTER</p><h2>Start with the official poster</h2><p>The simplest way to Count Binface your place is to print the official Count Binface campaign poster, stick it in your window, then build the nonsense around it.</p><ul className="mt-5 grid gap-2 text-lg font-bold text-white md:grid-cols-2"><li>Add foil stars around it.</li><li>Frame it with homemade bunting.</li><li>Put a cardboard rocket beside it.</li><li>Give your wheelie bin a matching podium.</li></ul><a className="official-button official-link mt-6 inline-block" href={OFFICIAL_POSTER}>Get the official poster</a></section>

    <section className="py-16"><p className="section-kicker">CARDBOARD DEMOCRACY</p><h2 className="section-title">Why Count Binface?</h2><p className="section-intro">Because politics is already absurd. Count Binface simply has the decency to look the part.</p><div className="craft-grid mt-8">{whyCards.map(([title,text])=><article className="craft-card poster-card" key={title}><span className="sticker-label">EARTHLING APPROVED</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section id="ideas" className="py-16 scroll-mt-24" aria-labelledby="home-ideas-heading"><p className="section-kicker">Ideas hub / BIN-READY</p><h2 id="home-ideas-heading" className="section-title">Missions for Count Binface-supporting households</h2><p className="section-intro">Choose a homemade mission, raid the recycling, and make your place visibly Count Binface. Start with one window, one bin, one fence or one front garden. The aim is not polish. The aim is unmistakable democratic weirdness.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{ideas.map((idea) => <IdeaCard key={idea.slug} idea={idea} />)}</div></section>

    <section className="official-strip"><div><p className="section-kicker">OFFICIAL COUNT BINFACE</p><h2>Looking for the real Count Binface?</h2><p>This site helps you decorate your place. The official Count Binface site is where to find the actual campaign, policies, posters, merch, videos and intergalactic declarations.</p></div><div className="flex flex-wrap gap-3"><a className="official-button official-link" href={OFFICIAL_SITE}>Official Count Binface website</a><a className="official-button official-link" href={OFFICIAL_POSTER}>Printable campaign poster</a></div></section>

    <section className="street-section"><p className="section-kicker">For windows, bins, fences and other democratic surfaces.</p><h2>Your street, but clearly backing Count Binface</h2><p>The idea is simple: make ordinary homes look like they have joined a polite, cardboard-based uprising for Count Binface. A window gets a poster. A bin gets promoted. A fence grows a slogan. A front garden becomes a tiny democratic launchpad.</p><div className="craft-grid">{streetCards.map(([title, text], index) => <article className="craft-card poster-card" key={title}><span className="sticker-label">{['UNOFFICIAL', 'BIN-READY', 'VISIBLE FROM PAVEMENT'][index]}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="before-after-strip" aria-labelledby="before-after-heading"><h2 id="before-after-heading">Before and after</h2><div className="grid gap-5 md:grid-cols-3">{beforeAfter.map(([before, after, image]) => <article className="before-after-card" key={before}><img className="svg-illustration" src={publicAsset(`/images/${image}`)} alt="" /><div><span>{before}</span><strong>{after}</strong></div></article>)}</div></section>

    <section className="craft-panel"><p className="section-kicker">Kitchen-table democracy.</p><h2>Make your place count</h2><p>This is for anyone who wants to show support in the most British way possible: by making something out of cardboard and putting it in a window.</p><p>Think paper posters, foil helmets, handmade rosettes, bin podiums, garden signs, temporary bunting, cardboard planets and front-door nonsense.</p><span className="sticker-label">Visible from the street. Made at the kitchen table.</span></section>

    <section className="py-16"><p className="section-kicker">COPY BANK</p><h2 className="section-title">Slogans to copy</h2><div className="slogan-grid mt-8">{slogans.map(s=><span key={s}>{s}</span>)}</div></section>

    <section className="py-16"><p className="section-kicker">Inspiration board</p><h2 className="section-title">The look book</h2><p className="section-intro">Start with something small. A window. A bin. A fence. A sign. Then let visible-from-the-pavement support for Count Binface spread politely.</p><div className="lookbook-grid">{lookBook.map(([label, caption, image]) => <figure className="lookbook-tile" key={label}><img className="svg-illustration" src={publicAsset(`/images/${image}`)} alt="" /><figcaption><strong>{label}</strong><span>{caption}</span></figcaption></figure>)}</div></section>

    <section className="craft-wave"><p className="section-kicker">When politics gets weird, cardboard gets useful.</p><h2>The dream: a Count Binface-supporting craft wave</h2><p>A few windows become a row. A row becomes a street. A street becomes a place where everyone knows something deeply silly is happening.</p><p>That is the spirit of Binface Your Place: harmless, homemade, visible-from-the-pavement support for Count Binface.</p><span className="sticker-label">Many homes. Many bins. Zero beige.</span></section>

    <section className="craft-panel"><p className="section-kicker">Foil, felt tips and mild constitutional chaos.</p><h2>Make it yourself</h2><p>No special kit required. Raid the recycling, find the felt tips, rescue some cardboard and make something joyfully daft.</p><div className="material-chip-grid">{materials.map((item, index) => <span className="material-chip" key={item}><b>{materialIcons[index]}</b>{item}</span>)}</div><p className="mt-5 font-bold text-white">Keep it removable, harmless and attached only to places you own or have permission to decorate.</p></section>

    <section className="py-16"><p className="section-kicker">A street-sized wave of cardboard nonsense</p><h2 className="section-title">Homemade Count Binface-supporting project cards</h2><div className="craft-grid">{projectCards.map(([title, label, image, text]) => <article className="visual-card poster-card" key={title}><div className="visual-card__image"><img className="svg-illustration" src={publicAsset(`/images/${image}`)} alt="" /></div><div className="visual-card__body"><span className="visual-card__label">{label}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="craft-panel mb-8"><p className="section-kicker">Keep it friendly</p><h2>Keep it kind and removable</h2><p>Binface Your Place is about decorating your own space for fun. Keep it temporary, removable and friendly. Use your own home, your own window, your own bin, your own fence or somewhere you have permission to decorate.</p><p>The best version of this is cheerful, visible and harmless: something that makes people smile as they walk past, without creating mess or bother for anyone else.</p><p className="tiny-rule-goblin">The Tiny Rule Goblin says: ask permission, use common sense, and let the council sleep peacefully tonight.</p></section>
  </main></>);
}
