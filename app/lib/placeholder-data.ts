import { v4 as uuidv4 } from 'uuid';
import {
  Age,
  Aspiration,
  Badge,
  BadgeRank,
  Career,
  Chemistry,
  CollegeMajor,
  Hobby,
  Household,
  LifetimeWant,
  Neighbourhood,
  ResidentialLot,
  Sim,
  ZodiacSign,
} from './definitions';

const users = [
  {
    id: uuidv4(),
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const ages: Age[] = [
  { id: uuidv4(), name: 'Baby' },
  { id: uuidv4(), name: 'Toddler' },
  { id: uuidv4(), name: 'Child' },
  { id: uuidv4(), name: 'Teen' },
  { id: uuidv4(), name: 'Young Adult' },
  { id: uuidv4(), name: 'Adult' },
  { id: uuidv4(), name: 'Elder' },
];

const hobbies: Hobby[] = [
  { id: uuidv4(), name: 'Arts & Crafts' },
  { id: uuidv4(), name: 'Cuisine' },
  { id: uuidv4(), name: 'Film & Literature' },
  { id: uuidv4(), name: 'Fitness' },
  { id: uuidv4(), name: 'Games' },
  { id: uuidv4(), name: 'Music & Dance' },
  { id: uuidv4(), name: 'Nature' },
  { id: uuidv4(), name: 'Science' },
  { id: uuidv4(), name: 'Sports' },
  { id: uuidv4(), name: 'Tinkering' },
];

const zodiacSigns: ZodiacSign[] = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
].map((name) => ({
  id: uuidv4(),
  name,
}));

const collegeMajors: CollegeMajor[] = [
  'Art',
  'Biology',
  'Drama',
  'Economics',
  'History',
  'Literature',
  'Mathematics',
  'Philosophy',
  'Physics',
  'Political Science',
  'Psychology',
].map((name) => ({
  id: uuidv4(),
  name,
}));

const aspirations: Aspiration[] = [
  'Grow Up',
  'Fortune',
  'Family',
  'Knowledge',
  'Popularity',
  'Romance',
  'Grilled Cheese',
].map((name) => ({
  id: uuidv4(),
  name,
}));

const lifetimeWants: LifetimeWant[] = [
  'Become a Business Tycoon',
  'Become a Celebrity Chef',
  'Become a Criminal Mastermind',
  'Become a Cult Leader',
  'Become a City Planner',
  'Become a Captain Hero',
  'Become a Dance Hall Tycoon',
  'Become a Education Minister',
  'Become a Game Designer',
  'Become a General',
  'Become a Hall of Famer',
  'Become a Head of SCIA',
  'Become a Mad Scientist',
  'Become a Media Magnate',
  'Become a Professional Party Guest',
  'Become a Rock God',
  'Become a Space Pirate',
  'Become a Visionary',
  'Become Hand of Poseidon',
  'Become the Law',
  'Have 20 Simultaneous Best Friends',
  'Have 20 Simultaneous Lovers',
  'Marry Off 6 Children',
  'Raise 20 Puppies or Kittens',
  'Reach Golden Anniversary',
  'Reach Top of Adventurer Career',
  'Reach Top of Architecture Career',
  'Reach Top of Artist Career',
  'Reach Top of Athletic Career',
  'Reach Top of Dance Career',
  'Reach Top of Entertainment Career',
  'Reach Top of Intelligence Career',
  'Reach Top of Journalism Career',
  'Reach Top of Law Enforcement Career',
  'Reach Top of Medicine Career',
  'Reach Top of Military Career',
  'Reach Top of Music Career',
  'Reach Top of Natural Science Career',
  'Reach Top of Oceanography Career',
  'Reach Top of Paranormal Career',
  'Reach Top of Politics Career',
  'Reach Top of Science Career',
  'Reach Top of Show Business Career',
  'Reach Top of Slacker Career',
  'WooHoo with 20 Different Sims',
].map((name) => ({
  id: uuidv4(),
  name,
}));

const chemistryTraits: Chemistry[] = [
  {
    id: uuidv4(),
    name: 'Black Hair',
  },
  {
    id: uuidv4(),
    name: 'Blonde Hair',
  },
  {
    id: uuidv4(),
    name: 'Brown Hair',
  },
  {
    id: uuidv4(),
    name: 'Red Hair',
  },
  {
    id: uuidv4(),
    name: 'Custom Hair',
  },
  {
    id: uuidv4(),
    name: 'Cologne',
  },
  {
    id: uuidv4(),
    name: 'Stink',
  },
  {
    id: uuidv4(),
    name: 'Fatness',
  },
  {
    id: uuidv4(),
    name: 'Fitness',
  },
  {
    id: uuidv4(),
    name: 'Formal Wear',
  },
  {
    id: uuidv4(),
    name: 'Underwear',
  },
  {
    id: uuidv4(),
    name: 'Swimwear',
  },
  {
    id: uuidv4(),
    name: 'Vampirism',
  },
  {
    id: uuidv4(),
    name: 'Lycanthropy',
  },
  {
    id: uuidv4(),
    name: 'Plantsimism',
  },
  {
    id: uuidv4(),
    name: 'Zombism',
  },
  {
    id: uuidv4(),
    name: 'Witchiness',
  },
  {
    id: uuidv4(),
    name: 'Logical',
  },
  {
    id: uuidv4(),
    name: 'Creative',
  },
  {
    id: uuidv4(),
    name: 'Mechanical',
  },
  {
    id: uuidv4(),
    name: 'Charismatic',
  },
  {
    id: uuidv4(),
    name: 'Cleaning',
  },
  {
    id: uuidv4(),
    name: 'Cooking',
  },
  {
    id: uuidv4(),
    name: 'Good at Gardening',
  },
  {
    id: uuidv4(),
    name: 'Good at Fishing',
  },
  {
    id: uuidv4(),
    name: 'Good at Pottery',
  },
  {
    id: uuidv4(),
    name: 'Good at Toy Making',
  },
  {
    id: uuidv4(),
    name: 'Good at Flower Arranging',
  },
  {
    id: uuidv4(),
    name: 'Good at Robotics',
  },
  {
    id: uuidv4(),
    name: 'Good at Dancing',
  },
  {
    id: uuidv4(),
    name: 'Good at Music',
  },
  {
    id: uuidv4(),
    name: 'Good at Sports',
  },
  {
    id: uuidv4(),
    name: 'Good at Games',
  },
  {
    id: uuidv4(),
    name: 'Good at Tinkering',
  },
  {
    id: uuidv4(),
    name: 'Good at Science',
  },
  {
    id: uuidv4(),
    name: 'Good at Nature',
  },
  {
    id: uuidv4(),
    name: 'Good at Arts & Crafts',
  },
  {
    id: uuidv4(),
    name: 'Good at Fitness',
  },
  {
    id: uuidv4(),
    name: 'Good at Cuisine',
  },
  {
    id: uuidv4(),
    name: 'Good at Film & Literature',
  },
  {
    id: uuidv4(),
    name: 'Good at Music & Dance',
  },
  {
    id: uuidv4(),
    name: 'Good at Sports',
  },
  {
    id: uuidv4(),
    name: 'Good at Tinkering',
  },
];

const badges: Badge[] = [
  'Sales',
  'Toy Making',
  'Robotics',
  'Flower Arranging',
  'Cooking',
  'Fishing',
  'Gardening',
].flatMap((name) =>
  (['bronze', 'silver', 'gold'] as BadgeRank[]).map((badgeRank) => ({
    id: uuidv4(),
    name: `${name} (${badgeRank})`,
    badgeRank,
  }))
);

const careers: Career[] = [
  {
    id: uuidv4(),
    name: 'Adventurer',
  },
  {
    id: uuidv4(),
    name: 'Architecture',
  },
  {
    id: uuidv4(),
    name: 'Athletic',
  },
  {
    id: uuidv4(),
    name: 'Business',
  },
  {
    id: uuidv4(),
    name: 'Criminal',
  },
  {
    id: uuidv4(),
    name: 'Culinary',
  },
  {
    id: uuidv4(),
    name: 'Dance',
  },
  {
    id: uuidv4(),
    name: 'Education',
  },
  {
    id: uuidv4(),
    name: 'Entertainment',
  },
  {
    id: uuidv4(),
    name: 'Gamer',
  },
  {
    id: uuidv4(),
    name: 'Journalism',
  },
  {
    id: uuidv4(),
    name: 'Law',
  },
  {
    id: uuidv4(),
    name: 'Law Enforcement',
  },
  {
    id: uuidv4(),
    name: 'Medical',
  },
  {
    id: uuidv4(),
    name: 'Military',
  },
  {
    id: uuidv4(),
    name: 'Music',
  },
  {
    id: uuidv4(),
    name: 'Natural Science',
  },
  {
    id: uuidv4(),
    name: 'Oceanography',
  },
  {
    id: uuidv4(),
    name: 'Paranormal',
  },
  {
    id: uuidv4(),
    name: 'Politics',
  },
  {
    id: uuidv4(),
    name: 'Science',
  },
  {
    id: uuidv4(),
    name: 'Slacker',
  },
  {
    id: uuidv4(),
    name: 'Show Business',
  },
];

const neighbourhoods: Neighbourhood[] = [
  {
    id: uuidv4(),
    name: 'Pleasantview',
  },
];

const residentialLots: ResidentialLot[] = [
  {
    id: uuidv4(),
    address: '165 Sim Lane',
    neighbourhoodId: neighbourhoods[0].id,
    type: 'house',
    value: 124000,
    numberOfBathrooms: 3,
    numberOfBedrooms: 3,
  },
];

const sims: Sim[] = [
  {
    id: uuidv4(),
    name: 'Bella Goth',
    image_url: '/images/bella_cwir.png',
    aspirationId: aspirations.find(
      (aspiration) => aspiration.name === 'Romance'
    )!.id,
    lifeTimeWantId: lifetimeWants[0].id,
    isRetired: false,
    turnOnsIds: [chemistryTraits[0].id, chemistryTraits[1].id],
    turnOffId: chemistryTraits[2].id,
    bornInRound: 0,
    dayOfBirth: 0,
    isDead: false,
    ageId: ages.find((age) => age.name === 'Adult')!.id,
    personality: {
      zodiacSignId: zodiacSigns.find((zodiac) => zodiac.name === 'Leo')!.id,
      neat: 6,
      outgoing: 8,
      active: 5,
      playful: 7,
      nice: 4,
    },
    interests: {
      politics: 5,
      money: 8,
      food: 7,
      entertainment: 9,
      health: 6,
      crime: 3,
      environment: 4,
      fashion: 10,
      travel: 7,
      paranormal: 8,
      weather: 5,
      school: 6,
      work: 7,
      sciFi: 4,
      culture: 9,
      animals: 6,
      sports: 4,
      toys: 3,
    },
    skills: {
      cooking: 5,
      mechanical: 2,
      charisma: 7,
      body: 3,
      logic: 4,
      creativity: 8,
      cleaning: 5,
    },
    status: 'active',
    isNPC: false,
  },
  {
    id: uuidv4(),
    name: 'Mortimer Goth',
    image_url: '/images/mortimer_cwir.png',
    aspirationId: aspirations.find(
      (aspiration) => aspiration.name === 'Knowledge'
    )!.id,
    lifeTimeWantId: lifetimeWants[1].id,
    careerId: careers.find((career) => career.name === 'Science')?.id,
    careerLevel: 10,
    isRetired: true,
    turnOnsIds: [chemistryTraits[3].id, chemistryTraits[4].id],
    turnOffId: chemistryTraits[5].id,
    bornInRound: 0,
    dayOfBirth: 0,
    isDead: false,
    ageId: ages.find((age) => age.name === 'Elder')!.id,
    personality: {
      neat: 9,
      outgoing: 4,
      active: 3,
      playful: 6,
      nice: 7,
      zodiacSignId: zodiacSigns.find((zodiac) => zodiac.name === 'Virgo')!.id,
    },
    interests: {
      politics: 9,
      money: 10,
      food: 5,
      entertainment: 4,
      health: 7,
      crime: 2,
      environment: 5,
      fashion: 3,
      travel: 8,
      paranormal: 10,
      weather: 4,
      school: 6,
      work: 9,
      sciFi: 7,
      culture: 10,
      animals: 5,
      sports: 2,
      toys: 1,
    },
    skills: {
      cooking: 4,
      mechanical: 6,
      charisma: 5,
      body: 2,
      logic: 10,
      creativity: 9,
      cleaning: 6,
    },
    status: 'active',
    isNPC: false,
  },
];

const households: Household[] = [
  {
    id: uuidv4(),
    funds: 511000,
    houseId: residentialLots[0].id,
    name: 'Goth',
    round: 1,
    simsIds: [sims[0].id, sims[1].id],
    wealth: 635000,
  },
];

export {
  ages,
  aspirations,
  badges,
  careers,
  chemistryTraits,
  collegeMajors,
  hobbies,
  households,
  lifetimeWants,
  neighbourhoods,
  residentialLots,
  sims,
  users,
  zodiacSigns,
};
