export type NavLink = {
  name: string;
  href?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type RoundStatus = 'active' | 'finished' | 'not started';

export type Sim = {
  id: string;
  name: string;
  householdId: string;
  aspirationId: string;
  secondaryAspirationId?: string;
  lifeTimeWantId: string;
  partnerId: string;
  loversIds: string[];
  childrenIds: string[];
  parentsIds: string[];
  siblingsIds: string[];
  careerId: string;
  careerLevel: number;
  isRetired: boolean;
  hobbyId: string;
  collegeMajorId: string;
  turnOnsIds: string[];
  turnOffId: string;
  badgesIds: string[];
  bornInRound: number;
  dayOfBirth: number;
  isDead: boolean;
  ageId: string;
  personality: SimPersonality;
  interests: SimInterests;
  skills: SimSkills;
  image_url?: string;
  status: RoundStatus;
  isNPC: boolean;
  notesIds: string[];
};

export type SimPersonality = {
  zodiacSignId: string;
  neat: number;
  outgoing: number;
  active: number;
  playful: number;
  nice: number;
};

export type SimInterests = {
  politics: number;
  crime: number;
  food: number;
  sports: number;
  work: number;
  school: number;
  money: number;
  entertainment: number;
  health: number;
  paranormal: number;
  weather: number;
  toys: number;
  environment: number;
  culture: number;
  fashion: number;
  travel: number;
  animals: number;
  sciFi: number;
};

export type SimSkills = {
  cooking: number;
  mechanical: number;
  charisma: number;
  body: number;
  logic: number;
  creativity: number;
  cleaning: number;
};
