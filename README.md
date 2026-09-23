# Pravesh Gurung — Portfolio

A bold, space-themed personal portfolio built with **Next.js 16**, **Framer Motion**, **Three.js-free aurora background**, **Tailwind CSS v4**, and **static data** (no database required).

---

## ✨ Features

- Animated aurora background (Canvas 2D — violet, fuchsia, cyan orbs with mouse parallax)
- Bold, gradient-heavy design with scroll-triggered animations (in AND out)
- Floating glassmorphism navbar with active-section detection
- Split hero layout with live stats card
- Sections: Hero, About, Skills, Experience, Projects, Certifications, Contact
- Working contact form → email notification via Nodemailer (SMTP)
- Fully responsive, ultrawide-safe centering
- Zero database dependency — all content is static TypeScript

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env and configure SMTP (optional — for contact form emails)
cp .env.example .env

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Environment Variables

Only needed if you want contact form emails. Copy `.env.example` to `.env`:

| Variable | Description |
|---|---|
| `SMTP_HOST` | SMTP host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (usually `587`) |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password or SMTP password |
| `CONTACT_EMAIL` | Where to receive contact form messages |

If SMTP is not configured, the contact form will still work — emails are silently skipped in development.

---

## 📁 Project Structure

```
app/
  layout.tsx          # Root layout, SEO metadata, JSON-LD
  page.tsx            # Home — imports static data from constants/
  not-found.tsx       # Animated 404
  api/
    contact/          # POST — validates input + sends email notification

components/
  main/               # Section components (Hero, About, Skills, etc.)
  sub/                # StarsCanvas (aurora background)
  providers/          # ThemeProvider

constants/
  index.ts            # All static data: skills, projects, experience, certifications

config/
  index.ts            # Site metadata, nav links, social URLs

lib/
  motion.ts           # Framer Motion animation variants
  utils.ts            # cn() utility
  email.ts            # Nodemailer wrapper
```

---

## 🎨 Updating Content

All content lives in `constants/index.ts` as plain TypeScript arrays. Edit that file to update:

- **Skills** — `skills[]`
- **Experience & Education** — `experience[]`
- **Projects** — `projects[]`
- **Certifications** — `certifications[]`

Site metadata (name, email, LinkedIn, GitHub, etc.) lives in `config/index.ts`.

---

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add SMTP environment variables in Vercel project settings (optional)
4. Deploy — no database setup needed

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Background | Canvas 2D (custom aurora mesh) |
| Contact | Nodemailer (SMTP) |
| Validation | Zod |
| Language | TypeScript |

---

Built by **Pravesh Gurung** — [GitHub](https://github.com/Praveshgurung112) · [LinkedIn](https://www.linkedin.com/in/pravesh-gurung-407a38244/)
