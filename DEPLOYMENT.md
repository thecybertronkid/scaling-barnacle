# Deployment Guide

## Prerequisites

- Node.js v18+ installed
- Git repository initialized
- GitHub account (for auto-deployment)
- Netlify or Vercel account (optional)

## Build Process

### 1. Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder:
- **dist/index.html** - Root HTML file
- **dist/assets/** - CSS, JS, and images (optimized and minified)

### 2. Test Production Build Locally
```bash
npm run preview
```
Serves the `dist/` folder locally at `http://localhost:4173`

---

## Deployment Options

### Option 1: Netlify (Recommended)

**Method A: GitHub Integration (Automatic Deploys)**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Authorize GitHub and select this repository
5. Netlify auto-detects build config from `netlify.toml`
6. Site auto-deploys on every push to main branch

**Method B: CLI Deployment**
```bash
npm install -g netlify-cli

# First time setup
netlify auth login

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

### Option 2: Vercel (Recommended)

**Method A: GitHub Integration (Automatic Deploys)**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import from Git and select repository
5. Vercel auto-detects config from `vercel.json`
6. Site auto-deploys on every push to main branch

**Method B: CLI Deployment**
```bash
npm install -g vercel

# Deploy
npm run build
vercel --prod
```

### Option 3: Traditional Hosting

**Manual Deployment:**
1. Build the project: `npm run build`
2. Upload `dist/` folder contents to your web server
3. Ensure server is configured to serve `index.html` for all routes (for SPA routing)

### Option 4: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build and run:
```bash
docker build -t pvp-website .
docker run -p 3000:3000 pvp-website
```

---

## Configuration Files

### netlify.toml
```toml
[build]
command = "npm run build"
publish = "dist"

[build.environment]
NODE_VERSION = "18"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Both files are pre-configured for this project.

---

## Environment Variables

Currently, no environment variables are required. If you add any:

### Local Development (.env.local)
```
VITE_API_URL=http://localhost:3000
```

### Netlify
1. Site settings → Build & deploy → Environment
2. Add variables

### Vercel
1. Project settings → Environment Variables
2. Add variables

---

## Post-Deployment Tasks

After deployment, verify:
- [ ] Website loads on custom domain
- [ ] All pages accessible (/, /about, /services, etc.)
- [ ] Dark mode toggle works
- [ ] Mobile menu responsive
- [ ] Gallery lightbox functional
- [ ] Contact form functional
- [ ] Images load correctly
- [ ] No console errors (Check DevTools)

---

## Performance Optimization

Current optimizations active:
- ✅ Code splitting via Vite
- ✅ CSS minification and compression
- ✅ JavaScript minification
- ✅ Asset caching headers

### Tips for Better Performance
- Use image CDN for photo gallery
- Implement lazy loading for images
- Monitor Core Web Vitals in production

---

## Domain Setup

### Point Domain to Netlify
1. Site settings → Domain management
2. Add domain
3. Follow DNS configuration

### Point Domain to Vercel
1. Project settings → Domains
2. Add domain
3. Follow DNS configuration

---

## Troubleshooting

**Issue: Routes not working**
→ Ensure `netlify.toml` or `vercel.json` rewrites are configured

**Issue: Styles not loading**
→ Check that CSS files exist in `dist/assets/`

**Issue: Build fails**
→ Run `npm run build` locally to see exact error

**Issue: 404 on refresh**
→ Server must redirect all routes to `index.html` (SPA requirement)

---

## Rollback

**Netlify**
1. Deployments → Select previous version
2. Click "Restore"

**Vercel**
1. Deployments → Select previous
2. Click promote button

---

## CI/CD Workflow

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

---

## Build Statistics

```
Modules transformed: 52
Build time: ~2 seconds
Total size: ~95 kB (gzipped)
- CSS: 60.35 kB → 9.36 kB (84.5% reduction)
- JS: 288.18 kB → 86.08 kB (70.1% reduction)
```

---

## Support

- **Netlify Help**: https://support.netlify.com
- **Vercel Help**: https://vercel.com/help
- **Vite Issues**: https://github.com/vitejs/vite/issues
