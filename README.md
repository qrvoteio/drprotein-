# Dr.Protein - Peptide Bone Broth Platform

Russia's first peptide-based bone broth product line website. Educational platform focused on peptide science and functional nutrition.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Express.js + TypeScript
- **Styling:** Tailwind CSS + Shadcn/ui
- **State Management:** TanStack Query
- **Forms:** React Hook Form + Zod
- **Routing:** Wouter
- **Storage:** In-memory (production ready for PostgreSQL)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Run development server:
```bash
npm run dev
```

4. Open http://localhost:5000

## Production Deployment

### Build
```bash
npm run build
```

### Start
```bash
npm start
```

### Environment Variables

Required for production:
- `SESSION_SECRET` - Random secret key for session encryption
- `NODE_ENV=production`

Optional:
- `DATABASE_URL` - PostgreSQL connection string (uses in-memory storage if not provided)

## Railway Deployment

1. Connect GitHub repository to Railway
2. Set environment variable: `SESSION_SECRET`
3. Railway will auto-detect Node.js and deploy
4. Configure custom domain in Railway settings

## Project Structure

```
/client          - Frontend React application
  /src
    /components  - Reusable UI components
    /pages       - Route-level pages
    /hooks       - Custom React hooks
    /lib         - Utilities
/server          - Backend Express API
/shared          - Shared types and schemas
```

## License

MIT
