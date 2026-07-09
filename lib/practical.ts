import type { Idea } from './ideas';
import type { Article } from './articles';

export type IdeaPractical = {
  intro: string;
  bestFor: string[];
  materials: string[];
  time: string;
  cost: string;
  difficulty: string;
  steps: string[];
  wording: string[];
  upgrades: string[];
  sensible: string[];
  photoTip: string;
  removal: string[];
  tinyVersion: string;
  bigVersion: string;
  relatedIdeas: string[];
};

const baseMaterials = ['cardboard or an old delivery box', 'paper', 'felt tips or pens', 'masking tape, string or removable tack', 'scissors', 'foil or anything silver'];
const standardWording = [
  'Officially unofficial.',
  'Department of Mildly Improved Democracy.',
  'Please form an orderly queue for nonsense.',
  'Binface compliance inspection passed.',
  'A small but important victory for cardboard.',
];

const practicalBySlug: Record<string, Partial<IdeaPractical>> = {
  'foil-star-window-constellation': {
    bestFor: ['front windows', 'bay windows', 'shop windows with permission'],
    materials: ['scrap cardboard', 'foil', 'thread or cotton', 'removable tape', 'star template or hand-drawn stars', 'scissors'],
    steps: ['Draw and cut several stars in at least three sizes.', 'Cover the largest stars with foil and leave some smaller stars white or silver.', 'Tape thread to the back of the hanging stars.', 'Fix the threads to the inside top of the window frame.', 'Add smaller stars directly to the inside glass or surrounding card.', 'Step outside and rebalance any gaps.'],
    wording: ['Window Mission Control.', 'Public Cheerfulness Constellation.', 'Officially unofficial orbit achieved.', 'Please do not startle the stars.'],
    upgrades: ['Add one ringed planet among the stars.', 'Hang stars at different depths for a 3D look.', 'Use a dark curtain behind them for extra contrast.'],
    relatedIdeas: ['cardboard-rocket-window', 'paper-planet-rings'],
  },
  'cardboard-rocket-window': {
    bestFor: ['large window panes', 'porches', 'covered front steps'],
    materials: ['large cardboard panel', 'foil', 'red or black paper', 'dark paper circle', 'tape', 'scissors'],
    steps: ['Cut a tall rocket body and a separate triangle nose cone.', 'Cover the body in foil and colour the cone.', 'Cut two side fins and one bottom fin, then tape them behind the body.', 'Make a porthole with a dark circle and foil rim.', 'Tape the rocket inside the window or prop it securely on private ground.', 'Surround it with stars or planets so it feels part of the same mission.'],
    wording: ['Cardboard Launch Vehicle One.', 'One small step for front windows.', 'Mission status: cheerful.', 'No actual rockets were launched.'],
    upgrades: ['Add paper flames below the rocket.', 'Put a small alien face in the porthole.', 'Make a matching tiny rocket for a side window.'],
    relatedIdeas: ['front-garden-rocket-launch', 'foil-star-window-constellation'],
  },
  'paper-planet-rings': {
    materials: ['cardboard circles', 'thin cardboard strips or oval rings', 'markers', 'foil scraps', 'string or removable tape'],
    steps: ['Cut one circle for each planet.', 'Cut a wide oval ring or long strip to pass behind the planet.', 'Draw stripes and shadows on the planet.', 'Attach the ring behind the circle or slot it through for a Saturn effect.', 'Hang small planets in windows and tie larger ones to private fences.', 'Repeat the same planet style across the display for cohesion.'],
    wording: ['Local orbit established.', 'Planet of Public Cheerfulness.', 'Ring road closed for nonsense.', 'Intergalactic garden sector.'],
    upgrades: ['Make one oversized fence planet.', 'Use brown cardboard for a rustic planet and foil for the ring.', 'Label each planet as a fictional department.'],
    relatedIdeas: ['moon-and-crater-cutouts', 'space-bunting-garland'],
  },
  'space-bunting-garland': {
    materials: ['scrap paper or cardboard', 'foil', 'string', 'tape or staples', 'markers', 'pegs or removable ties'],
    steps: ['Cut a set of matching triangles.', 'Decorate each triangle with one bold space symbol.', 'Fold the top of each triangle over string and tape it down.', 'Alternate silver, black and brown-card flags.', 'Tie the garland to your own fence, door or inside window.', 'Check it cannot blow loose or snag anyone.'],
    wording: ['Public Cheerfulness Space Programme.', 'More bunting, less beige.', 'This fence has entered orbit.', 'Officially unofficial celebrations.'],
    upgrades: ['Add a tiny rocket flag in the centre.', 'Make a matching mini garland for the door.', 'Use clothes pegs so flags can be rearranged.'],
    relatedIdeas: ['foil-door-stars', 'public-cheerfulness-placards'],
  },
  'front-garden-rocket-launch': {
    materials: ['tall cardboard box or panels', 'foil', 'tape', 'garden cane or stake', 'round clear packaging or paper porthole', 'cardboard fins'],
    steps: ['Build a tall rocket body from a box or taped panels.', 'Add a foil cone, porthole and contrasting bands.', 'Cut wide fins and tape them firmly to the base.', 'Support the rocket with a stake or by leaning it safely against a private fence.', 'Add a launch sign and a few stars around the base.', 'Check it stays stable in wind and does not block the path.'],
    wording: ['Public Cheerfulness Launchpad.', 'Mission control: front garden.', 'Countdown to mild nonsense.', 'Engineering review pending.'],
    upgrades: ['Add foil flames at the bottom.', 'Place moon cutouts either side.', 'Give it a cardboard control panel.'],
    sensible: ['Keep the rocket fully on private ground.', 'Weight or secure it so it cannot fall into access routes.', 'Bring it inside during bad weather.'],
    relatedIdeas: ['cardboard-rocket-window', 'moon-and-crater-cutouts'],
  },
  'wheelie-bin-space-station': {
    bestFor: ['wheelie bins on private driveways', 'covered bin stores with permission'],
    materials: ['removable card panels', 'foil stars', 'cardboard tubes', 'shoebox or flat box', 'tape', 'string'],
    steps: ['Make decorations on card panels first so the bin itself stays clean.', 'Tape stars and a ringed planet to the panels.', 'Cover two cardboard tubes with foil.', 'Fix the tubes to a box lid to create pretend telescopes.', 'Rest the box on the bin only while supervised and safe.', 'Remove everything before collection or bad weather.'],
    wording: ['Wheelie Bin Space Station.', 'Collection day launch window.', 'Refuse Command has entered orbit.', 'Do not jettison the recycling.'],
    upgrades: ['Add a cardboard control panel.', 'Make a matching mission badge for the lid.', 'Stage a tiny press conference beside it.'],
    sensible: ['Do not stop the lid opening or the bin being moved.', 'Keep the bin off pavements and roads.', 'Remove tubes if wind picks up.'],
    relatedIdeas: ['paper-planet-rings', 'public-cheerfulness-placards'],
  },
  'flying-saucer-and-alien': {
    materials: ['paper plates or cardboard circles', 'foil', 'clear packaging for a dome', 'green paper or small toy alien', 'short cardboard tubes', 'tape or glue'],
    steps: ['Make a shallow saucer from two plates or cardboard circles.', 'Cover it with foil and add small rim details.', 'Create a clear dome from safe recycled packaging.', 'Place a green paper alien or toy inside.', 'Add short tube legs and test that it stands flat.', 'Display it on private ground away from feet and wheels.'],
    wording: ['Alien parking only.', 'Take me to your recycling.', 'UFO: Unidentified Friendly Object.', 'Diplomatic landing in progress.'],
    upgrades: ['Add tiny headlights from foil circles.', 'Make a cardboard landing pad.', 'Put a mini flag beside the alien.'],
    relatedIdeas: ['front-garden-rocket-launch', 'foil-door-stars'],
  },

  'moon-and-crater-cutouts': {
    materials: ['cardboard circles', 'plate or bowl to trace around', 'black marker', 'foil scraps', 'string or removable tape'],
    steps: ['Trace and cut one large circle.', 'Draw crater circles and a shaded edge.', 'Add foil highlights sparingly.', 'Attach the moon to a fence, window or planter stake you control.', 'Pair it with two stars or one planet so it belongs to the wider space display.'],
    wording: ['Moon of Mild Nonsense.', 'Crater of Public Cheerfulness.', 'Low-budget lunar authority.', 'Please mind the moon.'],
    relatedIdeas: ['paper-planet-rings', 'front-garden-rocket-launch'],
  },
  'public-cheerfulness-placards': {
    materials: ['delivery-box cardboard', 'garden cane or scrap stick', 'bold marker or paint', 'foil stars', 'tape'],
    steps: ['Cut a neat cardboard rectangle.', 'Write one short message in large letters.', 'Add one icon: heart, bucket, star, planet or rocket.', 'Tape the sign to a stake.', 'Place it in your own planter, garden bed or window display.'],
    wording: ['PUBLIC CHEERFULNESS.', 'Bucket Sector reporting for duty.', 'This garden supports mild nonsense.', 'Officially unofficial space programme.'],
    upgrades: ['Make two matching signs at different heights.', 'Add foil stars to the corners.', 'Create a pretend department name under the main slogan.'],
    relatedIdeas: ['space-bunting-garland', 'moon-and-crater-cutouts'],
  },
  'foil-door-stars': {
    materials: ['cereal-box card', 'foil', 'removable tack or tape', 'star template', 'optional short bunting strand'],
    steps: ['Cut five to nine stars in different sizes.', 'Cover them with foil and flatten the edges.', 'Place larger stars on door panels and smaller stars around them.', 'Keep locks, handles, numbers, bells and letterboxes clear.', 'Press tape lightly so the stars can be removed without marks.'],
    wording: ['Doorway to cardboard space.', 'Please knock in orbit.', 'Front door sector: cheerful.', 'Stars temporarily in residence.'],
    upgrades: ['Add a short space bunting strand above the door.', 'Put one ringed planet near the bottom panel.', 'Make a matching star for a plant pot.'],
    relatedIdeas: ['space-bunting-garland', 'foil-star-window-constellation'],
  },
};

function categoryBestFor(category: string) {
  if (category.includes('Bin')) return ['bins on private property', 'driveways', 'yards'];
  if (category.includes('Garden')) return ['front gardens', 'plant pots', 'private paths'];
  if (category.includes('Window') || category.includes('Porch')) return ['windows', 'porches', 'doors'];
  if (category.includes('Balcon')) return ['balconies where building rules allow it'];
  if (category.includes('Shop')) return ['shopfronts with owner or manager permission'];
  return ['windows', 'bins', 'porches', 'gardens or any surface you own'];
}

export function getIdeaPractical(idea: Idea): IdeaPractical {
  const custom = practicalBySlug[idea.slug] ?? {};
  const base: IdeaPractical = {
    intro: `${idea.title} is a small, mock-official act of civic daftness: visible, removable, cheap and much easier than explaining Earth politics to a bin.`,
    bestFor: categoryBestFor(idea.category),
    materials: baseMaterials,
    time: idea.time,
    cost: idea.cost === '£0' ? 'Free if you raid the recycling' : idea.cost === '£' ? 'Usually under £5 if you already have tape and pens' : 'Under £10 if you keep it cardboard-first',
    difficulty: idea.difficulty === 'Absurd' ? 'Elaborate, but only because you chose theatre' : idea.difficulty,
    steps: [
      'Choose a spot you own or have clear permission to decorate.',
      'Sketch the display on scrap paper before cutting anything heroic.',
      'Make one big readable sign and two smaller silly details.',
      'Attach everything with removable tape, string, pegs or tack.',
      'Step outside, check it is visible, friendly and not blocking anything.',
      'Take a quick photo, then keep an eye on weather, wind and collection day.',
    ],
    wording: standardWording,
    upgrades: ['Add foil stars, paper rosettes or cardboard arrows.', 'Create a tiny fictional department sign.', 'Give a bin, plant pot or doormat a formal job title.'],
    sensible: [idea.ruleReminder, 'Use private property or get permission first.', 'Keep exits, pavements, roads, shared spaces and safety notices clear.'],
    photoTip: 'Photograph close enough to show the joke, but crop out faces, house numbers, car plates, street signs, private letters and neighbours who did not volunteer for intergalactic administration.',
    removal: ['Peel tape slowly rather than yanking it.', 'Untie string and save reusable pieces.', 'Recycle clean card and paper.', 'Wipe any chalk pen or residue with a suitable cleaner for that surface.'],
    tinyVersion: 'Make one handwritten A4 sign, place it somewhere you control, enjoy the tiny constitutional incident for five minutes, then remove it cleanly.',
    bigVersion: 'Build a three-part display with a headline sign, a fictional department, props, and one completely unnecessary label for maximum bureaucratic nonsense.',
    relatedIdeas: ['foil-star-window-constellation'],
  };
  return { ...base, ...custom };
}

export function getArticleActionSections(article: Article) {
  const related = article.relatedIdeas;
  return {
    starter: [
      'Pick one surface you control: a window, bin, porch, plant pot, doormat-adjacent sign or garden patch.',
      'Write one large line people can understand in three seconds.',
      'Add one silly official-looking label, then make the unofficial joke obvious.',
      'Use removable materials and photograph it without private details.',
    ],
    scenarios: [
      'Nervous beginner: one A4 window sign saying “This window has been democratically upgraded.”',
      'Bin owner with 20 minutes: one speech bubble and a shoebox lectern for a wheelie-bin briefing.',
      'Garden person: one plant pot, one foil moon, one tiny sign marked “Front Garden Lunar Authority.”',
    ],
    doThis: ['Start tiny.', 'Use cardboard, paper, foil, string, tape and pens.', 'Keep it obviously unofficial, independent and unaffiliated.', 'Ask permission for shared, rented or business spaces.', 'Remove it before it becomes mess.'],
    dontThis: ['Do not stick things to public property.', 'Do not block pavements, roads, doors, safety notices or bin collections.', 'Do not impersonate officials, councils or Count Binface.', 'Do not show private details in photos.', 'Do not buy special kit unless you already wanted to.'],
    wording: ['Officially unofficial.', 'Temporary Ministry of Bins.', 'This window has been democratically upgraded.', 'Local area now 14% more constitutional.', 'Please form an orderly queue for nonsense.', 'A small but important victory for cardboard.'],
    related,
  };
}
