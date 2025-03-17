import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import {
  ages,
  aspirations,
  badges,
  careers,
  chemistryTraits,
  collegeMajors,
  hobbies,
  lifetimeWants,
  neighbourhoods,
  users,
  zodiacSigns,
} from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedAges() {
  await sql`
    CREATE TABLE IF NOT EXISTS ages (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const insertedAges = await Promise.all(
    ages.map(
      (age) =>
        sql`
        INSERT INTO ages (id, name)
        VALUES (${age.id}, ${age.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedAges;
}

async function seedHobbies() {
  await sql`
    CREATE TABLE IF NOT EXISTS hobbies (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const insertedHobbies = await Promise.all(
    hobbies.map(
      (hobby) =>
        sql`
        INSERT INTO hobbies (id, name)
        VALUES (${hobby.id}, ${hobby.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedHobbies;
}

async function seedZodiacSigns() {
  await sql`
    CREATE TABLE IF NOT EXISTS zodiac_signs (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon_url VARCHAR(255) NULL
    );
  `;

  const insertedZodiacSigns = await Promise.all(
    zodiacSigns.map(
      (sign) =>
        sql`
        INSERT INTO zodiac_signs (id, name)
        VALUES (${sign.id}, ${sign.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedZodiacSigns;
}

async function seedCollegeMajors() {
  await sql`
    CREATE TABLE IF NOT EXISTS college_majors (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon_url VARCHAR(255) NULL
    );
  `;

  const insertedCollegeMajors = await Promise.all(
    collegeMajors.map(
      (major) =>
        sql`
        INSERT INTO college_majors (id, name)
        VALUES (${major.id}, ${major.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCollegeMajors;
}

async function seedAspirations() {
  await sql`
    CREATE TABLE IF NOT EXISTS aspirations (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon_url VARCHAR(255) NULL
    );
  `;

  const insertedAspirations = await Promise.all(
    aspirations.map(
      (aspiration) =>
        sql`
        INSERT INTO aspirations (id, name)
        VALUES (${aspiration.id}, ${aspiration.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedAspirations;
}

async function seedCareers() {
  await sql`
    CREATE TABLE IF NOT EXISTS careers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon_url VARCHAR(255) NULL
    );
  `;

  const insertedCareers = await Promise.all(
    careers.map(
      (career) =>
        sql`
        INSERT INTO careers (id, name)
        VALUES (${career.id}, ${career.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCareers;
}

async function seedNeighbourhoods() {
  await sql`
    CREATE TABLE IF NOT EXISTS neighbourhoods (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const insertedNeighbourhoods = await Promise.all(
    neighbourhoods.map(
      (neighbourhood) =>
        sql`
        INSERT INTO neighbourhoods (id, name)
        VALUES (${neighbourhood.id}, ${neighbourhood.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedNeighbourhoods;
}

async function seedLifetimeWants() {
  await sql`
    CREATE TABLE IF NOT EXISTS lifetime_wants (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon_url VARCHAR(255) NULL
    );
  `;

  const insertedLifetimeWants = await Promise.all(
    lifetimeWants.map(
      (lifetimeWant) =>
        sql`
        INSERT INTO lifetime_wants (id, name)
        VALUES (${lifetimeWant.id}, ${lifetimeWant.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedLifetimeWants;
}

async function seedChemistries() {
  await sql`
    CREATE TABLE IF NOT EXISTS chemistries (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon_url VARCHAR(255) NULL
    );
  `;

  const insertedChemistries = await Promise.all(
    chemistryTraits.map(
      (chemistry) =>
        sql`
        INSERT INTO chemistries (id, name)
        VALUES (${chemistry.id}, ${chemistry.name})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedChemistries;
}

async function seedBadges() {
  await sql`
    CREATE TABLE IF NOT EXISTS badges (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon_url VARCHAR(255) NULL,
      badge_rank VARCHAR(50) NOT NULL
    );
  `;

  const insertedBadges = await Promise.all(
    badges.map(
      (badge) =>
        sql`
        INSERT INTO badges (id, name, badge_rank)
        VALUES (${badge.id}, ${badge.name}, ${badge.badgeRank})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedBadges;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedAges(),
      seedHobbies(),
      seedZodiacSigns(),
      seedCollegeMajors(),
      seedAspirations(),
      seedNeighbourhoods(),
      seedCareers(),
      seedLifetimeWants(),
      seedChemistries(),
      seedBadges(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
