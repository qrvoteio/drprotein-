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
- **Process Manager:** PM2
- **Web Server:** Nginx + SSL (Let's Encrypt)

## Production Server

- **IP:** 45.141.78.46
- **Domain:** dev.vdbot1.store
- **Status:** Live Production ✅

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

   **Local development (with HMR):**
   ```bash
   PORT=3000 npm run dev
   ```
   Open http://localhost:3000

   **Dev subdomain (requires sync after changes):**
   - Server runs at https://dev.vdbot1.store
   - Sync changes: `rsync -av --exclude=node_modules /home/drprotein-/ /var/www/drprotein/`
   - Restart dev: `pm2 restart drprotein-dev`

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
- `PORT` - Server port (default: 5000)

Optional:
- `DATABASE_URL` - PostgreSQL connection string (uses in-memory storage if not provided)

### Server Deployment

1. **Connect to server:**
```bash
ssh root@45.141.78.46
```

2. **Clone repository:**
```bash
cd /var/www/drprotein
git clone https://github.com/ваш-username/drprotein-.git .
```

3. **Install and build:**
```bash
npm install
npm run build
```

4. **Setup environment:**
```bash
nano .env
# Add NODE_ENV=production, SESSION_SECRET=your-secret, etc.
```

5. **Deploy with PM2:**
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

6. **Configure Nginx:**
```bash
sudo nano /etc/nginx/sites-available/drprotein
# Configure reverse proxy and SSL
sudo ln -s /etc/nginx/sites-available/drprotein /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```

## Server Management

### Check application status:
```bash
pm2 status
pm2 logs drprotein
```

### Restart application:
```bash
pm2 restart drprotein
```

### Update application:
```bash
cd /var/www/drprotein
git pull origin main
npm install
npm run build
pm2 restart drprotein
```

### Check server resources:
```bash
htop
df -h
free -h
```

### Monitor logs:
```bash
# Application logs
pm2 logs drprotein --lines 100 -f

# Nginx logs
sudo tail -f /var/log/nginx/drprotein_access.log
sudo tail -f /var/log/nginx/drprotein_error.log

# System logs
sudo journalctl -u nginx -f
```

## SSL Certificate

SSL certificate is managed by Let's Encrypt and auto-renews:

```bash
# Check certificate status
sudo certbot certificates

# Renew manually
sudo certbot renew --dry-run
```

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

## Production URLs

- **Main site:** https://dev.vdbot1.store
- **WWW redirect:** https://www.dev.vdbot1.store
- **API endpoints:** https://dev.vdbot1.store/api/*

## Monitoring

- **PM2 Monitor:** `pm2 monit`
- **Application Health:** Check logs with `pm2 logs drprotein`
- **Server Health:** Monitor with `htop`, `df -h`, `free -h`
- **SSL Certificate:** Auto-renews via Certbot
- **Nginx Status:** `sudo systemctl status nginx`

## Troubleshooting

### Common Issues:

1. **Site not loading:**
   - Check: `pm2 status`
   - Check: `sudo systemctl status nginx`
   - Check: `sudo nginx -t`

2. **Application errors:**
   - Check: `pm2 logs drprotein --lines 50`
   - Check: Environment variables in `.env`
   - Restart: `pm2 restart drprotein`

3. **SSL issues:**
   - Check: `sudo certbot certificates`
   - Renew: `sudo certbot renew --force-renewal`

4. **DNS issues:**
   - Check: `nslookup dev.vdbot1.store`
   - Verify DNS records point to 45.141.78.46

## License

MIT
