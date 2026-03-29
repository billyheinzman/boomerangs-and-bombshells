# Boomerangs & Bombshells

A Christian media platform focused on truth, faith, and discernment.
Created by Billy Heinzman.

## Tech Stack
- React 18
- Vite
- Deployed on Vercel

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## Deploying to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com and import the repo
3. Vercel auto-detects Vite/React — click Deploy
4. Add your custom domain in Project Settings → Domains

## Updating Your Real Links

Open `src/BoomerangsBombshells.jsx` and find the `SOCIAL_LINKS` array near the top.
Replace the placeholder URLs with your real ones:

```js
const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://youtube.com/@YourChannel" },
  { label: "Rumble",  href: "https://rumble.com/c/YourChannel" },
  { label: "Patreon", href: "https://patreon.com/YourPage" },
  { label: "Substack",href: "https://yourname.substack.com" },
];
```

## Contact
boomerangandbombshells@gmail.com
