import { z } from 'zod';

const uuidSchema = z.string().uuid();

type UUID = z.infer<typeof uuidSchema>;

export type User = {
  id: UUID;
  name: string;
  email: string;
  password: string;
};

export type NavLink = {
  name: string;
  href?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type RoundStatus = 'active' | 'finished' | 'not started';
export type ResidentialLotType = 'apartment' | 'house' | 'dorm' | 'greek house';
export type PublicLotType =
  | 'cemetary'
  | 'disco'
  | 'casino'
  | 'bowling'
  | 'restaurant'
  | 'art gallery'
  | 'flower shop'
  | 'beauty salon'
  | 'grocery shop'
  | 'recreation'
  | 'clothes store'
  | 'park';
export type BadgeRank = 'bronze' | 'silver' | 'gold';

type Lot = {
  id: UUID;
  address: string;
};

type Dictionary = {
  id: UUID;
  name: string;
  icon_url?: string;
};

export type Age = Dictionary;
export type Hobby = Dictionary;
export type Neighbourhood = Dictionary;
export type Career = Dictionary;
export type ZodiacSign = Dictionary;
export type CollegeMajor = Dictionary;
export type LifetimeWant = Dictionary;
export type Aspiration = Dictionary;
export type Chemistry = Dictionary;
export type Badge = Dictionary & {
  badgeRank: BadgeRank;
};

export type ResidentialLot = Lot & {
  type: ResidentialLotType;
  neighbourhoodId: UUID;
  value: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
};

export type PublicLot = Lot & {
  type: PublicLotType;
  ownerid: UUID;
  value: number;
  workersIds: string[];
};

export type Household = {
  id: UUID;
  name: string;
  round: number;
  houseId: UUID;
  funds: number;
  wealth?: number;
  simsIds: string[];
  image_url?: string;
};

export type Sim = {
  id: UUID;
  name: string;
  householdId?: UUID;
  aspirationId: UUID;
  secondaryAspirationId?: UUID;
  lifeTimeWantId: UUID;
  partnerId?: UUID;
  loversIds?: UUID[];
  childrenIds?: UUID[];
  parentsIds?: UUID[];
  siblingsIds?: UUID[];
  careerId?: UUID;
  careerLevel?: number;
  isRetired: boolean;
  hobbyId?: UUID;
  collegeMajorId?: UUID;
  turnOnsIds?: UUID[];
  turnOffId?: UUID;
  badgesIds?: UUID[];
  bornInRound: number;
  dayOfBirth: number;
  isDead: boolean;
  ageId: UUID;
  personality: SimPersonality;
  interests: SimInterests;
  skills: SimSkills;
  image_url?: string;
  status: RoundStatus;
  isNPC: boolean;
  notesIds?: string[];
};

export type SimPersonality = {
  zodiacSignId: UUID;
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
