# Dr.Protein - Functional Peptide Nutrition Platform

## Overview

Dr.Protein is a web application for Russia's first peptide-based bone broth product line. The platform serves as an educational and lead generation tool, with future e-commerce capabilities. It targets multiple audience segments (children, athletes, office workers, families, 30+, 60+, biohackers) with a science-first approach to functional nutrition.

The application emphasizes scientific credibility through peptide bioavailability research while maintaining an approachable, natural aesthetic inspired by Soylent.com (structure/functionality) and MyMatti.ru (warmth/naturalness).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and dev server
- Wouter for lightweight client-side routing
- React Query (@tanstack/react-query) for server state management

**UI Component System:**
- Shadcn/ui component library (Radix UI primitives)
- Tailwind CSS for styling with custom design tokens
- "New York" style variant with neutral base color
- Custom CSS variables for theming (light mode default)

**Design System:**
- Typography: Inter font family (Google Fonts)
- Color palette: White/light gray base, blue (#2563EB) primary accent, optional green (#10B981) secondary
- Spacing: Tailwind's systematic spacing units (4, 6, 8, 12, 16, 20, 24)
- Custom border radius: 9px (lg), 6px (md), 3px (sm)

**State Management:**
- React Query for API data fetching and caching
- React Hook Form with Zod for form validation
- Local component state with React hooks

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system
- Custom middleware for request logging and JSON parsing

**API Design:**
- RESTful endpoints under `/api` prefix
- Resource-based routing (products, articles, contacts, newsletter)
- JSON request/response format
- Error handling with appropriate HTTP status codes

**Data Layer:**
- Drizzle ORM for database interactions
- PostgreSQL as the target database (via Neon serverless driver)
- In-memory storage implementation for development/fallback
- Zod schemas for runtime type validation

**Database Schema:**
- **Products table:** id, name, slug, description, protein, composition, benefits[], usage instructions, image URL, category, availability
- **Articles table:** id, title, slug, excerpt, content, category, author, image URL, timestamps
- **Contact submissions table:** id, name, email, phone, message, timestamps
- **Newsletter subscriptions table:** id, email, timestamps

### Application Structure

**Monorepo Layout:**
```
/client          - Frontend application (Vite + React)
  /src
    /components  - Reusable UI components
    /pages       - Route-level page components
    /hooks       - Custom React hooks
    /lib         - Utilities and query client
/server          - Backend API (Express)
/shared          - Shared types and schemas (Drizzle + Zod)
/attached_assets - Static assets and design references
```

**Key Routes:**
- `/` - Homepage with hero, problem statement, science overview, audience segments
- `/science` - Deep dive into peptide science and bioavailability
- `/products` - Product catalog with detailed specifications
- `/for-whom` - Audience-specific landing pages
- `/blog` - Educational content with category filtering
- `/about` - Brand story and values
- `/contacts` - Lead generation form
- `/privacy` & `/terms` - Legal pages

**Content Strategy:**
- Educational-first approach (science of peptides, protein deficiency awareness)
- Audience segmentation (children, athletes, office workers, families, 30+, 60+, biohackers)
- Lead magnets and consultation CTAs before direct sales
- Blog categories: science, recipes, interviews, stories

### Development Workflow

**Environment Configuration:**
- Development mode: Vite dev server with HMR
- Production build: Static client bundle + bundled Express server
- Database migrations: Drizzle Kit for schema management
- TypeScript checking: Separate from build process

**Path Aliases:**
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## External Dependencies

### Database & ORM
- **PostgreSQL** (via DATABASE_URL environment variable)
- **Neon Serverless Driver** (`@neondatabase/serverless`) - Serverless Postgres connection
- **Drizzle ORM** (`drizzle-orm`, `drizzle-kit`) - Type-safe database toolkit
- **Drizzle Zod** - Schema-to-Zod validation generator

### UI & Styling
- **Radix UI** - Headless component primitives (accordion, dialog, dropdown, etc.)
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Variant-based component styling
- **Embla Carousel** - Carousel/slider functionality
- **Lucide React** - Icon library

### Form Management
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Validation resolver for React Hook Form

### API & Data Fetching
- **TanStack Query** - Server state management and caching
- **date-fns** - Date manipulation utilities

### Development Tools
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **ESBuild** - Production bundling
- **PostCSS** with Autoprefixer - CSS processing

### Replit-Specific Integrations
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Development tooling (dev mode only)
- `@replit/vite-plugin-dev-banner` - Development banner (dev mode only)

### Third-Party Services (Planned)
- **Google Fonts** - Inter typography
- **Google Analytics 4** - Analytics tracking
- **Yandex Metrika** - Russian market analytics
- **Bitrix24** - CRM integration for lead management
- **SendPulse** - Email marketing and newsletters
- **Telegram/WhatsApp** - Live chat integration

### Session & Authentication (Future)
- **connect-pg-simple** - PostgreSQL session store (for future authentication)
- **express-session** - Session management middleware