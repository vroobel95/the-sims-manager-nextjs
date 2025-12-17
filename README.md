# The Sims Manager

A comprehensive Next.js application for managing The Sims game data, including households, sims, aspirations, badges, careers, and more. This tool is designed for players who want to track and manage their Sims gameplay with detailed statistics, personality traits, skills, and relationships.

## Features

### Core Management

- **Sims Management**: Create and manage individual Sims with detailed personality traits, skills, and interests
- **Households**: Organize Sims into households with funds, wealth tracking, and family relationships
- **Lots**: Manage both residential and public lots with detailed information
- **Database**: Browse and manage game dictionaries including:
  - Aspirations and Secondary Aspirations
  - Badges with rank tracking (Bronze, Silver, Gold)
  - Careers and Career Levels
  - Ages, Zodiac Signs, and Hobbies
  - College Majors and Lifetime Wants
  - Neighborhoods and Chemistry Traits

### Sim Tracking

- **Personality System**: Track traits across multiple dimensions (Neat, Outgoing, Active, Playful, Nice)
- **Skills**: Monitor 7 core skills (Cooking, Mechanical, Charisma, Body, Logic, Creativity, Cleaning)
- **Interests**: Track interests in 18 different categories (Politics, Crime, Food, Sports, etc.)
- **Relationships**: Manage family connections (parents, siblings, children) and romantic relationships
- **Life Events**: Track age, birth day, retirement status, death, and round information
- **Custom Notes**: Add personal notes to Sims for gameplay tracking

### User Interface

- Responsive design with Tailwind CSS
- Navigation sidebar with nested links
- Data tables with pagination
- Modal dialogs for data entry
- Breadcrumb navigation
- Add tile shortcuts
- Skeleton loading states

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with [Postgres.js](https://github.com/porsager/postgres)
- **Styling**: Tailwind CSS with PostCSS
- **Forms**: React Hook Form with Zod validation
- **UI Components**: React, Headless UI, Hero Icons
- **Authentication**: Bcrypt for password hashing
- **File Management**: React Dropzone
- **Utilities**: UUID generation, CLSX for conditional classes

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd the-sims-manager-nextjs
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   POSTGRES_URL=postgresql://user:password@localhost:5432/sims_manager
   ```

4. **Seed the database**
   The application includes a seed endpoint to initialize the database with default game data:

   ```bash
   curl http://localhost:3000/api/seed
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── api/
│   ├── client.ts           # Database client configuration
│   └── seed/               # Database seeding endpoint
├── lib/
│   ├── definitions.ts      # TypeScript type definitions
│   ├── utils.ts            # Utility functions
│   ├── placeholder-data.ts # Seed data
│   ├── aspirations/        # Aspiration-related types and data
│   └── badges/             # Badge-related types and data
├── main/
│   ├── layout.tsx          # Main layout
│   ├── (overview)/         # Overview page
│   ├── database/           # Database management pages
│   │   ├── aspirations/
│   │   └── badges/
│   ├── sims/               # Sims management page
├── ui/                     # Reusable React components
│   ├── database/           # Database-specific components
│   ├── sims/               # Sims-specific components
│   └── ...
└── seed/                   # Database initialization
```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks

## Data Models

### Key Types

**Sim**: Represents a playable character with personality, skills, interests, relationships, and life status.

**Household**: A group of Sims living together with accumulated funds and wealth.

**Badge**: Achievement tracking with rank progression (Bronze → Silver → Gold).

**Aspiration**: Character goals and aspirations for Sims.

See [app/lib/definitions.ts](app/lib/definitions.ts) for complete type definitions.

## Database Schema

The application uses PostgreSQL with tables for:

- Users (authentication)
- Sims (character data)
- Households (Sim groups)
- Lots (residential and public properties)
- Game dictionaries (aspirations, badges, careers, etc.)
- Relationships (family and romantic connections)
- Skills, Interests, and Personality traits

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue in the repository.
