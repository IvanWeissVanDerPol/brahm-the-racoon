# Brahm the Racoon — Music Project

Alternative, acoustic, and indie rock — intimate confessions set to melodies that build from whisper to roar.

> *"Brahm isn't a character. Brahm is the real one. The rest is armor."*

## Songs

| # | Title | Genre | Duration |
|---|-------|-------|----------|
| 1 | Still Reaching | Alternative | 4:12 |
| 2 | The Engineer | Indie Rock | 5:08 |
| 3 | Brahm | Acoustic / Folk | 4:45 |
| 4 | Good Boy | Alternative / Acoustic | 3:58 |
| 5 | Touch Starvation | Slowcore / Ambient | 5:30 |
| 6 | Pesado | Indie / Art Rock | 4:30 |
| 7 | Undetectable | Power Ballad | 5:15 |
| 8 | Let Me Be Held | Ambient / Ballad | 4:50 |

## Tech Stack

- **Next.js 15** + TypeScript + Tailwind CSS
- Single-page artist website with smooth scroll sections
- Dark, moody aesthetic — raccoon/moon/amber palette
- Token-based theming (PAB pattern)
- WhatsApp contact integration

## Deploy

### Docker Swarm

```bash
docker build -t brahm-the-racoon:prod .
docker stack deploy -c docker-compose.yml brahm-the-racoon
```

### Local Dev

```bash
npm install
npm run dev
```

## Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   └── sections/     # Page sections (header, hero, music, lyrics, about, contact, footer)
├── data/
│   └── songs.ts      # Song data with full lyrics
└── tokens/           # Design tokens (colors, typography)
```

## Live

[https://brahm.paragu-ai.com](https://brahm.paragu-ai.com)
