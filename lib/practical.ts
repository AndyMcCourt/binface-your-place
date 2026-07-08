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
  'wheelie-bin-press-conference': {
    bestFor: ['bins on private driveways', 'front gardens', 'yards', 'shop backs with permission'],
    materials: ['your wheelie bin', 'cardboard lectern or shoebox podium', 'paper speech bubbles', 'tape that will peel off cleanly', 'two chairs or boxes for a backdrop', 'felt tips'],
    steps: ['Put the bin on your own property where it is visible but not blocking anyone.', 'Make a cardboard sign for the front: “Temporary Ministry of Bins” works beautifully.', 'Tape a paper speech bubble to the lid or prop it on a stick beside the bin.', 'Use a chair, sheet of cardboard or wall as the dramatic press backdrop.', 'Add one or two paper microphones, then stop before the driveway becomes a summit.', 'Check the bin can still be moved easily if collection day is approaching.'],
    wording: ['This bin is temporarily recognised as an intergalactic embassy.', 'Temporary Ministry of Bins.', 'I will be taking no further questions until collection day.', 'Local area now 14% more constitutional.', 'No leaflets were harmed in the making of this display.'],
    upgrades: ['Add a “PRESS” line on the ground with string.', 'Create a second recycling-bin spokesperson for coalition talks.', 'Make a tiny manifesto taped to the lectern, not the bin mechanism.'],
    sensible: ['Keep it on private ground.', 'Do not block pavements, roads, shared access or bin collection routes.', 'Avoid heavy props that could fall or blow away.'],
    tinyVersion: 'Write one speech bubble, tape it lightly inside the lid area, take a photo, then remove it before the bin goes out.',
    bigVersion: 'Build a cardboard lectern, backdrop, paper microphones and a two-bin cabinet reshuffle on your driveway.',
    relatedIdeas: ['bin-shrine', 'low-budget-binfication-kit'],
  },
  'binface-embassy': {
    bestFor: ['porches', 'windows', 'garden gates', 'shopfronts with permission'],
    materials: ['paper flags', 'cardboard sign', 'string', 'removable tape or tack', 'plant pot or mug as ceremonial desk', 'pens'],
    steps: ['Choose a doorway, window or gate you own or have permission to decorate.', 'Make a main sign that says exactly what this tiny embassy claims to be.', 'Add two paper flags or cardboard planets for diplomatic weight.', 'Create a “visa desk” using a plant pot, mug or tiny table inside your boundary.', 'Add one copy-paste label and one absurd department name.', 'Step back and remove anything that looks too official or blocks access.'],
    wording: ['This bin is temporarily recognised as an intergalactic embassy.', 'Officially unofficial.', 'Visa applications accepted on bin day only.', 'Department of Mildly Improved Democracy.', 'Diplomatic immunity pending common sense.'],
    upgrades: ['Add opening hours: “10-ish until tea”.', 'Make a tiny cardboard stamp labelled “APPROVED BY NO ONE”.', 'Add a paper queue that is merely a line of bottle tops.'],
    sensible: ['Make the unofficial nature obvious.', 'Do not attach anything to shared gates or business fronts without permission.', 'Keep doors, locks, letterboxes and safety notices clear.'],
    relatedIdeas: ['beach-hut-consulate', 'constitutionally-significant-doormat'],
  },
  'window-of-intergalactic-compliance': {
    bestFor: ['front windows', 'office windows with permission', 'shop windows with permission'],
    materials: ['A4 paper or scrap card', 'felt tips', 'foil stars', 'removable window-safe tape or tack', 'optional chalk pen'],
    steps: ['Pick one window pane and keep the display inside the glass.', 'Write one large line that can be read from the pavement.', 'Add two smaller labels, stars or arrows around it.', 'Keep a clear gap so curtains, blinds and handles still work.', 'Check from outside that no private letters, photos or house numbers are visible behind it.'],
    wording: ['This window has been democratically upgraded.', 'Binface compliance inspection passed.', 'Local area now 14% more constitutional.', 'Less beige. More Binface.', 'Officially unofficial.'],
    upgrades: ['Make a paper certificate of Binfication.', 'Add foil planets in the corners.', 'Create a curtain-side “Department of Mildly Improved Democracy”.'],
    sensible: ['Use window-safe removable materials only.', 'Do not cover safety glass markings, alarms or shop notices.', 'Avoid anything that blocks a driver’s view if this is a car or vehicle window.'],
    tinyVersion: 'Write “This window has been democratically upgraded” on one sheet of paper and place it inside the glass.',
    bigVersion: 'Create a full-window paper constellation of slogans, foil stars and an inspection certificate.',
    relatedIdeas: ['binface-blue-plaque', 'low-budget-binfication-kit'],
  },
  'front-garden-moon-landing': {
    bestFor: ['front gardens', 'plant pots', 'private paths', 'yards'],
    materials: ['foil', 'cardboard moon or crater shapes', 'paper stars', 'one bin or plant pot', 'string or tape', 'small stones to weigh card down'],
    steps: ['Choose a patch fully inside your boundary.', 'Cut a moon, crater or planet from cardboard and cover part of it with foil.', 'Place a bin, plant pot or toy as the brave lunar explorer.', 'Add a small flag or sign using a pencil, stick or rolled paper tube.', 'Weigh down lightweight pieces so wind cannot recruit them.', 'Check the path remains clear and nobody has to step over the moon.'],
    wording: ['One small step for bins.', 'Front Garden Lunar Authority.', 'A small but important victory for cardboard.', 'Please form an orderly queue for nonsense.', 'Local area now 14% more constitutional.'],
    upgrades: ['Add a press conference zone for the returning bin.', 'Make cardboard craters labelled “Policy Hole A” and “Policy Hole B”.', 'Use paper stars in the window behind it.'],
    sensible: ['Avoid trip hazards.', 'Keep props away from pavements and roads.', 'Bring paper and foil indoors if the weather turns dramatic.'],
    relatedIdeas: ['mini-garden-rally', 'scarecrow-binface'],
  },
  'constitutionally-significant-doormat': {
    bestFor: ['front doors', 'porches', 'private hallways', 'office doors with permission'],
    materials: ['paper or card sign', 'removable tack', 'plant pot or shoe box sign holder', 'pens', 'optional chalk on private paving'],
    steps: ['Do not tape paper onto the walking surface of the mat.', 'Make a sign to sit beside or above the doormat instead.', 'Keep the words large enough to read before someone trips over curiosity.', 'Attach it to a door, plant pot or shoe box where it will not slide.', 'Test the door opens fully and deliveries can still land safely.'],
    wording: ['Please form an orderly queue for nonsense.', 'You are now entering mild constitutional chaos.', 'This threshold has been democratically upgraded.', 'Officially unofficial.', 'No leaflets were harmed in the making of this display.'],
    upgrades: ['Add a “customs desk” plant pot for imaginary paperwork.', 'Make a tiny arrivals sign with arrows.', 'Add a paper rosette to the door knocker if it peels off cleanly.'],
    sensible: ['Avoid slip hazards on steps and mats.', 'Do not block letterboxes, handles, locks or access ramps.', 'Use chalk only on private surfaces where it is allowed and washable.'],
    relatedIdeas: ['binface-embassy', 'window-of-intergalactic-compliance'],
  },
  'shop-window-surrender': {
    bestFor: ['your own fence', 'front garden railings', 'shop windows or fences with permission'],
    materials: ['paper flags', 'string', 'cardboard signs', 'clothes pegs or removable ties', 'felt tips', 'foil planets'],
    steps: ['Confirm you own the fence or have clear permission.', 'Make three to five small signs rather than one enormous proclamation.', 'Tie or peg them on so they can come off without marks.', 'Leave gates, handles, numbers, lights and neighbour boundaries clear.', 'Walk past from pavement distance and check it reads as friendly, not furious.'],
    wording: ['The Fence of Public Cheerfulness.', 'Local area now 14% more constitutional.', 'Please form an orderly queue for nonsense.', 'A small but important victory for cardboard.', 'Less beige. More Binface.'],
    upgrades: ['Create a row of cardboard planets.', 'Add bunting made from scrap paper.', 'Give each fence panel a fictional department.'],
    sensible: ['Nothing permanent on rented or shared boundaries without permission.', 'No sharp ties, protruding sticks or loose string at eye height.', 'Remove everything before bad weather if it might blow away.'],
    relatedIdeas: ['window-of-intergalactic-compliance', 'front-garden-moon-landing'],
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
    relatedIdeas: ['low-budget-binfication-kit'],
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
    doThis: ['Start tiny.', 'Use cardboard, paper, foil, string, tape and pens.', 'Keep it obviously fan-made and unofficial.', 'Ask permission for shared, rented or business spaces.', 'Remove it before it becomes mess.'],
    dontThis: ['Do not stick things to public property.', 'Do not block pavements, roads, doors, safety notices or bin collections.', 'Do not impersonate officials, councils or Count Binface.', 'Do not show private details in photos.', 'Do not buy special kit unless you already wanted to.'],
    wording: ['Officially unofficial.', 'Temporary Ministry of Bins.', 'This window has been democratically upgraded.', 'Local area now 14% more constitutional.', 'Please form an orderly queue for nonsense.', 'A small but important victory for cardboard.'],
    related,
  };
}
