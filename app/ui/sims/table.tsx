import { Sim } from '@/app/lib/definitions';
import Image from 'next/image';

export default async function SimsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // const sims = await fetchFilteredSims(query, currentPage);
  const sims: Sim[] = [
    {
      id: 'sim_001',
      name: 'Bella Goth',
      image_url: '/images/bella_cwir.png',
      householdId: 'household_001',
      aspirationId: 'romance',
      secondaryAspirationId: 'family',
      lifeTimeWantId: 'reach_top_career',
      partnerId: 'sim_002',
      loversIds: ['sim_003'],
      childrenIds: ['sim_004'],
      parentsIds: ['sim_005', 'sim_006'],
      siblingsIds: [],
      careerId: 'journalism',
      careerLevel: 5,
      isRetired: false,
      hobbyId: 'music_dance',
      collegeMajorId: 'literature',
      turnOnsIds: ['charisma', 'formal_wear'],
      turnOffId: 'stink',
      badgesIds: ['cooking_bronze'],
      bornInRound: 1,
      dayOfBirth: 5,
      isDead: false,
      ageId: 'adult',
      personality: {
        zodiacSignId: 'leo',
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
      notesIds: ['note_001'],
    },
    {
      id: 'sim_002',
      name: 'Mortimer Goth',
      image_url: '/images/mortimer_cwir.png',
      householdId: 'household_001',
      aspirationId: 'knowledge',
      secondaryAspirationId: 'fortune',
      lifeTimeWantId: 'max_all_skills',
      partnerId: 'sim_001',
      loversIds: [],
      childrenIds: ['sim_004'],
      parentsIds: [],
      siblingsIds: [],
      careerId: 'science',
      careerLevel: 10,
      isRetired: true,
      hobbyId: 'science',
      collegeMajorId: 'physics',
      turnOnsIds: ['glasses', 'intelligence'],
      turnOffId: 'sloppiness',
      badgesIds: ['logic_gold'],
      bornInRound: 0,
      dayOfBirth: 1,
      isDead: false,
      ageId: 'elder',
      personality: {
        neat: 9,
        outgoing: 4,
        active: 3,
        playful: 6,
        nice: 7,
        zodiacSignId: 'virgo',
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
      notesIds: ['note_002'],
    },
  ];

  return (
    <div className='mt-6 grid grid-cols-1 gap-1 sm:grid-cols-3 lg:grid-cols-4'>
      {sims?.map((sim) => (
        <div
          key={sim.id}
          className='rounded-lg bg-white shadow max-w-60 max-h-60'
        >
          <div className='relative'>
            <Image
              src={sim.image_url ?? ''}
              className='rounded-t-lg'
              width={64}
              height={64}
              layout='responsive'
              objectFit='cover'
              alt={`${sim.name}'s profile picture`}
            />
            <div className='absolute bottom-0 w-full bg-light-blue opacity-85 p-2'>
              <p className='text-lg font-medium text-white'>{sim.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
